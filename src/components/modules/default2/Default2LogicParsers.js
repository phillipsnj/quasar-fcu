
export function dummy1 () {}

export function parseProducedEvent (eventIndex, store) {
    var result = false
    var variableConfig = store.state.nodes[store.state.selected_node].variableConfig
    var eventVariables = store.state.nodes[store.state.selected_node].consumedEvents[eventIndex]
    if (variableConfig.producedEventLogic) {
        if (variableConfig.producedEventLogic.condition == 'gthan'){
            var ev = variableConfig.producedEventLogic.ev
            if (eventVariables.variables[ev] != undefined) {
                if (eventVariables.variables[ev] > variableConfig.producedEventLogic.value)
                return true
            } else {
                return undefined
            }
        }
    }
    return result
}

export function parseEventVariableVisibility (item, store) {
    var result = true    
    var eventVariables = store.state.nodes[store.state.selected_node].consumedEvents[store.state.selected_event_index]
//    console.log(`eventVariables ` + JSON.stringify(eventVariables))
    var isProducedEvent = parseProducedEvent(store.state.selected_event_index, store)
    if (item.visibilityLogic) {
        if (item.visibilityLogic.condition == 'false') {
            if(item.visibilityLogic.item == 'producedEvent'){
                result = !isProducedEvent
            }
        }
        if (item.visibilityLogic.condition == 'true') {
            if(item.visibilityLogic.item == 'producedEvent'){
                result = isProducedEvent
            }
        }
    }
//    console.log(`isVisible: ` + result)
    return result
}

    export function dummy2 () {}


