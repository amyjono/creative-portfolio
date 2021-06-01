<template>
    <div id="design-tiles">
        <back-to-top text="Back to top" visibleoffset="400"></back-to-top>
        <div class="design-tiles">
            <div class="design-tile" v-for="item in items" v-bind:key="item.id">
                <semipolar-spinner
                    :animation-duration="2000"
                    :size="65"
                    color="#00bbab"
                    class="hideMe"
                />
                <router-link :to="item.link">
                <img :src="require('../assets/design-tiles/thumbnails/' + item.src)" class="pop" />
                <div class="design-tile-text-box">
                    <div class="design-tile-text"><small><b>{{ item.title }}</b></small></div>
                </div>
                </router-link>
            </div>
        </div>
        <div class="button-container">
            <router-link to="Contact" class="btn-link">
                <button class="blob-btn get-in-touch">
                    GET IN TOUCH
                    <span class="blob-btn__inner">
                        <span class="blob-btn__blobs">
                            <span class="blob-btn__blob"></span>
                            <span class="blob-btn__blob"></span>
                            <span class="blob-btn__blob"></span>
                            <span class="blob-btn__blob"></span>
                        </span>
                    </span>
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
import { SemipolarSpinner  } from 'epic-spinners'
import BackToTop from 'vue-backtotop'

export default {
    name: 'DesignTiles',
    components: {
        SemipolarSpinner,
        BackToTop,
    },
    data() {
        return {
            items: [
    
                { link: '/the-dogs', src: 'the-dogs-layout-2x3.jpg', title: 'The Dogs Media Pack' },
                { link: '/st-francis-xavier', src: 'SFX-site-on-device-2x3.jpg', title: 'St Francis Xavier' },
                { link: '/daily-logo-day-2', src: 'daily-logo-day-2-hot-air-balloon-2x3.jpg', title: 'Whoosh - Daily Logo Challenge'},
                { link: '/personal-logo', src: 'amy-johnson-logo-2x3.jpg', title: 'Personal Logo' },
                { link: '/race-mate-insurance', src: 'race-mate-insurance-2x3.jpg', title: 'Race Mate Insurance' },
                { link: '/lookbook', src: 'Lookbook-2x3.jpg', title: 'Fashion Lookbook' },
                { link: '/maynooth-furniture', src: 'Mobile-app-layout-square-2x3.jpg', title: 'Maynooth Furniture' },
                { link: '/race-mate', src: 'Black-red-logo-with-white-cycling-background-2x3.jpg', title: 'Race Mate' },
                { link: '/hands', src: 'snake-hand-2x3.jpg', title: 'Hands Illustrations' },
                { link: '/points-of-interest', src: 'cactus-stationary-layout-2x3.jpg', title: 'Points of Interest' },
                { link: '/skullish', src: 'twitch-logos-2x3.jpg', title: 'Streamer Logos/Mascots' },
            ]
        }
    }
}
</script>