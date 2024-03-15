
const prefix = 'company-name-es'
const suffix = 'v2'
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  devServer: {
    port: 1337,
  },
  telemetry: false,
  imports: {
    autoImport: false,
  },
  components: {},
  routeRules: {
    "/": { prerender: true },
  },
  nitro: {
    prerender: {
      routes: ['/'],
    }
  },
  buildDir: 'dist',
  modules: [
      '@vite-pwa/nuxt',
  ],
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      showInstallPrompt: true,
      name: 'company-name',
      short_name: 'company-name',
      description: 'description site',
      crossorigin: 'use-credentials',
      dir: 'auto',
      lang: 'es-ES',
      display: 'standalone',
      orientation: 'any',
      scope: '/',
      background_color: '#ffffff',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/pwa-icon.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    meta: {
      name: 'meta name title',
      author: 'company-name',
      description: 'description goes here...',
      charset: 'utf-8',
      theme_color: '#ffffff',
      lang: 'es-ES',
    },
    strategies: 'generateSW',
    workbox: {
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/*/],
      globPatterns: ["**/*.{js,html,css,png,ico,woff2,svg,json}"],
      runtimeCaching: [
        {
          urlPattern: ({ sameOrigin, request }) => sameOrigin && request.mode === 'navigate',
          handler: 'NetworkFirst',
          options: {
            cacheName: `${prefix}-cached-${suffix}`,
            expiration: {
              maxEntries: 20,
              maxAgeSeconds: 7 * 24 * 3600,
            },
            cacheableResponse: {
              statuses: [200],
            },
            plugins: [{
              handlerDidError: async ({ state }) => {
                return state?.fallback ? Response.redirect('/', 302) : undefined
              },
              cacheWillUpdate: async ({ response }) => response?.status === 200 ? response : null,
              handlerWillRespond: async (ctx) => {
                if (!ctx.response) {
                  ctx.state ??= {}
                  ctx.state.fallback = true
                }
                return ctx.response
              },
            }],
          },
        },
        {
          urlPattern: ({ url }) => url.pathname.endsWith('.css'),
          method: 'GET',
          handler: 'NetworkFirst',
          options: {
            cacheName: `${prefix}-css-${suffix}`,
            expiration: {
              maxEntries: 20,
              maxAgeSeconds: 7 * 24 * 3600, // 1 week
            },
            cacheableResponse: {
              statuses: [200],
            },
          },
        },
        {
            urlPattern: ({ url }) => url.pathname.endsWith('.png'),
            method: 'GET',
            handler: 'NetworkFirst',
            options: {
              cacheName: `${prefix}-images-${suffix}`,
              expiration: {
                maxAgeSeconds: 7 * 24 * 3600, // 1 week
              },
            },
          },
      ],
    },
    devOptions: {
      enabled: true,
      suppressWarnings: false,
      type: 'module',
    },
  },
});
