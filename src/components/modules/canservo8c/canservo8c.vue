<template>
  <div>
    <node-details></node-details>
  </div>
  <div>
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
            <canservo8c-variables/>
          </q-tab-panel>

          <q-tab-panel name="events" class="bg-white">
            <canservo8c-events/>
          </q-tab-panel>
        </q-tab-panels>
    </div>
  </div>
</template>

<script>
import {inject, ref} from "vue";
import DefaultInfo from "components/modules/default/DefaultInfo"
import Canservo8cVariables from "components/modules/canservo8c/Canservo8cVariables"
import Canservo8cEvents from "components/modules/canservo8c/Canservo8cEvents"
import NodeDetails from "components/modules/common/NodeDetails"

export default {
  name: "canservo8c",
  components: {DefaultInfo, Canservo8cVariables, Canservo8cEvents, NodeDetails},
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
