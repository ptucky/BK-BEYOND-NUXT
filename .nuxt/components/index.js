export { default as PostDetail } from '../../components/PostDetail.vue'
export { default as TagsList } from '../../components/TagsList.vue'
export { default as BannerOne } from '../../components/Home/BannerOne.vue'
export { default as LifeStyle } from '../../components/Home/LifeStyle.vue'
export { default as WhatHappend } from '../../components/Home/WhatHappend.vue'

export const LazyPostDetail = import('../../components/PostDetail.vue' /* webpackChunkName: "components/PostDetail" */).then(c => c.default || c)
export const LazyTagsList = import('../../components/TagsList.vue' /* webpackChunkName: "components/TagsList" */).then(c => c.default || c)
export const LazyBannerOne = import('../../components/Home/BannerOne.vue' /* webpackChunkName: "components/Home/BannerOne" */).then(c => c.default || c)
export const LazyLifeStyle = import('../../components/Home/LifeStyle.vue' /* webpackChunkName: "components/Home/LifeStyle" */).then(c => c.default || c)
export const LazyWhatHappend = import('../../components/Home/WhatHappend.vue' /* webpackChunkName: "components/Home/WhatHappend" */).then(c => c.default || c)
