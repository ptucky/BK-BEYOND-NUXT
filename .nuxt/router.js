import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b175d826 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _9eeb2900 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _1597ef12 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
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
    path: "/inspire",
    component: _1597ef12,
    name: "inspire"
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
