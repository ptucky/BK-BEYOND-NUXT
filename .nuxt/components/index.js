export { default as Logo } from '../../components/Logo.vue'
export { default as PostDetail } from '../../components/PostDetail.vue'
export { default as Tags } from '../../components/Tags.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyPostDetail = import('../../components/PostDetail.vue' /* webpackChunkName: "components/PostDetail" */).then(c => c.default || c)
export const LazyTags = import('../../components/Tags.vue' /* webpackChunkName: "components/Tags" */).then(c => c.default || c)
