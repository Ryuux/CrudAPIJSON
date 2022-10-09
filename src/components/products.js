const { products } = require('../../data/products.json')

module.exports = {
  getProducts: (req, res) => {
    if (products !== '{}') {
      res.json({ products })
    } else return res.send('No products')
  },

  getProduct: (req, res) => {
    const { id } = req.params
    try {
      res.json(products[id])
    } catch (err) {
      res.send({ products: null })
    }
  },

  addProduct: (req, res) => {
    const { name, price, stock } = req.body

    if (!name || price || stock) return res.send({ error: 'Parameters' })
    try {
      products.push({
        id: products.length,
        name,
        price,
        stock
      })

      res.json({ success: true })
    } catch (err) {
      res.json({ error: 'Misterio' })
    }
  },

  updateProduct: (req, res) => {
    const { id } = req.params
    const { name, price, stock } = req.body

    if (!name || !price || !stock || !id) return res.send({ error: 'Parameters' })
    try {
      products.forEach((product, i) => {
        if (product.id === Number(id)) {
          product.name = name
          product.price = price
          product.stock = stock
        }
      })

      res.json({ success: true })
    } catch (err) {
      res.json({ products: null })
    }
  },

  deleteProduct: (req, res) => {
    const id = req.params.id

    if (!id) return res.json({ products: null })

    try {
      products.forEach(function (product, index) {
        if (product.id === Number(id)) {
          products.splice(index, 1)
        }
      })
      res.json({ success: true })
    } catch (err) {
      res.json({ products: null })
    }
  }

}
