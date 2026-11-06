require('dotenv').config();
module.exports = {
  token: process.env.DISCORD_TOKEN,
  clientId: process.env.CLIENT_ID || '1568366321639362662',
  guildId: process.env.GUILD_ID || '694270550524035112',
  databaseUrl: process.env.DATABASE_URL,
  supportUrl: process.env.SUPPORT_URL || 'https://discord.com/channels/694270550524035112/1567671330655043756',
  staffRoleId: process.env.STAFF_ROLE_ID || '1567671313827364934',
  modLogChannelId: process.env.MOD_LOG_CHANNEL_ID || '1567671393133265039',
  brand: process.env.BRAND_NAME || 'NOVEX MODERATION',
  blue: 0x0866FF,
  cyan: 0x00E5FF
};
