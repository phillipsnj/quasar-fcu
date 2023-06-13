<template>
  <div>
    <component v-bind:is="store.state.services_component"></component>
  </div>
</template>

<script>
import { inject, onBeforeMount } from "vue";
import Default2NodeServicesList from "components/modules/default2/Default2NodeServicesList";
import Default2NodeServiceDiagnostics from "components/modules/default2/Default2NodeServiceDiagnostics";

export default {
  name: "DefaultEvents",
  components: { Default2NodeServicesList, Default2NodeServiceDiagnostics},
  setup() {
    const store = inject('store')
    onBeforeMount(()=> {
      //console.log('DefaultEventsList')
      store.methods.update_services_component("Default2NodeServicesList")
    })
    return {
      store
    }
  }
}
</script>

<style scoped>

</style>
