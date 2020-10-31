<template>
  <v-app>
    <v-alert
      border="bottom"
      dense
      text
      color="blue-grey"
      class="sign-newletter-header text-center"
    >
      <nuxt-link to="#">
        Sign Up for Newsletter
        <v-icon
          medium
          color="pink darken-1"
        >
           mdi-email
        </v-icon>
      </nuxt-link>
    </v-alert>
    <v-app-bar
      flat
      width="100%"
      id="app-bar"
    >
      <nuxt-link to="/">
        <img
          id="bkbeyond-logo"
          alt="Bangkok Beyond Logo"
          src="~/assets/images/bk-beyong-logo.png"
        >
      </nuxt-link>
    
    <v-spacer />

      <v-row
        align="center"
        justify="space-around"
        class="hidden-sm-and-down hidden-xs-only"
        id="app-bar-tab"
      >
        <v-btn text
          v-for="(item, i) in mainMenu"
          :key="i"
          class="m-sub-menu-padding top-menu-dt"
          :to="item.to"
        >
          {{ item.title }}
        </v-btn>
      </v-row>

    <v-spacer />
    
      <div class="ui-widget">
        <div style="float:left;">
          <form @submit.prevent="submitSearch">
            <input
              id="searchKeyword"
              ref="keyword"
              v-model="keyword"
              name="keyword"
              type="text"
              placeholder="Search"
              :class="isActiveSearch ? 'showSearch' : 'hideSearch'"
              @input="changeIcon"
            >
          </form>
        </div>
        <div style="float:right; width: 30px;">
          <v-icon
            :class="isActiveToggleOne ? 'showSearch' : 'hideSearch'"
            class="search-btn"
            @click="toggleClassSearch"
          >
            mdi-magnify
          </v-icon>
          <v-icon
            :class="isActiveToggleTwo ? 'showSearch' : 'hideSearch'"
            class="search-btn"
            style="color: #ffd54f;"
            @click="submitSearch"
          >
            mdi-magnify
          </v-icon>
        </div>
      </div>

      <v-icon 
        @click.stop="rightDrawer = !rightDrawer"
        class="hidden-lg-and-up pl-3"
      >
        mdi-menu
      </v-icon>
    </v-app-bar>

    <v-container fluid>
      <v-main class="grey--text text--darken-2 text-container">
        <nuxt />
      </v-main>
    </v-container>
  
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
      width="70%"
      class="app-bar-bg-color"
      dark
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
              <v-list-item-title class="text-center" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-for="(item, i) in mainMenu"
          :key="i"
          :to="item.to"
          router
          exact
        >
        <v-list-item-content>
            <v-list-item-title v-text="item.title" class="text-center" />
        </v-list-item-content>
        </v-list-item>

        <v-list-item class="mt-7"> 
          <v-list-item-content>
            <v-list-item-title>
              <v-layout justify-center row class="m-icon-group text-center">
                <a href="https://www.facebook.com/bangkokandbeyond" target="_blank" rel="nofollow">
                    <v-icon
                      medium
                      color="blue darken-1"
                      v-ripple
                    >
                      mdi-facebook
                    </v-icon>
                </a>
                <a href="https://www.instagram.com/bkbeyond/" target="_blank" rel="nofollow">
                  <v-icon
                      medium
                      color="pink lighten-1"
                      v-ripple
                    >
                      mdi-instagram
                    </v-icon>
                </a>
                <a href="https://twitter.com/bk_beyond" target="_blank" rel="nofollow">
                  <v-icon
                      medium
                      color="light-blue lighten-2"
                      v-ripple
                    >
                      mdi-twitter
                    </v-icon>
                </a>
              </v-layout>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </v-app>
</template>

<script>
export default {
  scrollToTop: true,
  components: {

  },
  data () {
    return {
      loading: false,
      isActiveSearch: false,
      isActiveToggleOne: true,
      isActiveToggleTwo: false,
      keyword: '',
      mainMenu: [
        {
          icon: 'mdi-apps',
          title: "What's happening",
          to: '/what-happending'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Cuisine',
          to: '/cuisine'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Hot Hotels',
          to: '/hotel'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Lifestyle',
          to: '/lifestyle'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Talk',
          to: '/talk'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Properties',
          to: '/properties'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Contact',
          to: '/contact'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'About',
          to: '/about'
        }
      ],
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 300)
    })

    document.querySelector('.theme--light.v-app-bar.v-toolbar.v-sheet').style.background = 'transparent'
    let checkDeveice = ''
    if (this.$device.isMobile || this.$device.isTablet) {
      checkDeveice = 'mobile_tablet'
    }

    this.handleScrollTopbar(checkDeveice)
  },
  methods: {
    changeIcon() {
      if (this.$refs.keyword.value.length >= 1) {
        this.isActiveToggleOne = false
        this.isActiveToggleTwo = true
      } else {
        this.isActiveToggleOne = true
        this.isActiveToggleTwo = false
      }
    },
    toggleClassSearch: function () {
      if (this.isActiveSearch) {
        this.isActiveSearch = false
      } else {
        this.isActiveSearch = true
      }
    },
    submitSearch() {
      this.$router.push({ path: `/search?key=${this.keyword}` })
      if (this.keyword !== '') {
        this.isActiveToggleOne = true
        this.isActiveToggleTwo = false
        this.toggleClassSearch()

        if (this.$nuxt.$route.name === 'search') {
          location.replace(
            `${process.env.baseUrl}` + `/search?key=${this.keyword}`
          )
        }
        this.keyword = ''
      }
    },
    handleScrollTopbar(checkDeveice) {
      window.addEventListener(
        'scroll',
        function () {
          /** tool bar */
          if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) 
          {

            document.getElementById('bkbeyond-logo').style.transition = '.2s'
            document.querySelector('.theme--light.v-app-bar.v-toolbar.v-sheet').style.background = '#e2e4eb'
            document.getElementById('app-bar').style.position = 'fixed'

            if (checkDeveice == 'mobile_tablet') {
              document.getElementById('bkbeyond-logo').style.paddingTop = '5px'
              document.getElementById('bkbeyond-logo').style.width = '100px'
              document.getElementById('app-bar').style.height = '55px'
            } else {
              document.getElementById('bkbeyond-logo').style.paddingTop = '10px'
              document.getElementById('bkbeyond-logo').style.width = '110px'
              document.getElementById('app-bar').style.transition = '.2s'
              document.getElementById('app-bar').style.marginTop = '-5px'
              document.getElementById('app-bar').style.height = '60px'
              
              document.getElementById('app-bar-tab').style.transition = '.2s'
              document.getElementById('app-bar-tab').style.height = '60px'
            }
            
          } else {

            document.querySelector('.theme--light.v-app-bar.v-toolbar.v-sheet').style.background = 'transparent'
            document.getElementById('app-bar').style.position = 'relative'

            if (checkDeveice == 'mobile_tablet') {
              document.getElementById('bkbeyond-logo').style.paddingTop = '15px'
              document.getElementById('bkbeyond-logo').style.width = '105px'
              document.getElementById('app-bar').style.height = '55px'
            } else {
              document.getElementById('bkbeyond-logo').style.paddingTop = '15px'
              document.getElementById('bkbeyond-logo').style.width = '140px'
              document.getElementById('app-bar').style.marginTop = '0px'
              document.getElementById('app-bar').style.height = '75px'

              document.getElementById('app-bar-tab').style.height = '75px'
            }
            
          }
        },
        true
      )
    },
    
  }
}
</script>
