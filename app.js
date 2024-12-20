import express from "express";
import { router } from './routes/routes.js'; 
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from "body-parser";



const app = express();
const port = 3000;
app.use(express.static('public'));

const __dirname = path.dirname(new URL(import.meta.url).pathname); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);

  });