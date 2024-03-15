
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "04621f51-6bcb-4535-899b-33b5404db9c5"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
