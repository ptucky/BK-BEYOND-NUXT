<template>
  <v-app>
    <v-alert
      dense
      text
      class="sign-newletter-header text-center hidden-sm-and-down hidden-xs-only"
    >
      <v-card
        class="d-flex justify-space-between"
        flat
        color="transparent"
      >
        <v-card
          outlined
          flat
          color="transparent"
        >
          <div class="m-icon-group-top text-center">
            <a href="https://www.facebook.com/bangkokandbeyond" target="_blank" rel="nofollow">
                <v-icon
                  medium
                  color="grey"
                  v-ripple
                  class="fb"
                >
                  mdi-facebook
                </v-icon>
            </a>
            <a href="https://www.instagram.com/bkbeyond/" target="_blank" rel="nofollow">
              <v-icon
                  medium
                  color="grey"
                  v-ripple
                  class="ig"
                >
                  mdi-instagram
                </v-icon>
            </a>
            <a href="https://twitter.com/bk_beyond" target="_blank" rel="nofollow">
              <v-icon
                  medium
                  color="grey"
                  v-ripple
                  class="tw"
                >
                  mdi-twitter
                </v-icon>
            </a>
          </div>
        </v-card>
        
        <v-card
          outlined
          flat
          color="transparent"
        >
          <img src="~/assets/images/favicon-32x32.png" class="ml-10" style="width: 26px; vertical-align: middle;">
        </v-card>

        <v-card
          outlined
          flat
          color="transparent"
        >
          <v-dialog
            v-model="dialog"
            persistent
            max-width="600px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                text
                small
                rounded
                class="text-signup-newsletter"
              >
                Sign Up for Newsletter
                <v-icon
                  medium
                  class="pl-1"
                >
                  mdi-email
                </v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Signup for Newsletters</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                    <v-row>
                    <v-col cols="12">
                        <v-text-field
                        label="Email*"
                        required
                        ></v-text-field>
                    </v-col>
                    </v-row>
                </v-container>
                <small>*Sign up to get our article delivered to your inbox.</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="red"
                  text
                  @click="dialog = false">
                  Close
                </v-btn>
                <v-btn
                  color="red"
                  text
                  @click="dialog = false">
                  Send
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
      </v-card>
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
        <v-menu
          v-for="(item, i) in mainMenu"
          :key="i"
          offset-y
        >
          <template v-slot:activator="{ attrs, on }">
            <v-btn
              class="top-menu-dt"
              text
              v-if="!item.subItems"
              :to="item.to"
              :target="item.target"
            >
              {{ item.title }}
            </v-btn>
            <v-btn
              class="top-menu-dt"
              text
              v-bind="attrs"
              v-on="on"
              v-if="item.subItems"
            >
              {{ item.title }}
              <v-icon dark v-if="item.subItems">arrow_drop_down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(child, j) in item.subItems"
              :key="j"
              :href="`${item.to}${child.to}`"
              :target="child.target"
              link
            >
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
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
    
    <v-main class="grey--text text--darken-2 text-container">
      <nuxt />
    </v-main>
    
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

        <v-list-item
          v-for="(item, i) in mainMenu" v-if="!item.subItems"
          :key="i"
          :to="!item.subItems ? item.to : '#'"
          router
          exact
          active-class="red--text"
      
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" class="text-left" />
          </v-list-item-content>
        </v-list-item>

        <v-list-group
          v-for="(item, i) in mainMenu" v-if="item.subItems"
          :key="i"
          :to="!item.subItems ? item.to : '#'"
          :prepend-icon="item.action"
          v-model="item.active"
          no-action
          active-class="red--text"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.subItems"
            :key="child.title"
            :href="child.to"
            :target="child.target"
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        
      </v-list>
    </v-navigation-drawer>

    <!-- <footer class="footer">
      <div class="footer-box">
        <a href="mailto:info@bk-beyond.com">
          Email: info@bk-beyond.com</a>
          <br />
          Copyright Bangkok & Beyond. All rights reserved.
      </div>
    </footer> -->

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
          title: "What's happening",
          to: '/what-happening',
          target: '_self'
        },
        {
          title: 'Hot Properties',
          to: '/properties',
          target: '_self',
          subItems: [
            {
              title: 'Hotels',
              to: '/hotel',
              target: '_self'
            },
            {
              title: 'Residential',
              to: '/residential',
              target: '_self'
            }
          ]
        },
        {
          title: 'Lifestyle',
          to: '/lifestyle',
          target: '_self',
          subItems: [
            {
             title: 'Cuisine',
              to: '/cuisine',
              target: '_self'
            },
            {
              title: 'People',
              to: '/people',
              target: '_self'
            },
            {
              title: 'Shopping',
              to: '/shopping',
              target: '_self'
            },
            {
              title: 'Travel',
              to: '/travel',
              target: '_self'
            }
          ]
        },
      ],
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      dialog: false,
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
              
              document.querySelector('.v-toolbar__content').style.height = '50px !important'
            } else {
              document.getElementById('bkbeyond-logo').style.paddingTop = '10px'
              document.getElementById('bkbeyond-logo').style.width = '105px'
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
              document.getElementById('bkbeyond-logo').style.paddingTop = '10px'
              document.getElementById('bkbeyond-logo').style.width = '105px'
              document.getElementById('app-bar').style.height = '55px'
            } else {
              document.getElementById('bkbeyond-logo').style.paddingTop = '15px'
              document.getElementById('bkbeyond-logo').style.width = '130px'
              document.getElementById('app-bar').style.marginTop = '0px'
              document.getElementById('app-bar').style.height = '65px'

              document.getElementById('app-bar-tab').style.height = '65px'
            }
            
          }
        },
        true
      )
    },
    
  }
}
</script>
