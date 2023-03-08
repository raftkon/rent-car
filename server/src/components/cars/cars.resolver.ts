import { Query, Resolver } from '@nestjs/graphql';
import { CarsService } from './cars.service';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => String)
  public async getAllCars() {
    return 'hello mathafaka';
  }
}
