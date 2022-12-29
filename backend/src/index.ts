import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import db from './models'
import { collections } from './seeders/collections';
import CollectionRoutes from './routes/CollectionRoutes'
var cors = require('cors')
dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3232;

app.use(cors({ origin: '*' }))

app.get('/', async (req: Request, res: Response) => {
  const all = await db.Collection.findAll()
  const result = { msg: 'hello', all }
  return res.json(result)
});

app.use('/api', CollectionRoutes)

const seedCollections = () => {
  collections.forEach((collection) => {
    db.Collection.create(collection)
  })
}

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  // db.sequelize.sync({ force: true }).then(() => {
  //   console.log('⚡️[sequelize] => sync')
  //   seedCollections()
  // })
});

