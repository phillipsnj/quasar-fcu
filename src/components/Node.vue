<template>
<div>
  <component v-bind:is="display_component"></component>
</div>
</template>

<script>
import {inject, onBeforeMount} from "vue";

import mergDefault from "components/modules/default/default.vue"
import mergDefault2 from "components/modules/default2/default2.vue"
import mergLcbDefault from "components/modules/defaultlcb/defaultLcb.vue"
import Canace8c from "components/modules/canace8c/canace8c";
import Canpan from "components/modules/canpan/canpan";
import Canacc8 from "components/modules/canacc8/canacc8";
import Canservo8c from "components/modules/canservo8c/canservo8c"
import Canled64 from "components/modules/canled64/canled64"
import Cancmd from "components/modules/cancmd/cancmd"
import Canmio from "components/modules/canmio/canmio"

export default {
  name: "node",
  components:{mergDefault, mergDefault2, Canace8c, Canpan, Canacc8, Canservo8c, Canled64, Cancmd, Canmio, mergLcbDefault},
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
