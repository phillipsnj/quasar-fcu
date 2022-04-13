import {reactive} from 'vue'
import io from 'socket.io-client'
//import VueSocketIO from 'vue-socket.io'

const state = reactive({
  nodes: {},
  events: {},
  cbus_errors: {},
  dcc_sessions: {},
  dcc_errors : {},
  layout: {},
  display_component: "home",
  events_component: "DefaultEventsList",
  selected_node: 0,
  selected_event_index : 0,
  title: "MERG Quasar FCU",
  debug: false,
  advanced: false,
  colours :["black","red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","blue-grey","grey"]
})

const methods = {
  remove_node(nodeNumber){
    socket.emit('REMOVE_NODE', {"nodeId":nodeNumber})
  },
  remove_event(eventIdentifier){
    socket.emit('REMOVE_NODE', {"eventId":eventIdentifier})
  },
  update_layout() {
    console.log(`Update Layout Details : `+state.title)
    socket.emit('UPDATE_LAYOUT_DETAILS', state.layout)
  },
  update_node_variable(nodeNumber, nodeVariableIndex, nodeVariableValue){
    console.log(`Update Node Variable`)
    state.nodes[nodeNumber].nodeVariables[nodeVariableIndex] = nodeVariableValue
  },
  update_event_variable(nodeNumber, eventIndex, eventVariableIndex, eventVariableValue){
    //console.log(`Update Event Variable : `+eventVariableValue)
    state.nodes[nodeNumber].consumedEvents[eventIndex].variables[eventVariableIndex] = eventVariableValue
  },
  update_display_component(component) {
    console.log(`Display Component`)
    state.display_component = component
  },
  update_event_component(component) {
    console.log(`Event Component`)
    state.events_component = component
  },
  QNN() {
    console.log(`Emit QNN`)
    socket.emit('QUERY_ALL_NODES')
  },
  clear_events: function () {
    //console.log(`QUERY_ALL_NODES`)
    socket.emit('CLEAR_EVENTS')
    //console.log(`CLEAR_EVENTS_2`)
    //socket.emit('QUERY_ALL_NODES')
    socket.emit('CLEAR_EVENTS')
    console.log(`CLEAR_EVENTS_3`)
  },
  request_all_node_parameters(nodeId, parameters, delay) {
    socket.emit('REQUEST_ALL_NODE_PARAMETERS', {"nodeId": nodeId, "parameters": parameters, "delay": delay})
  },
  request_all_node_variables(nodeId, variables, delay, start) {
    socket.emit('REQUEST_ALL_NODE_VARIABLES', {
      "nodeId": nodeId,
      "variables": variables,
      "delay": delay,
      "start": start
    })
  },
  request_all_node_events(nodeId) {
    socket.emit('REQUEST_ALL_NODE_EVENTS', {"nodeId": nodeId})
  },
  request_all_event_variables(nodeId, eventIndex, delay, variables) {
    console.log(`REQUEST_ALL_EVENT_VARIABLES`)
    socket.emit('REQUEST_ALL_EVENT_VARIABLES', {
      "nodeId": nodeId,
      "eventIndex": eventIndex,
      "variables": variables,
      "delay": delay
    })
  }
}

const getters = {}

const socket = io('http://localhost:5552')

socket.on("connect", () => {
  console.log(`Socket Connect`)
  //socket.emit('QUERY_ALL_NODES')
})

socket.on("nodes", (data) => {
  console.log(`Nodes Data`)
  state.nodes = data
})

socket.on("events", (data) => {
  console.log(`Events Data`)
  state.events = data
})

socket.on('layoutDetails', (data) => {
  state.layout = data;
})

socket.on("cbusError", (data) => {
  console.log(`CBus Error`)
  state.cbus_errors = data
})

socket.on('dccSessions', function (data) {
  // console.log(`CBUS Errors Received:${JSON.stringify(data)}`)
  state.dcc_sessions = data;
})

socket.on("dccError", (data) => {
  console.log(`DCC Error`)
  state.dcc_errors = data
})

export default {
  state,
  methods,
  getters
}
