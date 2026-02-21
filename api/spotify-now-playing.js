/**
 * Vercel serverless function: Spotify Now Playing
 *
 * Set these env vars in Vercel (or .env.local for vercel dev):
 *   SPOTIFY_CLIENT_ID
 *   SPOTIFY_CLIENT_SECRET
 *   SPOTIFY_REFRESH_TOKEN
 *
 * To get SPOTIFY_REFRESH_TOKEN: use the Authorization Code flow once
 * (e.g. https://developer.spotify.com/documentation/web-api/tutorials/code-flow)
 * with scopes: user-read-currently-playing, user-read-playback-state
 */

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN

  if (!clientId || !clientSecret || !refreshToken) {
    return res.status(500).json({
      error: 'Missing Spotify env vars (SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN)',
    })
  }

  try {
    const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }),
    })

    if (!tokenRes.ok) {
      const err = await tokenRes.text()
      console.error('Spotify token error', tokenRes.status, err)
      return res.status(502).json({ error: 'Spotify token failed' })
    }

    const tokenData = await tokenRes.json()
    const accessToken = tokenData.access_token

    const nowPlayingRes = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: { Authorization: `Bearer ${accessToken}` },
    })

    if (nowPlayingRes.status === 204 || nowPlayingRes.status === 200) {
      if (nowPlayingRes.status === 204) {
        return res.status(200).json({ isPlaying: false })
      }
      const data = await nowPlayingRes.json()
      const item = data.item
      if (!item) {
        return res.status(200).json({ isPlaying: false })
      }
      const albumArt = item.album?.images?.[0]?.url
      return res.status(200).json({
        isPlaying: true,
        title: item.name,
        artist: item.artists?.map((a) => a.name).join(', '),
        albumArt: albumArt || null,
        trackUrl: item.external_urls?.spotify || null,
      })
    }

    return res.status(200).json({ isPlaying: false })
  } catch (e) {
    console.error('Spotify now-playing error', e)
    return res.status(500).json({ error: 'Failed to fetch now playing' })
  }
}
