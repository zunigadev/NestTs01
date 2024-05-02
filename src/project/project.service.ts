import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectService {
    tiempo_espera(dias:number) {
        return dias + 5;
    }
}
