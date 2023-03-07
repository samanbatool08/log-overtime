const { environment } = require('@rails/webpacker')

// Disable polyfills for Node.js features
environment.config.node = {
  __dirname: false,
  __filename: false,
  global: false,
}

module.exports = environment