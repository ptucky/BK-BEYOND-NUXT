import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b175d826 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _9eeb2900 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _662297a4 = () => interopDefault(import('../pages/cuisine/index.vue' /* webpackChunkName: "pages/cuisine/index" */))
const _1ad76d54 = () => interopDefault(import('../pages/hotel/index.vue' /* webpackChunkName: "pages/hotel/index" */))
const _f4b908a4 = () => interopDefault(import('../pages/index-two.vue' /* webpackChunkName: "pages/index-two" */))
const _80553fd6 = () => interopDefault(import('../pages/lifestyle/index.vue' /* webpackChunkName: "pages/lifestyle/index" */))
const _426b2629 = () => interopDefault(import('../pages/properties/index.vue' /* webpackChunkName: "pages/properties/index" */))
const _2f329aa2 = () => interopDefault(import('../pages/talk/index.vue' /* webpackChunkName: "pages/talk/index" */))
const _20032ba2 = () => interopDefault(import('../pages/what-happend/index.vue' /* webpackChunkName: "pages/what-happend/index" */))
const _f89e7430 = () => interopDefault(import('../pages/X_slug/index.vue' /* webpackChunkName: "pages/X_slug/index" */))
const _24014488 = () => interopDefault(import('../pages/what-happend/_.vue' /* webpackChunkName: "pages/what-happend/_" */))
const _1eebbfaf = () => interopDefault(import('../pages/talk/_.vue' /* webpackChunkName: "pages/talk/_" */))
const _5ecd26b6 = () => interopDefault(import('../pages/properties/_.vue' /* webpackChunkName: "pages/properties/_" */))
const _61d936a2 = () => interopDefault(import('../pages/lifestyle/_.vue' /* webpackChunkName: "pages/lifestyle/_" */))
const _c38c893e = () => interopDefault(import('../pages/hotel/_.vue' /* webpackChunkName: "pages/hotel/_" */))
const _f852e49e = () => interopDefault(import('../pages/cuisine/_.vue' /* webpackChunkName: "pages/cuisine/_" */))
const _b34d80a2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _b175d826,
    name: "about"
  }, {
    path: "/contact",
    component: _9eeb2900,
    name: "contact"
  }, {
    path: "/cuisine",
    component: _662297a4,
    name: "cuisine"
  }, {
    path: "/hotel",
    component: _1ad76d54,
    name: "hotel"
  }, {
    path: "/index-two",
    component: _f4b908a4,
    name: "index-two"
  }, {
    path: "/lifestyle",
    component: _80553fd6,
    name: "lifestyle"
  }, {
    path: "/properties",
    component: _426b2629,
    name: "properties"
  }, {
    path: "/talk",
    component: _2f329aa2,
    name: "talk"
  }, {
    path: "/what-happend",
    component: _20032ba2,
    name: "what-happend"
  }, {
    path: "/X_slug",
    component: _f89e7430,
    name: "X_slug"
  }, {
    path: "/what-happend/*",
    component: _24014488,
    name: "what-happend-all"
  }, {
    path: "/talk/*",
    component: _1eebbfaf,
    name: "talk-all"
  }, {
    path: "/properties/*",
    component: _5ecd26b6,
    name: "properties-all"
  }, {
    path: "/lifestyle/*",
    component: _61d936a2,
    name: "lifestyle-all"
  }, {
    path: "/hotel/*",
    component: _c38c893e,
    name: "hotel-all"
  }, {
    path: "/cuisine/*",
    component: _f852e49e,
    name: "cuisine-all"
  }, {
    path: "/",
    component: _b34d80a2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
