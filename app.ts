import { Application, Request, Response } from 'express';
import * as express from 'express';
import { HealthCheckController } from './src/controllers/health-check.controller';

const app: Application = express();

const healthCheckController = new HealthCheckController();
app.get('/', (req: Request, res: Response) => healthCheckController.handler(req, res));

app.listen(3000);
