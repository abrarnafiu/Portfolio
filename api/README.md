# Spotify Now Playing API

This folder contains a Vercel serverless function that fetches your currently playing track from Spotify.

## Setup

1. **Create a Spotify app** at [Spotify Developer Dashboard](https://developer.spotify.com/dashboard). Note your **Client ID** and **Client Secret**.

2. **Get a refresh token** (one-time). Use the [Authorization Code flow](https://developer.spotify.com/documentation/web-api/tutorials/code-flow):
   - Redirect URL: add `http://localhost:3000/callback` (or your dev URL) in the app settings.
   - Request scopes: `user-read-currently-playing`, `user-read-playback-state`.
   - After authorizing, exchange the code for tokens and save the `refresh_token`.

3. **Set environment variables** in Vercel (Project → Settings → Environment Variables):
   - `SPOTIFY_CLIENT_ID`
   - `SPOTIFY_CLIENT_SECRET`
   - `SPOTIFY_REFRESH_TOKEN`

4. **Point the frontend to the API.** After deploying to Vercel, your function will be at `https://your-project.vercel.app/api/spotify-now-playing`. Create a `.env` (or `.env.local`) in the project root:
   ```
   VITE_SPOTIFY_NOW_PLAYING_URL=https://your-project.vercel.app/api/spotify-now-playing
   ```
   Rebuild the app so the env is picked up.

## Local development

Run `vercel dev` in the project root to use the serverless function locally; then set `VITE_SPOTIFY_NOW_PLAYING_URL=http://localhost:3000/api/spotify-now-playing` (or the port Vercel uses).

If the URL is not set, the Interests section will show a placeholder instead of live “Now Playing” data.
