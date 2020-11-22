import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b175d826 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _9eeb2900 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _80553fd6 = () => interopDefault(import('../pages/lifestyle/index.vue' /* webpackChunkName: "pages/lifestyle/index" */))
const _426b2629 = () => interopDefault(import('../pages/properties/index.vue' /* webpackChunkName: "pages/properties/index" */))
const _10dbdfa6 = () => interopDefault(import('../pages/what-happening/index.vue' /* webpackChunkName: "pages/what-happening/index" */))
const _367a1bec = () => interopDefault(import('../pages/lifestyle/cuisine/index.vue' /* webpackChunkName: "pages/lifestyle/cuisine/index" */))
const _d732e242 = () => interopDefault(import('../pages/lifestyle/people/index.vue' /* webpackChunkName: "pages/lifestyle/people/index" */))
const _09a9ad90 = () => interopDefault(import('../pages/lifestyle/shopping/index.vue' /* webpackChunkName: "pages/lifestyle/shopping/index" */))
const _77ae2cac = () => interopDefault(import('../pages/lifestyle/travel/index.vue' /* webpackChunkName: "pages/lifestyle/travel/index" */))
const _95c5df64 = () => interopDefault(import('../pages/properties/hotel/index.vue' /* webpackChunkName: "pages/properties/hotel/index" */))
const _bb6c5344 = () => interopDefault(import('../pages/properties/residential/index.vue' /* webpackChunkName: "pages/properties/residential/index" */))
const _00e38d2a = () => interopDefault(import('../pages/properties/residential/_.vue' /* webpackChunkName: "pages/properties/residential/_" */))
const _7d6beb5b = () => interopDefault(import('../pages/properties/hotel/_.vue' /* webpackChunkName: "pages/properties/hotel/_" */))
const _2332d2b7 = () => interopDefault(import('../pages/lifestyle/travel/_.vue' /* webpackChunkName: "pages/lifestyle/travel/_" */))
const _5121ed76 = () => interopDefault(import('../pages/lifestyle/shopping/_.vue' /* webpackChunkName: "pages/lifestyle/shopping/_" */))
const _87d54b28 = () => interopDefault(import('../pages/lifestyle/people/_.vue' /* webpackChunkName: "pages/lifestyle/people/_" */))
const _47e00b17 = () => interopDefault(import('../pages/lifestyle/cuisine/_.vue' /* webpackChunkName: "pages/lifestyle/cuisine/_" */))
const _ee3c9a8c = () => interopDefault(import('../pages/what-happening/_.vue' /* webpackChunkName: "pages/what-happening/_" */))
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
    path: "/lifestyle",
    component: _80553fd6,
    name: "lifestyle"
  }, {
    path: "/properties",
    component: _426b2629,
    name: "properties"
  }, {
    path: "/what-happening",
    component: _10dbdfa6,
    name: "what-happening"
  }, {
    path: "/lifestyle/cuisine",
    component: _367a1bec,
    name: "lifestyle-cuisine"
  }, {
    path: "/lifestyle/people",
    component: _d732e242,
    name: "lifestyle-people"
  }, {
    path: "/lifestyle/shopping",
    component: _09a9ad90,
    name: "lifestyle-shopping"
  }, {
    path: "/lifestyle/travel",
    component: _77ae2cac,
    name: "lifestyle-travel"
  }, {
    path: "/properties/hotel",
    component: _95c5df64,
    name: "properties-hotel"
  }, {
    path: "/properties/residential",
    component: _bb6c5344,
    name: "properties-residential"
  }, {
    path: "/properties/residential/*",
    component: _00e38d2a,
    name: "properties-residential-all"
  }, {
    path: "/properties/hotel/*",
    component: _7d6beb5b,
    name: "properties-hotel-all"
  }, {
    path: "/lifestyle/travel/*",
    component: _2332d2b7,
    name: "lifestyle-travel-all"
  }, {
    path: "/lifestyle/shopping/*",
    component: _5121ed76,
    name: "lifestyle-shopping-all"
  }, {
    path: "/lifestyle/people/*",
    component: _87d54b28,
    name: "lifestyle-people-all"
  }, {
    path: "/lifestyle/cuisine/*",
    component: _47e00b17,
    name: "lifestyle-cuisine-all"
  }, {
    path: "/what-happening/*",
    component: _ee3c9a8c,
    name: "what-happening-all"
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
