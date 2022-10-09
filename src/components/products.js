const { products } = require('../../data/products.json')

module.exports = {
  getProducts: (req, res) => {
    res.json({ products })
  },

  getProduct: (req, res) => {
    const { id } = req.params

    res.json(products[id])
  },

  addProduct: (req, res) => {
    const { name, price, stock } = req.body
    products.push({
      id: products.length,
      name,
      price,
      stock
    })

    res.json({ success: true })
  },

  updateProduct: (req, res) => {
    const { id } = req.params
    const { name, price, stock } = req.body
    products.forEach((product, i) => {
      if (product.id === Number(id)) {
        product.name = name
        product.price = price
        product.stock = stock
      }
    })

    res.json({ success: true })
  },

  deleteProduct: (req, res) => {
    const id = req.params.id

    const found = false

    products.forEach(function (product, index) {
      if (!found && product.id === Number(id)) {
        products.splice(index, 1)
      }
    })
    res.json({ success: true })
  }

}
