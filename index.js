import dotenv from 'dotenv';
dotenv.config();
import config from './config';
import App from './app';

(async () => {

  const app = new App(config);
  await app.init();


})()