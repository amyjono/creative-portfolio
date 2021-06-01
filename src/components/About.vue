<template>
    <div class="container fade-in" style="min-height: 75vh;">
        <div class="content col-2">
            <div class="col">
                <img src="..\assets\notepad.jpg" />
            </div>
            <div class="col text-right">
                <h1>About</h1>
                <p>Hi! I’m Amy Johnson</p>
                <p>I enjoy creating graphic design, and elegant UI/UX solutions.</p>
                <p>I am currently working as a Web Designer &amp; Developer. In my previous career I worked my way up to become a Senior Retoucher for an international online luxury fashion retailer. I have also freelanced as a retoucher at various companies, both in-house and remotely.</p>
                <p>I have a triple distinction BTEC National Diploma in Graphic Design, and studied Visual Communication – Graphic Design at the University for the Creative Arts in Kent.</p>
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
        </div>
    </div>
</template>

<script> 
export default {
    name: 'About',
}
</script>