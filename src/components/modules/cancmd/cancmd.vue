<template>
  <div class="q-pa-md q-gutter-sm">
    <node-details></node-details>
  </div>
  <div class="q-pa-md">
    <div>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="info" label="Info"/>
          <q-tab name="variables" label="Variables" v-if="store.state.nodes[store.state.selected_node].flim"/>
          <q-tab name="events" label="Events" v-if="store.state.nodes[store.state.selected_node].flim"/>
        </q-tabs>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="info" class="bg-white">
            <default-info/>

          </q-tab-panel>

          <q-tab-panel name="variables" class="bg-white">
            <cancmd-variables/>
          </q-tab-panel>

          <q-tab-panel name="events" class="bg-white">
            <cancmd-events/>
          </q-tab-panel>
        </q-tab-panels>
    </div>
  </div>
</template>

<script>
import {inject, ref} from "vue";
import DefaultInfo from "components/modules/default/DefaultInfo"
import CancmdVariables from "components/modules/cancmd/cancmdVariables"
import CancmdEvents from "components/modules/cancmd/cancmdEvents"
import NodeDetails from "components/modules/common/NodeDetails"

export default {
  name: "mergDefault",
  components: {DefaultInfo, CancmdVariables, CancmdEvents, NodeDetails},
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
