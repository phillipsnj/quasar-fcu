<template>
  <div class="text-h6 text-black"> Node Details {{ props.nodeNumber }}</div>
</template>

<script setup>
import {inject} from "vue";

const props = defineProps({
  "nodeNumber": {
    type: Number,
    required: true
  }
})

const store = inject('store')
</script>

<style scoped>

</style>
