
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit{

  selectedSlide: any;
  segment = 0;
  sliderOptions = {
    initialSlide:0,
    slidesPerView: 1,
    speed: 400
  }

  constructor(private router: Router){

  }

  details(){
    this.router.navigate(['/activity-details']);
  }

  ngOnInit() {}

  async segmentChanged(ev){
    await this.selectedSlide.slideTo(this.segment);
  }

  async slidesChange(slides : IonSlides){
    this.selectedSlide = slides;
    slides.getActiveIndex().then(selectedIndex =>{
      this.segment= selectedIndex;
    })
  }

  notification = false;
  myNotification(){
    if(this.notification){
      this.notification = false;
    }
    else{
      this.notification = true;
    }
  }

}
