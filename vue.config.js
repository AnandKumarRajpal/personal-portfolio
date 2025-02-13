const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/personal-portfolio/',
  transpileDependencies: [
    'vuetify'
  ]
})
