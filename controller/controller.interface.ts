import {Router} from "express";

export interface ApiController {
    defineRoutes(router: Router): Router;
}
