import { u as useHead } from "./index-6a088328.js";
import { defineComponent, ref, shallowRef, toRef, getCurrentInstance, onServerPrefetch, unref, withAsyncContext, useSSRContext } from "vue";
import { d as asyncDataDefaults, e as useNuxtApp, c as createError } from "../server.mjs";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "@unhead/shared";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "defu";
import "klona";
import "devalue";
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
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.getCachedData = options.getCachedData ?? getDefaultCachedData;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  options.deep = options.deep ?? asyncDataDefaults.deep;
  const hasCachedData = () => ![null, void 0].includes(options.getCachedData(key));
  if (!nuxt._asyncData[key] || !options.immediate) {
    (_a = nuxt.payload._errors)[key] ?? (_a[key] = null);
    const _ref = options.deep ? ref : shallowRef;
    nuxt._asyncData[key] = {
      data: _ref(options.getCachedData(key) ?? options.default()),
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
      asyncData.error.value = createError(error);
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
const ____slug__vue_vue_type_style_index_0_lang = "";
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
      _push(`<h1>${ssrInterpolate(unref(list)[0].artist)}</h1><img${ssrRenderAttr("src", unref(list)[0].img)}${ssrRenderAttr("alt", unref(list)[0].artist)}><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_...slug_-0c123c9c.js.map
