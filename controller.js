module.exports={

  create:(req, res, next) => {
    const dbInstance = req.app.get('db')

    const {name, description, price, image_url} = req.body

    dbInstance.create_product([name, description, price, image_url])
    .then( () => res.sendStatus(200))
    .catch( err => {
      res.status(500).send(err)
      console.log(err)
    })
  },

  getOne:(req, res, next) => {
    const dbInstance = req.app.get('db')
    const{id} = req.params

    dbInstance.read_product(id)
    .then(product => res.status(200).send(product))
    .catch(err => {
      res.status(500).send(err);
      console.log(err)
    })
    // const {product_id} = req.body

    // db.read_product()
  },

  getAll: (req, res, next) => {
    const dbInstance = req.app.get('db')

    dbInstance.read_products()
    .then(products => res.status(300).send(products))
    .catch(err => res.status(500).send(err))
  },

  update: (req, res, next) => {
    const dbInstance = req.app.get('db')
    const {params, query} = req

    dbInstance.update_product([params.id, query.desc])
    .then(()=> res.sendStatus(200))
    .catch(err => res.status(500).send(err))
  },

  delete: (req, res, next) => {
    const dbInstance = req.app.get('db')
    const{id} = req.params

    dbInstance.delete_product(id)
    .then(product => res.status(200).send(product))
    .catch(err => res.status(500).send(err))
  }
}