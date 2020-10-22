<template>
  <v-app>
    <v-app-bar
      flat
      fixed
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
      <v-icon class="pl-3">
        mdi-magnify
      </v-icon>
      <v-icon 
        @click.stop="rightDrawer = !rightDrawer"
        class="hidden-lg-and-up pl-3"
      >
        mdi-menu
      </v-icon>
    </v-app-bar>

    <v-container fluid class="mt-10">
      <v-main >
        <v-container>
          <nuxt />
        </v-container>
      </v-main>
    </v-container>
  
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>

        <v-list>
            <v-list-item
            v-for="(item, i) in mainMenu"
            :key="i"
            :to="item.to"
            router
            exact
            >
            <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title v-text="item.title" />
            </v-list-item-content>
            </v-list-item>
        </v-list>

      </v-list>
    </v-navigation-drawer>

  </v-app>
</template>

<script>
//import BkBeyondLogo from "~/assets/images/bk-beyong-logo.png"

export default {
  scrollToTop: true,
  components: {

  },
  data () {
    return {
      loading: false,
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
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })

    document.querySelector('.theme--light.v-app-bar.v-toolbar.v-sheet').style.background = 'transparent'
    let checkDeveice = ''
    if (this.$device.isMobile) {
      checkDeveice = 'mobile'
    }

    this.handleScrollTopbar(checkDeveice)
  },
  methods: {
    handleScrollTopbar(checkDeveice) {
      window.addEventListener(
        'scroll',
        function () {
          /** tool bar */
          if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) 
          {

            document.getElementById('bkbeyond-logo').style.transition = '.2s'
            document.querySelector('.theme--light.v-app-bar.v-toolbar.v-sheet').style.background = '#e2e4eb'

            if (checkDeveice == 'mobile') {
              document.getElementById('bkbeyond-logo').style.paddingTop = '2px'
              document.getElementById('bkbeyond-logo').style.width = '90px'
              document.getElementById('app-bar').style.height = '50px'

            } else {
              document.getElementById('bkbeyond-logo').style.paddingTop = '15px'
              document.getElementById('bkbeyond-logo').style.width = '115px'
              document.getElementById('app-bar').style.transition = '.2s'
              document.getElementById('app-bar').style.marginTop = '-5px'
              document.getElementById('app-bar').style.height = '65px'

              document.getElementById('app-bar-tab').style.transition = '.2s'
              document.getElementById('app-bar-tab').style.height = '65px'
            }
            
          } else {

            document.querySelector('.theme--light.v-app-bar.v-toolbar.v-sheet').style.background = 'transparent'

            if (checkDeveice == 'mobile') {
              document.getElementById('bkbeyond-logo').style.paddingTop = '10px'
              document.getElementById('bkbeyond-logo').style.width = '105px'
              document.getElementById('app-bar').style.height = '56px'

            } else {
              document.getElementById('bkbeyond-logo').style.paddingTop = '20px'
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
