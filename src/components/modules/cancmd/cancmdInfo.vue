<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="q-pa-md" style="max-width: 300px">
      <q-card-section>
        <div class="text-h6">Node Details</div>
        <div class="text-subtitle2">Details to help identify the Node</div>
      </q-card-section>
      <q-card-section>
        <q-input
          outlined
          v-model="nodeName"
          label="Node Name"
          hint="Name of Node"
          maxlength="30"
          @change="update_node">
        </q-input>
        <q-select
          outlined
          v-model="nodeColour"
          :options="store.state.colours"
          label="Node Colour"
          hint="Colour of Node"
          maxlength="30"
          @update:model-value="update_node">
        </q-select>
        <q-select
          outlined
          use-input
          v-model="nodeGroup"
          :options="groupList"
          label="Node Group"
          hint="Colour of Node"
          maxlength="30"
          new-value-mode="add-unique"
          @update:model-value="update_node">
        </q-select>
      </q-card-section>
    </q-card>
  </div>
  <div class="q-pa-md row">
    <node-parameter Name="Node Number"
                    :Value="store.state.nodes[store.state.selected_node].nodeNumber">
    </node-parameter>
    <node-parameter Name="Manufacturer"
                    :Value="store.state.nodes[store.state.selected_node].moduleManufacturerName">
    </node-parameter>
    <node-parameter Name="Module"
                    :Value="store.state.nodes[store.state.selected_node].module">
    </node-parameter>
    <node-parameter Name="Component"
                    :Value="store.state.nodes[store.state.selected_node].component">
    </node-parameter>
    <node-parameter Name="Node Variables"
                    :Value="store.state.nodes[store.state.selected_node].parameters[6]">
    </node-parameter>
    <node-parameter Name="Event Variables"
                    :Value="store.state.nodes[store.state.selected_node].parameters[5]">
    </node-parameter>
    <node-parameter Name="Events Stored"
                    :Value="store.state.nodes[store.state.selected_node].eventCount">
    </node-parameter>
    <node-parameter Name="Producer"
                    :Value="store.state.nodes[store.state.selected_node].producer">
    </node-parameter>
    <node-parameter Name="Consumer"
                    :Value="store.state.nodes[store.state.selected_node].consumer">
    </node-parameter>
    <node-parameter Name="Consume own Events"
                    :Value="store.state.nodes[store.state.selected_node].coe">
    </node-parameter>
    <node-parameter Name="CPU Name"
                    :Value="store.state.nodes[store.state.selected_node].cpuName">
    </node-parameter>
    <node-parameter Name="Interface"
                    :Value="store.state.nodes[store.state.selected_node].interfaceName">
    </node-parameter>
    <node-parameter Name="Major Version"
                    :Value="store.state.nodes[store.state.selected_node].parameters[7]">
    </node-parameter>
    <node-parameter Name="Minor Version"
                    :Value="String.fromCharCode(store.state.nodes[store.state.selected_node].parameters[2])">
    </node-parameter>
    <node-parameter Name="Beta Version"
                    :Value="store.state.nodes[store.state.selected_node].parameters[20]">
    </node-parameter>
  </div>
</template>

<script setup>
import {inject, onBeforeMount, ref, watch, computed} from "vue"
import NodeParameter from "components/modules/common/NodeParameter"

const store = inject('store')

const nodeName = ref('')
const nodeColour = ref('')
const nodeGroup = ref('')
const groupList = ref([])

const nodeDetails = computed(() => {
  //console.log(`Computed Events`)
  return Object.values(store.state.layout.nodeDetails)
})

watch(nodeDetails, () => {
  console.log(`WATCH Node Details`)
  updateGroupList()
})

const updateGroupList = () => {
  groupList.value = []
  nodeDetails.value.forEach(node => {
    if (!groupList.value.includes(node.group)) {
      groupList.value.push(node.group)
    }
  })
}


onBeforeMount(() => {
  store.methods.request_all_node_parameters(store.state.selected_node, 20, 100)
  if (store.state.selected_node in store.state.layout.nodeDetails) {
    //console.log(`Event Layout`)
    nodeName.value = store.state.layout.nodeDetails[store.state.selected_node].name
    nodeColour.value = store.state.layout.nodeDetails[store.state.selected_node].colour
    nodeGroup.value = store.state.layout.nodeDetails[store.state.selected_node].group
  } else {
    //console.log(`Event No Layout ${props.eventIdentifier}`)
    nodeName.value = store.state.selected_node.toString()+' - '+store.state.nodes[store.state.selected_node].module
    nodeColour.value = "black"
    nodeGroup.value = ""
  }
  updateGroupList()
})

const update_node = () => {
  console.log(`Node Details Update Node`)
  if (store.state.selected_node in store.state.layout.nodeDetails === false) {
    store.state.layout.nodeDetails[store.state.selected_node] = {}
  }
  store.state.layout.nodeDetails[store.state.selected_node].name = nodeName.value
  store.state.layout.nodeDetails[store.state.selected_node].colour = nodeColour.value
  store.state.layout.nodeDetails[store.state.selected_node].group = nodeGroup.value
  store.methods.update_layout()

}


</script>

<style scoped>

</style>
