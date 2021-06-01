<template>
    <div class="container fade-in">
        <div class="content full-width">
            <h1>The Do.gs Digital Media Pack</h1>
            <p>I created this digital media pack design for "The Do.gs" blog, using the brand’s logo, and complimentary colours specified in their brand guidelines. I incorporated the font “Proxima Nova” 
                from the logo and “Playfair Display” which is used in the headings on their website.</p>
            <p>The purpose of this image is to show advertisers where they can promote their product on the website and various other platforms related to the company.</p>
            <p>I created this in Adobe InDesign, both jpg and PDF are available on The Do.gs website. </p>
        </div>
        <div class="content full-width col-2">
            <img src="..\..\assets\the-dogs\TheDogs_DigitalMediaCard_2021.jpg" alt="the dogs digital media pack">
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
    export default {
        name: 'TheDogs',
    }
</script>