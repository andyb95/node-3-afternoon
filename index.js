require('dotenv').config()

const express = require('express'),
      massive = require('massive'),
      ctrl = require('./controller'),
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      port=SERVER_PORT,
      app = express();

app.use(express.json())

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then(db => {
  app.set('db', db)
}).catch(err => console.log(err))

app.post('/api/product', ctrl.create)
app.get('/api/products', ctrl.getAll)
app.get('/api/product/:id', ctrl.getOne)
app.put('/api/product/:id', ctrl.update)
app.delete('api/product/:id', ctrl.delete)

app.listen(port, () => console.log(`Server running on port: ${port}`))