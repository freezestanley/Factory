const products = require('./index').db('store').collection('products')
const ObjectId = require('mongodb').ObjectId

const save = async ({ name, description, qty, price }) => { 
  const result = await products.insertOne({ name, description, qty, price })
  console.log(result)
  return result.insertedId
}

const getAll = async () => { 
  const cursor = await products.find()
  return cursor.toArray()
}

const getById = async id => { 
  return await products.findOne({_id:ObjectId(id)})
}

const update = async (id, { name, description, qty, price }) => { 
  const result = await products.replaceOne({ _id: ObjectId(id) }, { name, description, qty, price })
  return result.ops[0]
}

const removeById = async id => { 
  await products.deleteOne({_id:ObjectId(id)})
}

module.exports = {getAll, getById, removeById, save, update}