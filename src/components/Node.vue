<template>
<div>
  <component v-bind:is="display_component"></component>
</div>
</template>

<script>
import {inject} from "vue";
import mergDefault from "components/modules/default/default.vue"


export default {
  name: "node",
  components:{mergDefault},
  setup() {
    const store = inject('store')
    const display_component = "mergDefault"
    return {
      store, mergDefault, display_component
    }
  }
}
</script>

<style scoped>

</style>
