<template>
    <div class="container">
        <div class="design-page">
            <div class="text-content">
                <h1>Design</h1>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est eopksio laborum. Sed ut perspiciatis unde omnis istpoe natus 
                error sit voluptatem accusantium doloremque eopsloi laudantium, totam rem aperiam, 
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                sunot explicabo.</p>
            </div>
            <DesignTiles />
        </div>
    </div>
</template>

<script>
import DesignTiles from './DesignTiles'

export default {
    name: 'Design',
    components: {
      'DesignTiles': DesignTiles
    }
}
</script>