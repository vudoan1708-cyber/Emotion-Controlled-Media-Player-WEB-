<template>
  <div id="home">
    <SketchP5 />
  </div>
</template>

<script>
import SketchP5 from '@/components/SketchP5.vue';

export default {
  name: 'Home',
  setup() {
    return {
      SketchP5,
    };
  },
};
</script>

<style scoped lang="scss">
@import '@/sass/Unique/_home';
</style>