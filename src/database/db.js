const { Pool } = require('pg');
const cfg = require('../config');
if (!cfg.databaseUrl) throw new Error('DATABASE_URL is required. Add Railway PostgreSQL and set DATABASE_URL.');
const pool = new Pool({ connectionString: cfg.databaseUrl, ssl: process.env.PGSSL === 'disable' ? false : { rejectUnauthorized: false }, max: 5, idleTimeoutMillis: 30000 });
pool.on('error', err => console.error('[database] idle client error:', err));
async function init() {
  await pool.query(`CREATE TABLE IF NOT EXISTS guild_settings (guild_id TEXT PRIMARY KEY, welcome_channel_id TEXT, welcome_message TEXT, autorole_id TEXT, autorole_enabled BOOLEAN NOT NULL DEFAULT FALSE, mod_log_channel_id TEXT, updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW());
  CREATE TABLE IF NOT EXISTS moderation_cases (id BIGSERIAL PRIMARY KEY, guild_id TEXT NOT NULL, case_type TEXT NOT NULL, target_id TEXT NOT NULL, target_tag TEXT, moderator_id TEXT NOT NULL, reason TEXT NOT NULL, duration TEXT, active BOOLEAN NOT NULL DEFAULT TRUE, created_at TIMESTAMPTZ NOT NULL DEFAULT NOW());
  CREATE INDEX IF NOT EXISTS moderation_cases_guild_target ON moderation_cases(guild_id, target_id, created_at DESC);
  CREATE TABLE IF NOT EXISTS bot_settings (guild_id TEXT PRIMARY KEY, created_at TIMESTAMPTZ NOT NULL DEFAULT NOW());`);
}
module.exports = { pool, init };
