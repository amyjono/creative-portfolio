<template>
    <div>
        <div class="design-tiles">
            <div class="design-tile">
                <img src="..\assets\stock-image-1.jpg">
            </div>
            <div class="design-tile">
                <img src="..\assets\stock-image-2.jpg">
            </div>
            <div class="design-tile">
                <img src="..\assets\stock-image-3.jpg">
            </div>
            <div class="design-tile">
                <img src="..\assets\stock-image-2.jpg">
            </div>
            <div class="design-tile">
                <img src="..\assets\stock-image-3.jpg">
            </div>
            <div class="design-tile">
                <img src="..\assets\stock-image-1.jpg">
            </div>
        </div>
        <div class="button-container">
            <router-link to="Contact" class="btn-link">
                <button class="blob-btn get-in-touch">
                    GET IN TOUCH
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
    name: 'DesignTiles',
}
</script>