<template>
    <div class="container">
        <div class="content full-width">
            <h1>Hands Illustrations</h1>
            <p>Personal project experimenting with illustration styles, starting with pencil drawings 
                and then building on that using Illustrator and Photoshop.</p>
        </div>
        <div class="content col-2">
            <div class="col">
                <img src="..\..\assets\hands\snake-hand.jpg" alt="snake hand illustration">
            </div>
            <div class="col">
                <img src="..\..\assets\hands\eyeball-hand.jpg" alt="snake hand illustration">
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
        name: 'Hands'
    }
</script>