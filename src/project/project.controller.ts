import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService:ProjectService) {}

  @Get('/date')
  findByDate() {
    return 'Fechas de proyecto';
  }

  @Post()
  ingresar_fecha(@Body() ingresaFecha:any) {
    return this.projectService.tiempo_espera(20);
  }
}
