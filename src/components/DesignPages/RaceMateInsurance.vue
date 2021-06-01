<template>
    <div id="race-mate-insurance">
        <back-to-top text="Back to top" visibleoffset="400"></back-to-top>
        <div class="container entry-content fade-in">
            <div class="content col-2">
                <div>
                    <img src="..\..\assets\race-mate-insurance\Race-Mate-Insurance-Clear-BG.png" alt="black and red race mate logo with white background" />
                </div>
                <div class="col text-right">
                    <h1>Race Mate Insurance</h1>
                    <h2>Client</h2>
                    <p>A concept design for the Race Mate brand. The developer working on Race Mate wanted to branch out thier skills and needed a UI design for thier project.</p>
                    <h2>Primary Objectives</h2>
                    <p>To create a logo and UI design for Race Mate insurance.</p>
                    <h2>Product Requirements</h2>
                    <ul>
                        <li>Logo must be distinct and recognisable when small.</li>
                        <li>Logo must still be recognisable as part of the Race Mate brand.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="content col-2">
                <div class="col">
                    <h2>Logo Ideas</h2>
                    <p>The original Race Mate logo uses the font Rubik. I continuted to use this font in different weights, and with no italics.
                        While working on ideas I felt that rather than using the whole Race Mate logo, it would look better to only use
                        elements of it. This would allow the insurance element to be the main focus.
                        The logos have been created in Adobe Illustrator.</p>

                    <div class="button-container">
                        <router-link to="/race-mate" target="blank" class="btn-link">
                            <button class="blob-btn get-in-touch">
                                VIEW RACE MATE PROJECT
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
                <div class="col">
                    <img src="..\..\assets\race-mate-insurance\original-ideas.png" alt="Race Mate insurance logo ideas">
                </div>
            </div>
            <div class="content full-width">
                <h2>Final Logos</h2>
                <p>I created a main logo where the elements are stacked, and a horizontal logo for small screens, such as mobile, so that the text is still legible.</p>
                <img class="centred" src="..\..\assets\race-mate-insurance\final-logos.png" alt="Race Mate final logos">
            </div>
        </div>

        <div class="container">
            <div class="content full-width">
                <h2>Initial Assets</h2>
                <p>Below is one of the screen shots I recieved of Race Mate Insurance as it was with no styling. 
                    The developer wanted the layout to be kept relatively the same, but more user friendly.</p>
                <div class="col">
                    <expandable-image class="image img-shadow" :src="require('../../assets/race-mate-insurance/desktop.png')" alt="Race Mate screen shot" />
                </div>
            </div>
        </div>

        <div class="container">
            <div class="content full-width">
                <h2>UI Design Desktop</h2>
                <p>Below are the UI designs I created for the desktop version.</p>
            </div>
            <div class="content col-2">
                <div class="col">
                    <expandable-image class="image img-shadow" :src="require('../../assets/race-mate-insurance/Desktop-Homepage-Login.png')" alt="Race Mate screen shot" />
                </div>
                <div class="col">
                    <expandable-image class="image img-shadow" :src="require('../../assets/race-mate-insurance/Desktop-About-you.png')" alt="Race Mate screen shot" />
                </div>
            </div>
        </div>

        <div class="container">
            <div class="content full-width">
                <h2>UI Design Mobile</h2>
                <p>Below are the UI designs I created for the mobile version. An icon on the top of the page will be highlighted depending on which section of the form you are on.</p>
            </div>
            <div class="content col-3">
                <div class="col">
                    <expandable-image class="image img-shadow" :src="require('../../assets/race-mate-insurance/Homepage-Mobile.png')" alt="Race Mate screen shot" />
                </div>
                <div class="col">
                    <expandable-image class="image img-shadow" :src="require('../../assets/race-mate-insurance/About-Mobile.png')" alt="Race Mate screen shot" />
                </div>
            </div>
        </div>
        <div class="container">
            <div class="content full-width">
                <h2>Example on Device</h2>
            </div>

            <div class="content full-width">
                <img src="..\..\assets\race-mate-insurance\race-mate-insurance-2x3.jpg" alt="Race Mate Insurance mobile" />
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
        name: 'RaceMateInsurance',
        components: { 
            ExpandableImage,
            BackToTop,
            },
    }
</script>
