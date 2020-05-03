<template>
    <div class="container">
        <div class="text-content">
            <h1>Retouch</h1>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est eopksio laborum. Sed ut perspiciatis unde omnis istpoe natus 
            error sit voluptatem accusantium doloremque eopsloi laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
            sunot explicabo.</p>
        </div>
        <div class="retouch-tiles">
            <div class="row"> 
                <div class="column">
                    <img src="..\assets\stock-image-4.jpg" style="width:100%">
                    <img src="..\assets\stock-image-5.jpg" style="width:100%">
                    <img src="..\assets\stock-image-6.jpg" style="width:100%">
                    <img src="..\assets\stock-image-7.jpg" style="width:100%">
                </div>
                <div class="column">
                    <img src="..\assets\stock-image-8.jpg" style="width:100%">
                    <img src="..\assets\stock-image-9.jpg" style="width:100%">
                    <img src="..\assets\stock-image-4.jpg" style="width:100%">
                    <img src="..\assets\stock-image-5.jpg" style="width:100%">
                </div>  
                <div class="column">
                    <img src="..\assets\stock-image-6.jpg" style="width:100%">
                    <img src="..\assets\stock-image-7.jpg" style="width:100%">
                    <img src="..\assets\stock-image-8.jpg" style="width:100%">
                    <img src="..\assets\stock-image-9.jpg" style="width:100%">
                </div>
                <div class="column">
                    <img src="..\assets\stock-image-5.jpg" style="width:100%">
                    <img src="..\assets\stock-image-4.jpg" style="width:100%">
                    <img src="..\assets\stock-image-8.jpg" style="width:100%">
                    <img src="..\assets\stock-image-7.jpg" style="width:100%">
                </div>
            </div>
        </div>
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
</template>

<script> 
export default {
    name: 'Retouch',
}
</script>