<template>
  <div style="border:2px solid grey">
    <div class = "GroupTitle"> {{ name }}</div>
    <div class="q-pa-xs row">
      <div v-for="item in groupItems" :key="item" >
        <NodeVariable v-if="item.type=='NodeVariable'"
                      :node-number=store.state.selected_node
                      :name="item.title"
                      :node-variable-index=item.nodeVariableIndex>
        </NodeVariable>
        <NodeVariableBitSingle v-if="item.type=='NodeVariableBitSingle'"
                                  :NodeNumber="store.state.selected_node"
                                  :VariableIndex=item.nodeVariableIndex
                                  :Title="item.title"
                                  :Description="item.description"
                                  :Bit=item.bit
                                  :Name="item.title">
        </NodeVariableBitSingle>

      </div>
    </div>

  </div>
</template>


<script>
import {inject, ref, onMounted, computed, watch} from "vue";
import NodeVariable from "components/modules/common/NodeVariable"
import NodeVariableBitSingle from "components/modules/common/NodeVariableBitSingle"

export default {

  components: {
    NodeVariable,
    NodeVariableBitSingle
  },

  props: {
    name: String,
    groupItems: Array
  },
  setup() {
    const store = inject('store')
    onMounted(() => {
      console.log("Group onMounted")
//      console.log(`Group name : ${this.name}`)
//      console.log(`Group items : ${JSON.stringify(groupItems)}`)
      console.log(`Group store selected node : ${JSON.stringify(store.state.selected_node)}`)
      console.log(`Group store NV: ${JSON.stringify(store.state.nodes[store.state.selected_node].variableConfig.nv)}`)
    })
    return {store}
  },
  watch: {
    name(newName, oldName) {
      console.log(`Group name : ${newName}`)
    }
  },
  mounted() {
      console.log(`Group name : ${name}`)
  }
}
</script>



<!-- 
<script setup>
import {inject, ref, onMounted, computed, watch} from "vue";
import NodeVariable from "components/modules/common/NodeVariable"
const store = inject('store')

const props = defineProps({
  "name": {
    type: String,
    required: false
  },
  "groupItems": {
    type: Array,
    required: false
  }

})

onMounted(() => {
  console.log("Group onMounted")
  console.log(`Group name : ${name}`)
  console.log(`Group items : ${JSON.stringify(props.groupItems)}`)
  console.log(`Group store : ${JSON.stringify(store.state)}`)
})

</script>
 -->

<style scoped>
.GroupTitle {
  text-align: center;
}
</style>
