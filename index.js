import express from 'express';
import session from 'express-session';
import *as dotenv from 'dotenv';
import loggedRouter from './app/routers/logged.js';
import publicRouter from './app/routers/public.js';

import dataMiddleware from './app/middleware/dataMiddleware.js';
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();


app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.urlencoded({ extended: true }));

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: process.env.SECRET,
}));

app.use(express.static('./public'));

// met des data à dispo pour les vues
app.use(dataMiddleware);
app.use(loggedRouter);
app.use(publicRouter);

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});