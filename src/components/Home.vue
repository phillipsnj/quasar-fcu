<template>
  <div class="bg-primary q-pa-md">
    <div class="q-pa-md q-mr-sm rounded-borders">
      <div class="text-h4 text-white">Home Page</div>
      <div class="text-h5 text-white">{{ store.state.layout.layoutDetails.title }}</div>"
    </div>
  </div>
</template>

<script setup>

import {inject} from "vue";

const store = inject('store')

</script>
