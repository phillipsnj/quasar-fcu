
export function dummy1 () {}

export function parseProducedEvent (eventIndex, store) {
    var result = false
    var variableConfig = store.state.nodes[store.state.selected_node].variableConfig
    var eventVariables = store.state.nodes[store.state.selected_node].consumedEvents[eventIndex]
//    console.log(`eventVariables ` + JSON.stringify(eventVariables))
    if (variableConfig.producedEventLogic) {
        if (variableConfig.producedEventLogic.condition == 'gthan'){
            var ev = variableConfig.producedEventLogic.ev
            if (eventVariables.variables[ev] > variableConfig.producedEventLogic.value)
            return true
        }
    }
    return result
}

    export function dummy2 () {}


