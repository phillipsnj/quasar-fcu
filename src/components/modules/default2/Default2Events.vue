<template>
  <div>
    <component v-bind:is="store.state.events_component"></component>
  </div>
</template>

<script>
import { inject, onBeforeMount } from "vue";
import Default2EventsList from "components/modules/default2/Default2EventsList";
import Default2EventVariables from "components/modules/default2/Default2EventVariables";

export default {
  name: "DefaultEvents",
  components: { Default2EventsList, Default2EventVariables},
  setup() {
    const store = inject('store')
    onBeforeMount(()=> {
      //console.log('DefaultEventsList')
      store.methods.update_event_component("Default2EventsList")
    })
    return {
      store
    }
  }
}
</script>

<style scoped>

</style>
