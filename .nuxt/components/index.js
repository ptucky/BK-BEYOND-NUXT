export { default as PostDetail } from '../../components/PostDetail.vue'
export { default as TagsList } from '../../components/TagsList.vue'
export { default as BannerFour } from '../../components/Home/BannerFour.vue'
export { default as BannerOne } from '../../components/Home/BannerOne.vue'
export { default as BannerThree } from '../../components/Home/BannerThree.vue'
export { default as BannerTwo } from '../../components/Home/BannerTwo.vue'
export { default as HotHotel } from '../../components/Home/HotHotel.vue'
export { default as LifeStyle } from '../../components/Home/LifeStyle.vue'
export { default as People } from '../../components/Home/People.vue'
export { default as WhatHappening } from '../../components/Home/WhatHappening.vue'

export const LazyPostDetail = import('../../components/PostDetail.vue' /* webpackChunkName: "components/PostDetail" */).then(c => c.default || c)
export const LazyTagsList = import('../../components/TagsList.vue' /* webpackChunkName: "components/TagsList" */).then(c => c.default || c)
export const LazyBannerFour = import('../../components/Home/BannerFour.vue' /* webpackChunkName: "components/Home/BannerFour" */).then(c => c.default || c)
export const LazyBannerOne = import('../../components/Home/BannerOne.vue' /* webpackChunkName: "components/Home/BannerOne" */).then(c => c.default || c)
export const LazyBannerThree = import('../../components/Home/BannerThree.vue' /* webpackChunkName: "components/Home/BannerThree" */).then(c => c.default || c)
export const LazyBannerTwo = import('../../components/Home/BannerTwo.vue' /* webpackChunkName: "components/Home/BannerTwo" */).then(c => c.default || c)
export const LazyHotHotel = import('../../components/Home/HotHotel.vue' /* webpackChunkName: "components/Home/HotHotel" */).then(c => c.default || c)
export const LazyLifeStyle = import('../../components/Home/LifeStyle.vue' /* webpackChunkName: "components/Home/LifeStyle" */).then(c => c.default || c)
export const LazyPeople = import('../../components/Home/People.vue' /* webpackChunkName: "components/Home/People" */).then(c => c.default || c)
export const LazyWhatHappening = import('../../components/Home/WhatHappening.vue' /* webpackChunkName: "components/Home/WhatHappening" */).then(c => c.default || c)
