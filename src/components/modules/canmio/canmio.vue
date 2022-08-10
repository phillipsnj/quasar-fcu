<template>
  <div class="q-pa-md q-gutter-xs">
    <node-details></node-details>
  </div>
  <div class="q-pa-xs">
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
            <canmio-variables/>
          </q-tab-panel>

          <q-tab-panel name="events" class="bg-white">
            <canmio-events/>
          </q-tab-panel>
        </q-tab-panels>
    </div>
  </div>
</template>

<script>
import {inject, ref} from "vue";
import DefaultInfo from "components/modules/default/DefaultInfo"
import CanmioVariables from "components/modules/canmio/canmioVariables"
import CanmioEvents from "components/modules/canmio/canmioEvents"
import NodeDetails from "components/modules/common/NodeDetails"

export default {
  name: "canmio",
  components: {DefaultInfo, CanmioVariables, CanmioEvents, NodeDetails},
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
