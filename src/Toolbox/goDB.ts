//@ts-nocheck
import GoDB from 'godb'
class DB extends GoDB {
  db: any
  constructor(name, schema, config) {
    super(name, schema, config)
  }
}

const dataDb = new DB('Factory')
export default dataDb
