import { injectable } from "inversify";

@injectable()
export class UsersService {
    constructor() {
    }

    get(param: string) {
        return param;
    }
}