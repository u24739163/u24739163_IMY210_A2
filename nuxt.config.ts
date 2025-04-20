// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'netlify'
  },
  runtimeConfig: {
    mailersendKey: process.env.MAILERSEND_API_KEY,
    public: {
      githubToken: process.env.GITHUB_TOKEN
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  plugins: [{ src: '~/plugins/bootstrap.client.js', mode: 'client' }],
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui'
  ]
})