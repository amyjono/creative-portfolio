<template>
    <div id="race-mate">
        <back-to-top text="Back to top" visibleoffset="400"></back-to-top>
        <div class="container entry-content fade-in">
            <div class="content col-2">
                <div>
                    <img src="..\..\assets\race-mate\Black-red-logo-with-white-cycling-background.jpg" alt="black and red race mate logo with white background" />
                </div>
                <div class="col text-right">
                    <h1>Race Mate</h1>
                    <h2>Client</h2>
                    <p>A web-based app currently in development, with a wealth of information and statistics for competitive racing cyclists.</p>
                    <h2>Primary Objectives</h2>
                    <p>To create a logo and branding for the Race Mate brand.</p>
                    <h2>Product Requirements</h2>
                    <ul>
                        <li>Logo must be distinct and recognisable when small.</li>
                        <li>Logo must have variations to work on either black or white backgrounds.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <div class="container">
                <div class="content full-width">
                    <h2>Final Logos</h2>
                    <p>I chose the font Rubik for it’s bold look. I brought together the letter spacing and exaggerated the italic style further. 
                        The logos have been created in Adobe Illustrator.</p>
                </div>
                <div class="content col-3">
                    <div class="col">
                        <img src="..\..\assets\race-mate\Race-Mate-Black-Red-Final.png" alt="Race Mate Black Red Logo">
                    </div>
                    <div class="col">
                        <img src="..\..\assets\race-mate\Race-Mate-Black-Final.png" alt="Race Mate Black Red Logo">
                    </div>
                    <div class="col">
                        <img src="..\..\assets\race-mate\Race-Mate-White-Final.jpg" alt="Race Mate Black Red Logo">
                    </div>
                </div>
            </div>
        </div>

        <div class="turquoise">
            <div class="container">
                <div class="content full-width">
                    <h2>Branding</h2>
                    <p>For the additional branding design, I created a letterhead, business card, envelope, postcard and bidon design as a promotional item.</p>
                    <expandable-image class="image" :src="require('../../assets/race-mate/Race-Mate-Printed-Branding.png')" alt="Race Mate Printed Branding" />
                </div>
            </div>
        </div>

        <div>
            <div class="container">
                <div class="content col-3 race-mate-images">
                    <img src="..\..\assets\race-mate\Bottle.png" alt="Race Mate Bottle">
                    <img src="..\..\assets\race-mate\postcard-front.png" alt="Race Mate Post Card">
                    <img src="..\..\assets\race-mate\postcard-back.png" alt="Race Mate Post Card">
                </div>
            </div>
        </div>

        <div class="container">
            <div class="content full-width">
                <h2>Logo in use</h2>
                <p>Below the logo is applied twice in the user interface design as it exists at the moment – to be redesigned at a later date.</p>
                <img src="..\..\assets\race-mate\desktop.jpg" alt="race mate desktop screen shot" class="img-shadow">
            </div>
        </div>

        <div class="container">
            <div class="content full-width">
                <h2>Research</h2>
                <p>I took my inspiration from logos provided by the client, racing images, and how the Race Mate product interface looked.</p>
                <p>I wanted to incorporate the representation of speed by giving the logo an italic look, as well as including references to the finish line flag.</p>
                <img src="..\..\assets\race-mate\RM-moodboard-logos.png" alt="race mate desktop screen shot">
            </div>
        </div>

        <div>
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
    </div>
</template>

<script>
import ExpandableImage from '../ExpandableImage'
import BackToTop from 'vue-backtotop'

    export default {
        name: 'RaceMate',
        components: { 
            ExpandableImage,
            BackToTop,
            },
    }
</script>
