//@ts-nocheck
import GoDB from 'godb'
//   const user = dataDb?.table('user')
//   let a1 = await user.add({
//     name: 'xxx',
//     age: 'fsdfasd'
//   })
//   let b1 = await user.get(a1.id)
//   debugger
//   console.log(b1)

class DB extends GoDB {
  db: any
  constructor(name, schema, config) {
    super(name, schema, config)
  }
}

const dataDb = new DB('Factory')
export default dataDb
