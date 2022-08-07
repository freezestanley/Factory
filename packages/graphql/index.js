const Koa = require('koa')
const mount = require('koa-mount')
const casual = require('casual')
const { graphqlHTTP } = require('koa-graphql')
const schema = require('./schema')
const client = require('./dal')
const bodyParser = require('koa-bodyparser')
const productRoutes = require('./routes')

const hobbies = [
  'soccer',
  'travelling',
  'dancing',
  'painting',
  'sailing',
  'fishing',
  'movies',
  'coding'
]

function generateUser(id, name) {
  return {
    age: casual.integer(20, 30),
    email: casual.email,
    hobbies: [casual.random_element(hobbies)],
    id: `${id}${name}`,
    name: casual.name
  }
}

const USERS = (id) => {
  console.log(id)
  return new Array(10).fill(0).map((x) => generateUser(id))
}

const SOME = (param, header) => {
  return {
    a: param.name,
    b: param.time,
    c: 'c'
  }
}
const app = new Koa()
app.use(bodyParser())
app.use(productRoutes.routes()).use(productRoutes.allowedMethods())

const root = {
  user: generateUser,
  allUsers: USERS,
  some: SOME
}

app.use(
  mount(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true
    })
  )
)

app.use((ctx) => {
  ctx.body = 'Welcome to Koa'
})

app.listen(9001)

app.on('error', (err) => {
  console.error('server error', err)
})
