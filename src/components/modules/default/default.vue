<template>
  <div class="q-pa-md q-gutter-sm">
    <div class="text-h4 text-white">Node : {{ store.state.selected_node }} - {{ store.state.nodes[store.state.selected_node].module }}</div>
  </div>
  <div class="q-pa-md">
    <div>
      <q-card>
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
          <q-tab name="variables" label="Variables"/>
          <q-tab name="events" label="Events"/>
        </q-tabs>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="info">
            <default-info/>

          </q-tab-panel>

          <q-tab-panel name="variables">
            <default-variables/>
          </q-tab-panel>

          <q-tab-panel name="events">
            <default-events/>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import {inject, ref} from "vue";
import DefaultInfo from "components/modules/default/DefaultInfo"
import DefaultVariables from "components/modules/default/DefaultVariables"
import DefaultEvents from "components/modules/default/DefaultEvents"

export default {
  name: "mergDefault",
  components: {DefaultInfo, DefaultVariables, DefaultEvents},
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
