import { EmployeesResolver } from './employees.resolver';
import { EmployeesService } from './employees.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [EmployeesResolver, EmployeesService],
})
export class EmployeesModule {}
