<template>
  <div class="text-h6 text-white">
    Node : {{ store.state.selected_node }} -
    Type : {{ store.state.nodes[store.state.selected_node].module }} -
    Component : {{ store.state.nodes[store.state.selected_node].component }}</div>
</template>

<script>
import {inject} from "vue";

export default {
  name: "NodeDetails",
  setup() {
    const store = inject('store')
    return {store}
  },
}
</script>

<style scoped>

</style>
