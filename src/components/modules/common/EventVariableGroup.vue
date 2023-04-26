<template>
  <div style="border:2px solid grey">

    <div class = "GroupTitle"> {{ configuration.displayTitle }}</div>
    test
<!-- 
    <div class="q-pa-xs row">
      <div v-for="item in groupItems" :key="item" >
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
    </div>
 -->
   </div>
</template>


<script>
import {inject, ref, onMounted, computed, watch} from "vue";
import EventVariableNumber from "components/modules/common/EventVariableNumber"

export default {

  components: {
//    EventVariableNumber
  },

  props: {
    configuration: Object
  },
  setup(props) {
    const store = inject('store')
    onMounted(() => {
      console.log("Event Group onMounted")
      console.log('Event Group props: ' + JSON.stringify(props))
    })
    return {store }
  }
}
</script>


<style scoped>
.GroupTitle {
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
}
</style>
