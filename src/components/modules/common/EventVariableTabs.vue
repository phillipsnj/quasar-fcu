<template>
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="max-width: 600px">

        <q-tabs v-model="selectedTab">
          <q-tab v-for="tab in tabs" :key="tab.name"
            :label="tab.name"
            :name="tab.name"
          />
        </q-tabs>
  
        <q-tab-panels v-model="selectedTab" animated class="shadow-2 rounded-borders">
          <q-tab-panel name="One">
            <div class="text-h6">One</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
  
          <q-tab-panel name="Two">
            <div class="text-h6">Two</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
  
          <q-tab-panel name="Three">
            <div class="text-h6">Three</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </template>
  

  <script>
  
  // composition API - uses ref()

  import { ref, onMounted } from 'vue'
  
  export default {
    props: {
        tabPanels: Object
    },
    setup (props) {
      onMounted(() => console.log('tab panel name: ' + props.name))
      return {
        selectedTab: ref('Two'),
        tabs: [
          {
            name: 'One',
            componentName: 'One'
          },
          {
            name: 'Two',
            componentName: 'Two'
          },
          {
            name: 'Three',
            componentName: 'Three'
          }
        ]
      }
    }
  }
  </script>
  