import "reflect-metadata";
import * as bodyParser from 'body-parser';

import { Container } from 'inversify';
import {  InversifyExpressServer } from 'inversify-express-utils';
import {UsersService} from "./controllers/users.service";
import { config as loadEnv } from 'dotenv';

import "./controllers/users.controller";

loadEnv();

let container = new Container();

container.bind<UsersService>('UsersService').to(UsersService);

// create server
let server = new InversifyExpressServer(container);

server.setConfig((app) => {

    // add body parser
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});

let app = server.build();

app.listen(process.env.PORT,() => {
    console.log('Your server is runing');
});