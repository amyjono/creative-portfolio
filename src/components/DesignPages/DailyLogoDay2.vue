<template>
    <div class="container">
        <div class="content full-width">
            <h1>Daily Logo Challenge - Day 2</h1>
            <p>I started taking part in the <a href="https://dailylogochallenge.com/" target="blank">Daily Logo Challenge</a> in my spare time, with the aim to build up my
            creative thinking and technical design skills. As part of the Daily Logo Challenge you receive a brief in your inbox every day for a new logo design.</p>
            <p>The brief I received for day two was to create a hot air balloon logo, using the name "Lift", "Crown", or "Whoosh". For this logo I used the font "Giddyup".</p>
        </div>
        <div class="content col-2">
            <div>
                <img src="..\..\assets\daily-logo-challenge\air-balloon-logo-transparent-black-500x282.png" alt="Daily Logo Challenge Whoosh black">
            </div>
            <div>
                <img src="..\..\assets\daily-logo-challenge\air-balloon-logo-transparent-blue-500x282.png" alt="Daily Logo Challenge Whoosh blue">
            </div>
        </div>
        <div class="content col-2">
            <div>
                <img src="..\..\assets\daily-logo-challenge\air-balloon-logo-on-background-500x500.jpg" alt="Daily Logo Challenge Whoosh on cloud background">
            </div>
            <div class="col">
            
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
    export default {
        name: 'DailyLogoDay2'
    }
</script>