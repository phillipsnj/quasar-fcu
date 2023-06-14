<template>
  <div class="text-h6">
    Node : {{ store.state.selected_node }} -
    Type : {{ store.state.nodes[store.state.selected_node].moduleName }}
  </div>

<!--
  <div class="text-h8">
    Component : {{ store.state.nodes[store.state.selected_node].component }} - 
    Event Component : {{ store.state.events_component}}
  </div>
 -->
 
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
