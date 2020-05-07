<template>
    <!-- <div class="container"> -->
    <div>
        <div class="text-content">
            <h1>Retouch</h1>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est eopksio laborum. Sed ut perspiciatis unde omnis istpoe natus 
            error sit voluptatem accusantium doloremque eopsloi laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
            sunot explicabo.</p>
        </div>
        <div v-images-loaded:on.progress="imageProgress" class="grid" ref="grid">
            <div class="grid-item" v-for="item in items" v-bind:key="item.id">
                <img :src="require('../assets/' + item.src)" />
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
import Masonry from 'masonry-layout'
import {VueMasonryPlugin} from 'vue-masonry';
import imagesLoaded from 'vue-images-loaded'

Vue.use(VueMasonryPlugin)

export default {
    name: 'Retouch',

    data() {
        return {
            items: [
                { src: 'stock-image-4.jpg' },
                { src: 'stock-image-5.jpg' },
                { src: 'stock-image-6.jpg' },
                { src: 'stock-image-7.jpg' },
                { src: 'stock-image-8.jpg' },
                { src: 'stock-image-9.jpg' },
                { src: 'stock-image-4.jpg' },
                { src: 'stock-image-5.jpg' },
                { src: 'stock-image-6.jpg' },
                { src: 'stock-image-7.jpg' },
                { src: 'stock-image-8.jpg' },
                { src: 'stock-image-9.jpg' },
            ]
        }
    },

    directives: {
            imagesLoaded
    },

    methods: {
        imageProgress(instance, image ) {
        const result = image.isLoaded ? 'loaded' : 'broken';
        console.log( 'image is ' + result + ' for ' + image.img.src );

        var masonry = new Masonry( this.$refs.grid, {
            itemSelector: '.grid-item',
            gutter: 4,
            fitWidth: true
        });
        }
    },
}
</script>