<template>
    <div>
        <header class="main-head">
            <div class="header-logo">
                <img src="../assets/logo.png">
            </div>
            <nav class="main-nav">
                <ul>
                    <strong>
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="Design">Design</router-link></li>
                        <li><router-link to="Retouch">Retouch</router-link></li>
                        <li><router-link to="About">About</router-link></li>
                        <li><router-link to="Contact">Contact</router-link></li>
                    </strong>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>