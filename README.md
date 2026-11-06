# NOVEX MODERATION

A Discord.js v14 moderation and server-management bot configured for your Novex server.

## Railway deployment

1. Create a Railway project and add a **PostgreSQL** service.
2. Add this repository as a Railway service.
3. Set the following service variables:
   - `DISCORD_TOKEN` — bot token (never commit it or send it in chat)
   - `CLIENT_ID` — `1568366321639362662`
   - `GUILD_ID` — `694270550524035112`
   - `DATABASE_URL` — reference Railway PostgreSQL's `DATABASE_URL`
   - `STAFF_ROLE_ID` — `1567671313827364934`
   - `MOD_LOG_CHANNEL_ID` — `1567671393133265039`
   - `SUPPORT_URL` — `https://discord.com/channels/694270550524035112/1567671330655043756`
4. Use `npm install` as the install command and `npm start` as the start command.
5. Run `npm run deploy` once after setting the variables to register guild slash commands. You can run it locally with the same environment variables, or temporarily set Railway's start command to `npm run deploy` and then restore it to `npm start`.

## Discord Developer Portal

Enable the **Server Members Intent** and **Message Content Intent** under Bot → Privileged Gateway Intents. Invite the bot with `bot` and `applications.commands` scopes and permissions for moderation, message management, channel management, embeds, sending messages, viewing channels, and role management. Keep the bot's highest role above roles it needs to assign or moderate.

## Stock editing

Edit `data/stock.json` in your GitHub repository and deploy the change. The stock panel's Refresh button rereads the JSON file on the running instance. For Railway deployments, commit and redeploy JSON changes so the running service receives them. Do not store the only copy of important records in the ephemeral filesystem; PostgreSQL is used for moderation cases and server settings.

## Commands included

`/warn`, `/unwarn`, `/checkwarns`, `/kick`, `/softban`, `/ban`, `/unban`, `/mute`, `/unmute`, `/purge`, `/nuke`, `/announcement`, `/poj`, `/autorole`, `/dm`, `/say`, `/help`, `/serverstats`, `/view stock`, `/setlogs`.

## Important limitations / verification

This project has been syntax-checked, but it has **not** been connected to your Discord application or Railway environment, so live Discord permissions, intents, interactions, and database connectivity still need to be verified in your server. The `/unwarn` command requires a warning case ID; `/purge` filters by user (role filtering is not implemented); the `/nuke` confirmation recreates a text channel and preserves Discord-cloned channel settings but cannot restore messages. Online member counts and role-change logging are not included. The join role mention is currently stored as part of the configured welcome message; prefer including the role mention directly in the message if you want a ping.

Never commit `.env` or expose your bot token. Use Railway Variables.
