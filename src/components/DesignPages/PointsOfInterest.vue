<template>
    <div class="container fade-in">
        <div class="content full-width">
            <h1>Points of Interest</h1>
            <p>Personal project - Stationery design including a notepad, sticker and post-it notes.</p>
            <p>This started off as a water colour illustration that was outlined with a fine liner. I then brought the image over into 
                Photoshop, made some adjustments and added a background and text.
            </p>
        </div>
        <div class="content full-width">
            <img src="..\..\assets\points-of-interest\points-of-interest-notepad-sticker.jpg" alt="points of interset stationery set">
        </div>
        <div class="content full-width">
            <img src="..\..\assets\points-of-interest\points-of-interest-overhead.jpg" alt="points of interset stationery set">
        </div>
        <div class="content full-width">
            <img src="..\..\assets\points-of-interest\points-of-interest-back.jpg" alt="points of interset stationery set">
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
        name: 'PointsOfInterest'
    }
</script>