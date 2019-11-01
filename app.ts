import 'reflect-metadata';
import {container} from 'tsyringe';

import express from 'express';
import bodyParser = require('body-parser');

import {ApiController} from './controller/controller.interface';
import {DemoController} from './controller/demo.controller';

/**
 * Defining the express app
 */
const app = express();
const port = 3000;

/**
 * HTTP Config
 */
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', ['GET', 'POST', 'PUT', 'DELETE']);
    next();
})
app.use(bodyParser.json());

/**
 * Register Controller and Routes
 * ToDo: Dependency Container
 */
const registeredController = [
    DemoController
];

registeredController.forEach(controller => {
    const instance = container.resolve(controller) as ApiController;
    app.use(instance.defineRoutes(express.Router()))
});

/**
 * Run
 */
app.listen(port);
console.log('API running under: localhost:' + port);
