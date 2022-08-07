const Router = require('@koa/router')
const {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct
} = require('../dal/products.api')

const router = new Router({
  prefix: '/products'
})

router.get('/', async (ctx) => {
  ctx.body = await getProducts()
})

router.post('/', async (ctx) => {
  let product = ctx.request.body
  product = await createProduct(product)
  ctx.response.state = 200
  ctx.body = product
})

router.get('/:id', async (ctx) => {
  const id = ctx.params.id
  ctx.body = await getProduct(id)
})

router.delete('/:id', async (ctx) => {
  const id = ctx.params.id
  await deleteProduct(id)
})

router.put('/:id', async (ctx) => {
  const id = ctx.params.id
  let product = ctx.request.body
  product = await updateProduct(product)
  ctx.response.status = 200
  ctx.body = product
})

module.exports = router
