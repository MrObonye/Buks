import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const app = express();
const port = process.env.PORT || 3000;
const swaggerDocument = YAML.load('./server/openapi.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => res.send(`Server running at http://localhost:${port}`));

app.listen(port, () => console.log(`Buks app listening at http://localhost:${port}`));