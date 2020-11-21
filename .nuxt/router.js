import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b175d826 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _9eeb2900 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _662297a4 = () => interopDefault(import('../pages/cuisine/index.vue' /* webpackChunkName: "pages/cuisine/index" */))
const _1ad76d54 = () => interopDefault(import('../pages/hotel/index.vue' /* webpackChunkName: "pages/hotel/index" */))
const _80553fd6 = () => interopDefault(import('../pages/lifestyle/index.vue' /* webpackChunkName: "pages/lifestyle/index" */))
const _efe263f6 = () => interopDefault(import('../pages/people/index.vue' /* webpackChunkName: "pages/people/index" */))
const _426b2629 = () => interopDefault(import('../pages/properties/index.vue' /* webpackChunkName: "pages/properties/index" */))
const _10dbdfa6 = () => interopDefault(import('../pages/what-happening/index.vue' /* webpackChunkName: "pages/what-happening/index" */))
const _f89e7430 = () => interopDefault(import('../pages/X_slug/index.vue' /* webpackChunkName: "pages/X_slug/index" */))
const _ee3c9a8c = () => interopDefault(import('../pages/what-happening/_.vue' /* webpackChunkName: "pages/what-happening/_" */))
const _5ecd26b6 = () => interopDefault(import('../pages/properties/_.vue' /* webpackChunkName: "pages/properties/_" */))
const _08571c92 = () => interopDefault(import('../pages/people/_.vue' /* webpackChunkName: "pages/people/_" */))
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
    path: "/lifestyle",
    component: _80553fd6,
    name: "lifestyle"
  }, {
    path: "/people",
    component: _efe263f6,
    name: "people"
  }, {
    path: "/properties",
    component: _426b2629,
    name: "properties"
  }, {
    path: "/what-happening",
    component: _10dbdfa6,
    name: "what-happening"
  }, {
    path: "/X_slug",
    component: _f89e7430,
    name: "X_slug"
  }, {
    path: "/what-happening/*",
    component: _ee3c9a8c,
    name: "what-happening-all"
  }, {
    path: "/properties/*",
    component: _5ecd26b6,
    name: "properties-all"
  }, {
    path: "/people/*",
    component: _08571c92,
    name: "people-all"
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
