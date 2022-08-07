import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import router from './src/Api/config';

const app = express();

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(','),
    methods: "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    credentials: true,
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept'
}))

app.use('/', router);

const setupServer = (): void => {
    app.set('port', process.env.PORT);
    const server = http.createServer(app);
    
    server.listen(process.env.PORT);
    server.on('connect', () => console.log('Server running'));
    
    require('./src/Dal/database');
}
setupServer();