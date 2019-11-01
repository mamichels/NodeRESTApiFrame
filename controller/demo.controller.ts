import {injectable} from "tsyringe";
import {Router} from 'express';

import {ApiController} from './controller.interface';

import {DemoDomain} from '../domain/demo.domain';

@injectable()
export class DemoController implements ApiController {

    constructor(private readonly demoDomain: DemoDomain) {
    }

    public defineRoutes(router: Router) {
        router.get('/votes', (req, res) => {
            this.demoDomain.getAll().then((models => {
                return res.send(models);
            }));
        });
        
        router.get('/votes/:id', (req, res) => {
            this.demoDomain.getById(req.params.id).then((model => {
                return res.send(model);
            }));
        });
        
        router.post('/votes', (req, res) => {
            this.demoDomain.add(req.body).then(() => {
                return res.send(true);
            });
        });
        
        router.put('/votes/:id', (req, res) => {
            this.demoDomain.edit(req.body).then(() => {
                return res.send(true);
            });
        });
        
        router.delete('/votes/:id', (req, res) => {
            this.demoDomain.delete(req.params.id).then(() => {
                return res.send(true);
            });
        });

        return router;
    }
}
