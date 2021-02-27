import { Request, Response, NextFunction} from "express"
import { interfaces, controller, httpGet } from "inversify-express-utils";
import { inject } from "inversify";
import { UsersService } from './users.service';

@controller("/users")
export class UsersController implements interfaces.Controller {

    constructor( @inject("UsersService") private usersService: UsersService ) {}

    @httpGet("/test")
    private test(req: Request, res: Response, next: NextFunction): string {
        const name = String(req.query.name);
        return this.usersService.get(name);
    }
}