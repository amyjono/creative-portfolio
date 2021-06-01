<template>
    <div>
        <back-to-top text="Back to top" visibleoffset="400"></back-to-top>
        <div class="container fade-in">
            <div class="content full-width">
                <h1>Streamer Logos/Mascots</h1>

                <h2>Skullish</h2>
                <p>I designed this mascot logo for Twitch streamer Skullishttv. The client requested a skull logo for their streaming identity. I added eyebrows and other facial hair 
                    to represent the appearance of the client. This was created in Adboe Illustrator.</p>

                <h2>Crow Gaming</h2>
                <p>This was not for any client in particular. I created this concept so that I had an opportunity to work on my drawing / Illustrator skills.</p>
            </div>
        </div>
        <div class="almost-black">
            <div class="container">
                <div class="content col-2">
                    <div class="col"><img src="..\..\assets\skullish\skullish.jpg" alt="Skullish logo" class="centred"></div>
                    <div class="col"><img src="..\..\assets\skullish\crow.jpg" alt="crow logo" class="centred"></div>
                </div>
            </div>
        </div>
        <div class="content full-width">
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
import BackToTop from 'vue-backtotop'

export default {
    name: 'Skullish',
    components: {
        BackToTop,
    }
}
</script>