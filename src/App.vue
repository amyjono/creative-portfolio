<template>
  <div id="app">
    <Header
      background="#fff"
      link-color="#777"
      hoverBackground="#ddd"
    />
    <router-view/>
    <Footer />
    <div class="button-animation">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
    </svg>
  </div>
  </div>
</template>

<script>
// import { SemipolarSpinner  } from 'epic-spinners'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  metaInfo: {
    title: 'Amy Johnson | Design and Retouch Portfolio'
  },
  components: {
    // SemipolarSpinner,
    'Header': Header,
    'Footer': Footer
  },
}
</script>

<style lang="scss">
  @import "./styles/styles.scss";

</style>
