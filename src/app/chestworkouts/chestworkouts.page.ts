import { HttpClient } from '@angular/common/http';
import { Component,} from '@angular/core';
import { WorkoutsService } from '../shared/services/workouts.service';

@Component({
  selector: 'app-chestworkouts',
  templateUrl: './chestworkouts.page.html',
  styleUrls: ['./chestworkouts.page.scss'],
})
export class ChestworkoutsPage{

  workouts: any = [];

  constructor(public http: HttpClient, private workoutService: WorkoutsService,) {
    this.workouts = this.workoutService.getProducts();
   }

  ngOnInit() {
    this.getChest();
  }

  async getChest(){
    var url = 'https://buddy-v3.herokuapp.com/getChest';
    this.http.get(url).subscribe(data => {
    this.workouts=data
  })
}

}

