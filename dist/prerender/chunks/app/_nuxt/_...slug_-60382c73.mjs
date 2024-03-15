import { u as useHead } from './index-6a088328.mjs';
import { defineComponent, ref, withAsyncContext, useSSRContext, shallowRef, toRef, getCurrentInstance, onServerPrefetch, unref } from 'file:///Users/antondidenko/Downloads/nuxt-3-sdk-demo-9opbku/node_modules/vue/index.mjs';
import { d as asyncDataDefaults, e as useNuxtApp, c as createError$1 } from '../server.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'file:///Users/antondidenko/Downloads/nuxt-3-sdk-demo-9opbku/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/antondidenko/Downloads/nuxt-3-sdk-demo-9opbku/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/antondidenko/Downloads/nuxt-3-sdk-demo-9opbku/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/antondidenko/Downloads/nuxt-3-sdk-demo-9opbku/node_modules/hookable/dist/index.mjs';
import 'file:///Users/antondidenko/Downloads/nuxt-3-sdk-demo-9opbku/node_modules/unctx/dist/index.mjs';
import 'file:///Users/antondidenko/Downloads/nuxt-3-sdk-demo-9opbku/node_modules/unhead/dist/index.mjs';
import 'file:///Users/antondidenko/Downloads/nuxt-3-sdk-demo-9opbku/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/antondidenko/Downloads/nuxt-3-sdk-demo-9opbku/node_modules/h3/dist/index.mjs';
import 'file:///Users/antondidenko/Downloads/nuxt-3-sdk-demo-9opbku/node_modules/ufo/dist/index.mjs';
import 'file:///Users/antondidenko/Downloads/nuxt-3-sdk-demo-9opbku/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/antondidenko/Downloads/nuxt-3-sdk-demo-9opbku/node_modules/destr/dist/index.mjs';
import 'file:///Users/antondidenko/Downloads/nuxt-3-sdk-demo-9opbku/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/antondidenko/Downloads/nuxt-3-sdk-demo-9opbku/node_modules/scule/dist/index.mjs';
import 'file:///Users/antondidenko/Downloads/nuxt-3-sdk-demo-9opbku/node_modules/klona/dist/index.mjs';
import 'file:///Users/antondidenko/Downloads/nuxt-3-sdk-demo-9opbku/node_modules/ohash/dist/index.mjs';
import 'file:///Users/antondidenko/Downloads/nuxt-3-sdk-demo-9opbku/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/antondidenko/Downloads/nuxt-3-sdk-demo-9opbku/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/antondidenko/Downloads/nuxt-3-sdk-demo-9opbku/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/antondidenko/Downloads/nuxt-3-sdk-demo-9opbku/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/antondidenko/Downloads/nuxt-3-sdk-demo-9opbku/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/antondidenko/Downloads/nuxt-3-sdk-demo-9opbku/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/antondidenko/Downloads/nuxt-3-sdk-demo-9opbku/node_modules/pathe/dist/index.mjs';

const pwaInfo = { "pwaInDevEnvironment": false, "webManifest": { "href": "/manifest.webmanifest", "useCredentials": false, "linkTag": '<link rel="manifest" href="/manifest.webmanifest">' } };
const __nuxt_component_0 = defineComponent({
  async setup() {
    if (pwaInfo) {
      const meta = ref({ link: [] });
      useHead(meta);
      const { webManifest } = pwaInfo;
      if (webManifest) {
        const { href, useCredentials } = webManifest;
        if (useCredentials) {
          meta.value.link.push({
            rel: "manifest",
            href,
            crossorigin: "use-credentials"
          });
        } else {
          meta.value.link.push({
            rel: "manifest",
            href
          });
        }
      }
    }
    return () => null;
  }
});
function useAsyncData(...args) {
  var _a2, _b, _c, _d, _e, _f, _g, _h;
  var _a;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxt = useNuxtApp();
  const getDefault = () => null;
  const getDefaultCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b = options.default) != null ? _b : getDefault;
  options.getCachedData = (_c = options.getCachedData) != null ? _c : getDefaultCachedData;
  options.lazy = (_d = options.lazy) != null ? _d : false;
  options.immediate = (_e = options.immediate) != null ? _e : true;
  options.deep = (_f = options.deep) != null ? _f : asyncDataDefaults.deep;
  const hasCachedData = () => ![null, void 0].includes(options.getCachedData(key));
  if (!nuxt._asyncData[key] || !options.immediate) {
    (_g = (_a = nuxt.payload._errors)[key]) != null ? _g : _a[key] = null;
    const _ref = options.deep ? ref : shallowRef;
    nuxt._asyncData[key] = {
      data: _ref((_h = options.getCachedData(key)) != null ? _h : options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxt.payload._errors, key),
      status: ref("idle")
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxt.isHydrating && opts._initial !== false) && hasCachedData()) {
      return Promise.resolve(options.getCachedData(key));
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((_result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxt.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = createError$1(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxt.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/Ysera";
const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b;
    let __temp, __restore;
    const list = ref(null);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "10da99b8c8msh61f495aa235ccb2p1da90cjsnda0f95bacd23",
        "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com"
      }
    };
    const { data, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => {
      return $fetch(url, options);
    }, "$udKvjfRFXT")), __temp = await __temp, __restore(), __temp);
    if (data.value) {
      list.value = data.value;
    }
    if (((_b = (_a = error.value) == null ? void 0 : _a.response) == null ? void 0 : _b.status) === 404) {
      throw createError({ statusCode: 404 });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPwaManifest = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_NuxtPwaManifest, null, null, _parent));
      _push(`<h1>${ssrInterpolate(list.value[0].artist)}</h1><img${ssrRenderAttr("src", list.value[0].img)}${ssrRenderAttr("alt", list.value[0].artist)}><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-60382c73.mjs.map
