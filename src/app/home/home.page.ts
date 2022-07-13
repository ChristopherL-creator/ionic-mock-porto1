import { Component } from '@angular/core';
import { CamionService } from '../services/camion.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private camionService: CamionService) {}

  loadCamion(){
    this.camionService.getCamion();
  }



}
