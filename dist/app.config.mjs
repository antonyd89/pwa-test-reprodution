
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "fedb5001-7edb-42d5-9ec7-da554eefb145"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
