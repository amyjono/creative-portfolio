<template>
    <div>
        <back-to-top text="Back to top" visibleoffset="400"></back-to-top>
        <div v-images-loaded:on.progress="imageProgress" class="grid fade-in" ref="grid">
            <div class="grid-item" v-for="item in items" v-bind:key="item.id">
                <semipolar-spinner
                    :animation-duration="2000"
                    :size="65"
                    color="#00bbab"
                    class="hideMe"
                />
                <expandable-image class="image" :src="require('../assets/retouch/' + item.src)" />
                <p><small>{{ item.title }}</small></p>
                <br />
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
<script src="../node_modules/vue-masonry/dist/vue-masonry-plugin-window.js"></script>
<script src="../node_modules/masonry-layout/dist/masonry.pkgd"></script>
<script src="../node_modules/imagesloaded/imagesloaded.pkgd.min.js"></script>
<script src="../node_modules/vue-images-loaded/vueimagesloaded.js"></script>
<script> 
import Vue from 'vue'
import BackToTop from 'vue-backtotop'
import ExpandableImage from '../components/ExpandableImage'
import Masonry from 'masonry-layout'
import { SemipolarSpinner  } from 'epic-spinners'
import {VueMasonryPlugin} from 'vue-masonry';
import imagesLoaded from 'vue-images-loaded'

Vue.use(VueMasonryPlugin)

export default {
    name: 'Retouch',
    components: { 
        ExpandableImage,
        BackToTop,
        SemipolarSpinner,
        },

    data() {
        return {
            items: [
                
                { src: 'coco-chanel-flat.jpg', title: 'Coco Chanel' },
                { src: 'coco-chanel-stacked-published.jpg', title: 'Coco Chanel' },
                { src: 'origami-blue-3.jpg', title: 'Ted Baker' },
                { src: 'colour-by-numbers.jpg', title: 'Ted Baker' },
                { src: 'Ted-Baker-ELTEN-CORAL.jpg', title: 'Ted Baker' },
                { src: 'Ted-Baker-CABBLE_CAMEL.jpg', title: 'Ted Baker' },
                { src: 'delfina-delettrez-rings.jpg', title: 'Delfina Delettrez' },
                { src: 'fashion-insider-cover.jpg', title: 'Fahsion Insider Magazine' },
                { src: 'the-outnet-athleisure-01.jpg', title: 'The Outnet' },
                { src: 'net-a-porter-beauty.jpg', title: 'Net-A-Porter' },
                { src: 'net-a-porter-boho.jpg', title: 'Net-A-Porter' },
                { src: 'jennifer-meyer-rings.jpg', title: 'Jennifer Meyer' },
                { src: 'alice-luker-01.jpg', title: 'Alice Luker' },
                { src: 'noir-magazine.jpg', title: 'Noir Magazine' },
                { src: 'net-a-porter-heirloom-jewelry.jpg', title: 'Net-A-Porter' },
                { src: 'larkspur-and-hawk.jpg', title: 'Larkspur and Hawk' },
            ]
        }
    },

    directives: {
            imagesLoaded
    },

    methods: {
        imageProgress(instance, image ) {
        const result = image.isLoaded ? 'loaded' : 'broken';

        var masonry = new Masonry( this.$refs.grid, {
            itemSelector: '.grid-item',
            gutter: 4,
            fitWidth: true
        });
        }
    },
}
</script>