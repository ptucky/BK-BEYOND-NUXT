<template>
  <v-app>
    <v-app-bar
      flat
      absolute
      elevate-on-scroll
      color="transparent"
      scroll-target="#scrolling-techniques-7"
      height="80px"
    >
      <nuxt-link to="/">
        <img
          class="bkbeyond-logo"
          alt="Bangkok Beyond Logo"
          src="~/assets/images/bk-beyong-logo.png"
        >
      </nuxt-link>
    
      <v-spacer />
           
      <v-tabs
        centered
        class="hidden-sm-and-down hidden-xs-only">
        <v-tab 
          v-for="(item, i) in mainMenu"
          :key="i"
          class="m-sub-menu-padding top-menu-dt"
          :to="item.to"
          flat
          :class="{ active: isActive(item.title) }"
          @click="setActive(item.title);"
        >{{ item.title }}</v-tab>
      </v-tabs>
      
      <v-spacer />

        <v-icon
          class="pl-3"
        >
          mdi-magnify
        </v-icon>
   
        <v-icon 
          @click.stop="rightDrawer = !rightDrawer"
          class="hidden-lg-and-up pl-3"
        >
          mdi-menu
        </v-icon>
    </v-app-bar>
    
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="100vh"
    >
      <v-container>
        <v-main class="mt-16">
          <v-container>
            <nuxt />
          </v-container>
        </v-main>
      </v-container>
    </v-sheet>

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
    // BkBeyondLogo
  },
  data () {
    return {
      activeMenu: null,
      clipped: false,
      drawer: false,
      fixed: false,
      mainMenu: [
        {
          icon: 'mdi-apps',
          title: "What's happening",
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Cuisine',
          to: '/inspire'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Hot Hotels',
          to: '#'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Lifestyle',
          to: '#'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Talk',
          to: '#'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Properties',
          to: '#'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Unwind',
          to: '#'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Contact',
          to: '#'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'About',
          to: 'about'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'BK-BEYOND'
    }
  },
  mounted() {
    
  },
  methods: {
    
    isActive: function (menuItem) {
      return this.activeMenu === menuItem
    },
    startLoading() {
      this.loading = true
    },
    finishLoading() {
      this.loading = false
    },
    setActive: function (menuItem) {
      this.activeMenu = menuItem
      this.startLoading()
      this.$nextTick(() => {
        setTimeout(() => this.finishLoading(), 300)
      })
    },
  }
}
</script>
