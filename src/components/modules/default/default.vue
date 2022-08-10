<template>
  <div>
    <node-details></node-details>
  </div>
  <div>
    <q-tabs
      v-model="tab"
      dense
      class="text-black"
      active-color="black"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="info" label="Info"/>
      <q-tab name="variables" label="Variables"/>
      <q-tab name="events" label="Events"/>
    </q-tabs>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="info" class="bg-white">
        <default-info/>

      </q-tab-panel>

      <q-tab-panel name="variables" class="bg-white">
        <default-variables/>
      </q-tab-panel>

      <q-tab-panel name="events" class="bg-white">
        <default-events/>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import {inject, ref} from "vue";
import DefaultInfo from "components/modules/default/DefaultInfo"
import DefaultVariables from "components/modules/default/DefaultVariables"
import DefaultEvents from "components/modules/default/DefaultEvents"
import NodeDetails from "components/modules/common/NodeDetails"

export default {
  name: "mergDefault",
  components: {DefaultInfo, DefaultVariables, DefaultEvents, NodeDetails},
  setup() {
    const store = inject('store')
    return {
      tab: ref('info'),
      store
    }
  }
}
</script>

<style scoped>

</style>
