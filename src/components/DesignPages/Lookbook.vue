<template>
    <div class="container">
        <back-to-top text="Back to top" visibleoffset="400"></back-to-top>
        <div class="content full-width fade-in">
            <h1>Lookbook</h1>
            <p>Self initiated project to work on my InDesign skills. I have experiece working in ecommerce in the fashion industry so I chose a topic familiar to me. The photos are royalty free from Unsplash, that have been colour graded and retouched for consistency.</p>
            <p>I started off this project by gathering the photos and sketching out a few layout ideas. The next step was to create a mock up design in Photoshop and gradually bring that over to InDesign.</p>
            <p><a v-on:click="viewPdf">View PDF</a></p>

            <expandable-image :src="require('../../assets/lookbook/lookbook-1.jpg')" alt="fashion lookbook" /> 
            <br>
                <expandable-image :src="require('../../assets/lookbook/lookbook-2.jpg')" alt="fashion lookbook" /> 
            <br>
                <expandable-image :src="require('../../assets/lookbook/lookbook-3.jpg')" alt="fashion lookbook" /> 
            <br>
                <expandable-image :src="require('../../assets/lookbook/lookbook-4.jpg')" alt="fashion lookbook" /> 
        </div>
        <div class="button-container">
            <router-link to="/" class="btn-link">
                <button class="blob-btn get-in-touch">
                    VIEW MORE PROJECTS
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
import ExpandableImage from '../ExpandableImage'
import BackToTop from 'vue-backtotop'

    export default {
        name: 'Lookbook',
        components: { 
            ExpandableImage,
            BackToTop,
            },
        methods: {
            viewPdf: function(){
            var pdf = '../Lookbook.pdf';
            window.open(pdf);
            }
        },
    }
</script>