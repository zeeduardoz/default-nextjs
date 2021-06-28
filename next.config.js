const path = require('path')

module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  env: {
    DISCORD_CLIENT_ID: '530362701604454420',
    DISCORD_CLIENT_SECRET: 'GsYFKOlxCCBd3FcNkK-Z0K0Uq9yE4kCP',
    DISCORD_CALLBACK: 'http://localhost:3000/auth/discord/callback'
  }
}
