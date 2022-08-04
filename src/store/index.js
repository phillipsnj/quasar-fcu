import {reactive} from 'vue'
import io from 'socket.io-client'
//import VueSocketIO from 'vue-socket.io'

const state = reactive({
  nodes: {},
  events: {},
  cbus_errors: {},
  dcc_sessions: {},
  dcc_errors: {},
  layout: {},
  display_component: "home",
  events_component: "DefaultEventsList",
  selected_node: 0,
  selected_event_index: 0,
  title: "MERG Quasar FCU",
  debug: false,
  advanced: false,
  develop: false,
  colours: ["black", "red", "pink", "purple", "deep-purple", "indigo", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "deep-orange", "brown", "blue-grey", "grey"]
})

const methods = {
  remove_node(nodeNumber) {
    socket.emit('REMOVE_NODE', {"nodeId": nodeNumber})
  },
  update_layout() {
    console.log(`Update Layout Details : ` + state.title)
    socket.emit('UPDATE_LAYOUT_DETAILS', state.layout)
  },
  update_node_variable(nodeNumber, nodeVariableIndex, nodeVariableValue) {
    console.log(`MAIN Update Node Variable :`+nodeNumber+' : '+nodeVariableIndex+' : '+  nodeVariableValue)
    state.nodes[nodeNumber].nodeVariables[nodeVariableIndex] = nodeVariableValue
    if (nodeVariableValue !="" ) {
      socket.emit('UPDATE_NODE_VARIABLE', {
        "nodeId": nodeNumber,
        "variableId": nodeVariableIndex,
        "variableValue": parseInt(nodeVariableValue)
      })
    }
  },
  update_node_variable_in_learn_mode(nodeNumber, nodeVariableIndex, nodeVariableValue) {
    console.log(`MAIN Update Node Variable in Learn Mode:`+nodeNumber+' : '+nodeVariableIndex+' : '+  nodeVariableValue)
    state.nodes[nodeNumber].nodeVariables[nodeVariableIndex] = nodeVariableValue
    if (nodeVariableValue !="" ) {
      socket.emit('UPDATE_NODE_VARIABLE_IN_LEARN_MODE', {
        "nodeId": nodeNumber,
        "variableId": nodeVariableIndex,
        "variableValue": parseInt(nodeVariableValue)
      })
    }
  },
  update_event_variable(nodeNumber, eventName, eventIndex, eventVariableIndex, eventVariableValue) {
    console.log(`MAIN Update Event Variable : ${eventVariableValue} : ${eventIndex}`)
    state.nodes[nodeNumber].consumedEvents[eventIndex].variables[eventVariableIndex] = eventVariableValue
    if (eventVariableValue !="")
    socket.emit('UPDATE_EVENT_VARIABLE',{
      "nodeId": nodeNumber,
      "eventName": eventName,
      "eventIndex": eventIndex,
      "eventVariableId": eventVariableIndex,
      "eventVariableValue": parseInt(eventVariableValue)
    })
  },
  remove_event(nodeNumber, eventName) {
    socket.emit('REMOVE_EVENT', {
        "nodeId": nodeNumber,
        "eventName": eventName
    })
  },
  teach_event(nodeNumber, eventName, eventIndex) {
    socket.emit('TEACH_EVENT', {
      "nodeId": nodeNumber,
      "eventName": eventName,
      "eventIndex": eventIndex
    })
  },
  update_display_component(component) {
    console.log(`Display Component`)
    state.display_component = component
  },
  update_event_component(component) {
    console.log(`Event Component ${component}`)
    state.events_component = component
  },
  QNN() {
    console.log(`QUERY_ALL_NODES`)
    socket.emit('QUERY_ALL_NODES')
  },
  clear_events() {
    socket.emit('CLEAR_EVENTS')
    console.log(`CLEAR_EVENTS`)
  },
  clear_cbus_errors() {
    socket.emit('CLEAR_CBUS_ERRORS')
    console.log(`CLEAR_CBUS_ERRORS`)
  },
  refresh_events() {
    socket.emit('REFRESH_EVENTS')
    console.log(`REFRESH_EVENTS`)
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
  console.log(`RECEIVED Nodes Data`)
  state.nodes = data
})

socket.on("events", (data) => {
  console.log(`RECEIVED Events Data`)
  state.events = data
})

socket.on('layoutDetails', (data) => {
  console.log(`RECEIVED Layout Details`)
  state.layout = data;
})

socket.on("cbusError", (data) => {
  console.log(`RECEIVED CBus Error `)
  state.cbus_errors = data
})

socket.on('dccSessions', function (data) {
  console.log(`RECEIVED DCC Sessions`)
  // console.log(`CBUS Errors Received:${JSON.stringify(data)}`)
  state.dcc_sessions = data;
})

socket.on("dccError", (data) => {
  console.log(`RECEIVED DCC Error`)
  state.dcc_errors = data
})

export default {
  state,
  methods,
  getters
}
