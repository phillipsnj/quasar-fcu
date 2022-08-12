<template>
  <div>
    <div>
      <node-details></node-details>
    </div>
  </div>
  <div>
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
            <canace8c-variables/>
          </q-tab-panel>

          <q-tab-panel name="events" class="bg-white">
            <canace8c-events/>
          </q-tab-panel>
        </q-tab-panels>
    </div>
  </div>
</template>

<script setup>
import {inject, ref} from "vue";
//import Canace8cInfo from "components/modules/canace8c/canpanInfo.vue"
import DefaultInfo from "components/modules/default/DefaultInfo"
import Canace8cVariables from "components/modules/canace8c/canace8cVariables.vue"
import Canace8cEvents from "components/modules/canace8c/canace8cEvents.vue"
import NodeDetails from "components/modules/common/NodeDetails"

const store = inject('store')
const tab = ref('info')

</script>

<style scoped>

</style>
