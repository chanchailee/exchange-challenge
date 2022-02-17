import { Request, Response } from 'express';
export class HealthCheckController {
	handler(req: Request, res: Response) {
		res.send({ message: 'ok' });
	}
}
