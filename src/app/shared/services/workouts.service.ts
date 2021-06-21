import { Injectable } from '@angular/core';
import { Workout } from '../model/workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {

  workouts: Workout[] = [];

  constructor() { }

  getProducts(): Workout[] {
    return this.workouts;
  }
}
