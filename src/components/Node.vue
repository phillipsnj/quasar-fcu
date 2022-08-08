<template>
<div>
  <component v-bind:is="display_component"></component>
</div>
</template>

<script>
import {inject, onBeforeMount} from "vue";

import mergDefault from "components/modules/default/default.vue"
import Canace8c from "components/modules/canace8c/canace8c";
import Canpan from "components/modules/canpan/canpan";
import Canacc8 from "components/modules/canacc8/canacc8";

export default {
  name: "node",
  components:{mergDefault, Canace8c, Canpan, Canacc8},
  setup() {
    const store = inject('store')
    const display_component = store.state.nodes[store.state.selected_node].component
    return {
      store, mergDefault, display_component
    }
  }
}
</script>

<style scoped>

</style>
