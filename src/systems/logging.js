const { AttachmentBuilder } = require('discord.js');
const cfg = require('../config');
const { pool } = require('../database/db');
const { embed, logoFile } = require('./brand');
async function logAction(guild, title, details) {
  let channelId = cfg.modLogChannelId;
  try { const r = await pool.query('SELECT mod_log_channel_id FROM guild_settings WHERE guild_id=$1', [guild.id]); if (r.rows[0]?.mod_log_channel_id) channelId = r.rows[0].mod_log_channel_id; } catch {}
  const ch = await guild.channels.fetch(channelId).catch(() => null);
  if (!ch?.isTextBased()) return;
  const e = embed(`📋 ${title}`, details);
  await ch.send({ embeds: [e], files: [logoFile()] }).catch(err => console.error('[logging]', err.message));
}
module.exports = { logAction };
