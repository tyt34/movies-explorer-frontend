function filter(obj, text, check) {
  let arr = []
  for (let i=0; i<obj.length; i++) {
    addOrNot(obj[i], text, arr, check)
  }
  return arr
}

function addOrNot(obj, text, arr, check) {
  let needDuration
  if (check) {
    needDuration = 40
  } else {
    needDuration = Infinity // бесконечность
  }
  if (obj.nameEN === null) {
    obj.nameEN = obj.nameRU
  }
  if ((obj.nameRU.toLowerCase().includes(text.toLowerCase())) && (obj.duration < needDuration)) {
    arr.push(obj)
  } else if ((obj.nameEN.toLowerCase().includes(text.toLowerCase())) && (obj.duration < needDuration)) {
    arr.push(obj)
  }
}

module.exports.filter = filter
