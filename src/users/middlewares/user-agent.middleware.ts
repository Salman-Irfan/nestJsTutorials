import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export function userAgent(req: Request, res: Response, next: NextFunction) {
    const userAgent = req.headers['user-agent'];
    console.log(userAgent)
    req['userAgent'] = userAgent
    next()
}

@Injectable()
export class UserAgentClassMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const userAgent = req.headers['user-agent'];
        console.log(`${userAgent} from class based middleware`)
        req['userAgent'] = userAgent
        next()
    }
}