import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
		res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

		if (req.method === 'OPTIONS') {
			res.status(200).send();
			console.log(200);
		} else {
			next();
		}
	};
}