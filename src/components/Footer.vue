<template>
    <footer class="main-footer">
        <strong>&copy; Copyright {{currentDate.getFullYear()}}</strong>
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
