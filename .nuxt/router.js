import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b175d826 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _9eeb2900 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _e804843e = () => interopDefault(import('../pages/cuisine.vue' /* webpackChunkName: "pages/cuisine" */))
const _709ed0de = () => interopDefault(import('../pages/hotel.vue' /* webpackChunkName: "pages/hotel" */))
const _33c7ef12 = () => interopDefault(import('../pages/lifestyle.vue' /* webpackChunkName: "pages/lifestyle" */))
const _993e57b4 = () => interopDefault(import('../pages/properties.vue' /* webpackChunkName: "pages/properties" */))
const _5613575f = () => interopDefault(import('../pages/talk.vue' /* webpackChunkName: "pages/talk" */))
const _5cbdd6a8 = () => interopDefault(import('../pages/what-happend.vue' /* webpackChunkName: "pages/what-happend" */))
const _b34d80a2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _cfbb08ac = () => interopDefault(import('../pages/_slug/index.vue' /* webpackChunkName: "pages/_slug/index" */))

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
    component: _e804843e,
    name: "cuisine"
  }, {
    path: "/hotel",
    component: _709ed0de,
    name: "hotel"
  }, {
    path: "/lifestyle",
    component: _33c7ef12,
    name: "lifestyle"
  }, {
    path: "/properties",
    component: _993e57b4,
    name: "properties"
  }, {
    path: "/talk",
    component: _5613575f,
    name: "talk"
  }, {
    path: "/what-happend",
    component: _5cbdd6a8,
    name: "what-happend"
  }, {
    path: "/",
    component: _b34d80a2,
    name: "index"
  }, {
    path: "/:slug",
    component: _cfbb08ac,
    name: "slug"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
