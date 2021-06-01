import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About'
import AmyLogo from '../components/DesignPages/AmyLogo'
import Contact from '../components/Contact'
import DailyLogoDay2 from '../components/DesignPages/DailyLogoDay2'
import Design from '../components/Design'
import Hands from '../components/DesignPages/Hands'
import Lookbook from '../components/DesignPages/Lookbook'
import MaynoothFurniture from '../components/DesignPages/MaynoothFurniture'
import PointsOfInterest from '../components/DesignPages/PointsOfInterest'
import RaceMate from '../components/DesignPages/RaceMate'
import RaceMateInsurance from '../components/DesignPages/RaceMateInsurance'
import Retouch from '../components/Retouch'
import SFX from '../components/DesignPages/SFX'
import Skullish from '../components/DesignPages/Skullish'
import TheDogs from '../components/DesignPages/TheDogs'

Vue.use(Router)

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Design',
      component: Design
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/personal-logo',
      name: 'Personal Logo',
      component: AmyLogo
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/daily-logo-day-2',
      name: 'Daily Logo Challenge Day 2 - Hot Air Balloon',
      component: DailyLogoDay2
    },
    {
      path: '/hands',
      name: 'hands',
      component: Hands,
    },
    {
      path: '/lookbook',
      name: 'Lookbook',
      component: Lookbook,
    },
    {
      path: '/maynooth-furniture',
      name: 'Maynooth Furniture',
      component: MaynoothFurniture,
    },
    {
      path: '/points-of-interest',
      name: 'Points of Interest',
      component: PointsOfInterest,
    },
    {
      path: '/race-mate',
      name: 'Race Mate',
      component: RaceMate,
    },
    {
      path: '/race-mate-insurance',
      name: 'Race Mate Insurance',
      component: RaceMateInsurance,
    },
    {
      path: '/retouch',
      name: 'Retouch',
      component: Retouch
    },
    {
      path: '/skullish',
      name: 'Skullish',
      component: Skullish,
    },
    {
      path: '/st-francis-xavier',
      name: 'SFX',
      component: SFX,
    },
    {
      path: '/the-dogs',
      name: 'The Dogs',
      component: TheDogs,
    },
  ]
})