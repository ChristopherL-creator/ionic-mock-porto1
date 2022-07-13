import { Component, OnInit } from '@angular/core';
import { CamionService } from '../services/camion.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor( private camionService: CamionService) {}

  ngOnInit(): void {
    this.camionService.getCamion();
  }
}
