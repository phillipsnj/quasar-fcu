<template>
  <div class="q-pa-md">
    <component v-bind:is="store.state.events_component"></component>
  </div>
</template>

<script>
import { inject, onBeforeMount } from "vue";
//import CanpanEventsList from "components/modules/canpan/CanpanEventsList";
import CanpanEventVariables from "components/modules/canpan/canpanEventVariables";
import CanpanEventsList from "components/modules/canpan/canpanEventsList";

export default {
  name: "CanpanEvents",
  components: { CanpanEventsList, CanpanEventVariables},
  setup() {
    const store = inject('store')
    onBeforeMount(()=> {
      console.log('DefaultEventsList')
      store.methods.update_event_component("CanpanEventsList")
    })
    return {
      store
    }
  }
}
</script>

<style scoped>

</style>
