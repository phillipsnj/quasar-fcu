<template>
  <div class="q-pa-md">
    <component v-bind:is="store.state.events_component"></component>
  </div>
</template>

<script>
import { inject, onBeforeMount } from "vue";
import Canservo8cEventsList from "components/modules/canservo8c/Canservo8cEventsList";
import Canservo8cEventVariables from "components/modules/canservo8c/Canservo8cEventVariables";

export default {
  name: "Canservo8cEvents",
  components: { Canservo8cEventsList, Canservo8cEventVariables},
  setup() {
    const store = inject('store')
    onBeforeMount(()=> {
      console.log('Canservo8cEventsList')
      store.methods.update_event_component("Canservo8cEventsList")
    })
    return {
      store
    }
  }
}
</script>

<style scoped>

</style>
