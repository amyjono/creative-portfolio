<template>
    <footer class="main-footer">
        <div class="container">
            <div class="content full-width">
                <p>&copy; Copyright {{currentDate.getFullYear()}}</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data(){
     return {
        currentDate: new Date,
        }
    }
}
</script>
