<template>
    <div>
        <back-to-top text="Back to top" visibleoffset="400"></back-to-top>
        <div class="container fade-in">
            <div class="content col-2">
                <div>
                    <img src="..\..\assets\sfx\Mobile-layout-sfx-transparent.png" alt="SFX site on mobile" />
                </div>
                <div class="col text-right">
                    <h1>St Francis Xavier College</h1>
                    <h2>Client</h2>
                    <p>A Catholic college based in Clapham, London.</p>
                    <h2>Primary Objectives</h2>
                    <p>Total redesign and restructure of website suitable for a CMS. The new user interface had to be visually appealing,
                         easy to navigate, and have more efficient functionality.</p>
                    <h2>Product Requirements</h2>
                    <ul>
                        <li>Wireframes / prototype</li>
                        <li>Full-size landing page image</li>
                        <li>Google map displaying school location</li>
                        <li>Mega menu</li>
                        <li>Social media icons</li>
                        <li>Search Bar</li>
                        <li>Latest News</li>
                        <li>Sub-navigation on some pages</li>
                        <li>Fully responsive</li>
                        <li>New logo (provided by client)</li>
                        <li>Neutral color palette</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="content col-3">
                <div class="col">
                    <h2>Homepage</h2>
                    <expandable-image class="image img-shadow" :src="require('../../assets/sfx/sfx_homepage.jpg')" alt="SFX homepage" />
                </div>
                <div class="col">
                    <h2>Courses</h2>
                    <expandable-image class="image img-shadow" :src="require('../../assets/sfx/sfx_courses.jpg')" alt="SFX courses page" />
                </div>
                <div class="col">
                    <h2>FAQs</h2>
                    <expandable-image class="image img-shadow" :src="require('../../assets/sfx/sfx_faqs.jpg')" alt="SFX faqs page" />
                </div>
            </div>
        </div>

        <div class="container">
            <div class="content full-width">
                <h2>Process</h2>
                <p>I initially carried out research of competitors to see what kind of user interfaces I found easy to navigate
                     and understand. I decided on typefaces that were easily readable and similar to some of the references the 
                     client liked the look of.</p>
                <p>The nav menu requirements had a long list of pages to be included. When trying this out in the wireframe, 
                    it looked very crowded.</p>
                <p>Instead of trying to fit everything into the header, we decided on a collapsed menu that expands into a mega menu.
                     Then at a later date adding on the most important page links alongside.</p>
                <p>I decided that the header background gradient should be replaced on scroll with a sharp edged darker background.
                     This meant that the main content could take priority and was easier to read.</p>
            </div>
        </div>

        <div class="container">
            <div class="content full-width">
                <h2>Nav Menu on Hero Image Pages</h2>
                <img src="..\..\assets\sfx\sfx_mega_menu.jpg" alt="sfx mega menu" class="img-shadow" />
            </div>
        </div>

        <div class="container">
            <h2>Website on Mobile</h2>
            <div class="content col-3">
                <div class="col">
                    <img src="..\..\assets\sfx\Mobile-sfx-homepage.png" alt="sfx homepage on mobile" />
                </div>
                <div class="col">
                    <img src="..\..\assets\sfx\Mobile-sfx-courses.png" alt="sfx courses page on mobile" />                
                </div>
                <div class="col">
                    <img src="..\..\assets\sfx\Mobile-sfx-faqs.png" alt="sfx faqs page on mobile" />
                </div>
            </div>
        </div>

        <div class="container">
            <div class="content full-width">
                <h2>Colour Palette</h2>
                <p>The client wanted a neutral monochromatic colour palette – suggesting black and white. 
                    I went with this, and also introduced an accent colour to bring some energy to the design 
                    and help important elements stand out.</p>
                <img src="..\..\assets\sfx\SFX_Colour_Palette.jpg" alt="sfx colour palette" />
            </div>
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
        name: 'SFX',
        components: { 
            ExpandableImage,
            BackToTop,
            }
    }
</script>