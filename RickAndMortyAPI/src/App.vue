<script setup>
  import HeaderComponent from './components/HeaderComponent.vue';
  import Characters from './components/Characters/Characters.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header fixed top -->
    <HeaderComponent />
    
    <div class="mt-40 flex-1">
      <Characters />
    </div>
  </div>
</template>