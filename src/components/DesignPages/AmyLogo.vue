<template>
    <div class="container fade-in">
        <div class="content full-width">
            <h1>Personal Logo</h1>
            <p>Here is the final design that I chose for my personal logo.</p>
            <p>I chose to add the word "creative" to represent that I have a range of skills, such as Retouching.</p>
            <p>The fonts used in this logo are Corbel Light and Sacramento Regular.</p>
        </div>
        <div class="content full-width col-2">
            <img src="..\..\assets\personal-logo\amy-johnson-creative-white-blue.jpg" alt="amy johnson creative logo white on blue">
            <img src="..\..\assets\personal-logo\amy-johnson-creative-black-transparent.png" alt="amy johnson creative logo black">
        </div>
        <div class="content full-width">
            <p>Below are a few other ideas explored for my logo.</p>
        </div>
        <div class="col-3">
            <img src="..\..\assets\personal-logo\ideas-explored-a-design-purple.png" alt="">
            <img src="..\..\assets\personal-logo\ideas-explored-gold-a-blue-circle.png" alt="">
        </div>
        <div class="col-3">
            <img src="..\..\assets\personal-logo\ideas-explored-aj-in-circle.png" alt="">
            <img src="..\..\assets\personal-logo\ideas-explored-aj-handwritten.png" alt="">
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
        name: 'AmyLogo'
    }
</script>