<template>
  <div class="q-pa-xs row">
    Group Component
    <h4>{{ name }}</h4>
    <div v-for="item in groupItems" :key="item">
      item
<!--       <NodeVariable v-if="item.type=='NodeVariable'"
                    :node-number=store.state.selected_node
                    :name="item.title"
                    :node-variable-index=item.nodeVariableIndex>
      </NodeVariable>
 -->
    </div>

  </div>
</template>

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

/*
export default {
}
*/


onMounted(() => {
  console.log("Group onMounted")
  console.log(`Group name : ${name}`)
  console.log(`Group items : ${JSON.stringify(props.groupItems)}`)
  console.log(`Group store : ${JSON.stringify(store.state)}`)
})


</script>

<style scoped>

</style>
