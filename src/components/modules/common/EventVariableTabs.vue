<template>
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="max-width: 600px">

        <q-tabs v-model="selectedTab">
          <q-tab v-for="tab in tabPanels" :key="tab.name"
            :label="tab.name"
            :name="tab.name"
          />
        </q-tabs>
  

        <q-tab-panels keep-alive v-model="selectedTab">
          <q-tab-panel v-for="tab in tabPanels" :key="tab.name" :name="tab.name" >
            <!-- <component :is="tab.componentName"></component> -->

            <div v-for="item in tab.items" :key="item">
              <EventVariableNumber v-if="item.type=='EventVariableNumber'"
                  :node-number=store.state.selected_node
                  :eventIndex = store.state.selected_event_index
                  :eventVariableIndex= "item.eventVariableIndex"
                  :startBit = "item.startBit"
                  :endBit = "item.endBit"
                  :displayOffset = "item.displayOffset"
                  :name="item.displayTitle">
              </EventVariableNumber>
            </div>
          </q-tab-panel>
        </q-tab-panels>

      </div>
    </div>
  </template>
  

  <script>
  
  // composition API - uses ref()

  import { inject, ref, onMounted } from 'vue'
  import EventVariableNumber from "components/modules/common/EventVariableNumber"

  const tabPanels = ref()
  
  export default {
    props: {
      configuration: Object
    },
      components: {
      EventVariableNumber
    },
    setup (props) {
      const store = inject('store')
      onMounted(() => {
        console.log('tabs props: ' + JSON.stringify(props))
        tabPanels.value = props.configuration.tabPanels
        console.log('tabs tabPanels: ' + JSON.stringify(tabPanels.value))
      })

      return {
        store,
        selectedTab: ref('One'),
        tabPanels
      }
    }
  }
  </script>
  