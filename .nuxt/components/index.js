export { default as PostDetail } from '../../components/PostDetail.vue'
export { default as TagsList } from '../../components/TagsList.vue'

export const LazyPostDetail = import('../../components/PostDetail.vue' /* webpackChunkName: "components/PostDetail" */).then(c => c.default || c)
export const LazyTagsList = import('../../components/TagsList.vue' /* webpackChunkName: "components/TagsList" */).then(c => c.default || c)
