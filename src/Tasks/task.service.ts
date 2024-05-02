import { Injectable } from "@nestjs/common";


@Injectable()
export class TaskService {
    
    listUsers(): Number[] {
        return [1, 2, 3, 4, 5, 6]
    }
}