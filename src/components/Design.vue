<template>
    <div class="container">
        <div class="design-page fade-in">
            <DesignTiles />
        </div>
    </div>
</template>

<script>
import DesignTiles from './DesignTiles'

export default {
    name: 'Design',
    components: {
      'DesignTiles': DesignTiles,
    }
}
</script>