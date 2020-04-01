const db = []

const getId = () => {
  let id = db.map(d => d._id).sort().pop() || 0
  return ++id
}

exports.getAll = () => db

exports.get = _id => db.find(d => d._id === Number(_id))

exports.insert = body => {
  body._id = getId()
  db.push(body)
  return body
}

exports.update = (_id, body) => {
  const index = db.findIndex(d => d._id === Number(_id))
  if (index === -1) return { modified: 0 }
  const changes = db[index]
  db[index] = Object.assign({}, changes, body)
  return { modified: 1, value: db[index] }
}

exports.delete = _id => {
  const index = db.findIndex(d => d._id === Number(_id))
  if (index === -1) return { deleted: 0 }
  const value = db.splice(index)
  return { deleted: 1, value }
}