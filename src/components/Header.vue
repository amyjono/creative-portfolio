<template>
    <div>
        <header class="main-head">
            <div class="header-logo">
                <router-link to="/" style="height:150px;">
                    <img src="../assets/amy-johnson-creative.png">
                </router-link>
            </div>
            <div ref="toggle" class="nav-icon" @click="toggleNav">
                <div></div>
            </div>
            <nav class="main-nav">
                <ul ref="nav">
                    <strong>
                        <li @click="toggleNav"><router-link to="/">Design</router-link></li>
                        <li @click="toggleNav"><router-link to="Retouch">Retouch</router-link></li>
                        <li @click="toggleNav"><router-link to="About">About</router-link></li>
                        <li @click="toggleNav"><router-link to="Contact">Contact</router-link></li>
                    </strong>
                </ul>  
            </nav>
        </header>
    </div>
</template>
<script>
export default {
  name: 'Header',
  props: [ 'imagePath', 'background', 'linkColor', 'hoverBackground' ],
	methods: {
		toggleNav () {
			const nav = this.$refs.nav.classList
			nav.contains('active') ? nav.remove('active') : nav.add('active')

            const toggle = this.$refs.toggle.classList
            toggle.contains('open') ? toggle.remove('open') : toggle.add('open')

		}
	}
}
</script>
