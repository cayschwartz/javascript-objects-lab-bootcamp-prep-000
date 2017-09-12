//var recipe = {flavor:'strawberry'}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}

function deleteFromObjectByKey(object, key){
  temp = Object.assign({}, object, { [key]: value})
  delete temp[key]
  return temp
}

function destructivelyDeleteFromObjectByKey(object, key){


}
