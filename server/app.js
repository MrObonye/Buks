import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import dbConnection from './util/database';

const app = express();
const port = process.env.PORT || 3000;
const swaggerDocument = YAML.load('./server/openapi.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/** database connection */
dbConnection.on('error', console.error.bind(console, 'connection error:'));
dbConnection.once('open', console.info.bind(console, 'connection established:'));
/** database connection */

app.get('/', (req, res) => res.send(`Server running at http://localhost:${port}`));

app.listen(port, () => console.log(`Buks app listening at http://localhost:${port}`));
