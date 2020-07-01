/* eslint-disable no-console */
import express from 'express';
import { json } from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import dbConnection from './util/database';
import userRouter from './routes/user.route';

const app = express();
const port = process.env.PORT || 3000;
const swaggerDocument = YAML.load('./server/openapi.yaml');
app.use(express.json());

/** --- middleware ---- */
app.use(json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'POST, GET, OPTIONS, PUT, DELETE, HEAD'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-PINGOTHER, Origin, X-Requested-With, Content-Type, Accept, x-access-token'
  );
  next();
});

app.use('/api/v1/auth/', userRouter);

/** database connection */
// eslint-disable-next-line no-console
dbConnection.on('error', console.error.bind(console, 'connection error:'));
dbConnection.once('open', console.info.bind(console, 'connection established:'));
/** database connection */

app.get('/', (req, res) => res.send(`Server running at http://localhost:${port}`));

app.listen(port, () => console.log(`Buks app listening at http://localhost:${port}`));
