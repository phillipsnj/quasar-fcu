


export function parseEventVariableLogic (selected_event_index, logic, store) {
  var result = true    
  var eventVariables = store.state.nodes[store.state.selected_node].storedEvents[selected_event_index]
  if (logic.evBit != undefined){
    var value = eventVariables.variables[logic.evBit.index]
    //console.log('parseEventVariableLogic: ev ' + logic.evBit.index + ' value = ' + value)
    //console.log('parseEventVariableLogic: ev bit ' + logic.evBit.bit)
    value = (value & 2 ** logic.evBit.bit) >> logic.evBit.bit
    //console.log(`parseEventVariableLogic: evBit value = ` + value)
    result = testCondition(value, logic)
  }
  console.log(`parseEventVariableLogic: result = ` + result)
  return result
}

export function parseNodeVariableLogic (logic, store) {
  var result = true    
  if (logic.nv != undefined){
    var value = store.state.nodes[store.state.selected_node].nodeVariables[logic.nv]
    console.log(`parseNodeVariableLogic: nv value = ` + value)
    result = testCondition(value, logic)
  }
  console.log(`parseNodeVariableLogic: result = ` + result)
  return result
}

function testCondition(value, logic){
  var result = true;
  if (logic.equals != undefined){
    console.log(`testCondition: equals ` + JSON.stringify(logic.equals))
    if (logic.equals != value) {result = false}
  }
  if (logic.notEqual != undefined){
    console.log(`testCondition: notEqual ` + JSON.stringify(logic.notEqual))
    if (logic.notEqual == value) {result = false}
  }
  return result
}



