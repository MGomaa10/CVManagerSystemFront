import { Component, OnInit } from '@angular/core';

//Services
import { HomeServicesService } from "../../Services/HomeServices/home-services.service";

//Package
import {Chart, registerables, ChartDataset, ChartOptions } from 'chart.js';
Chart.register(...registerables);  
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _service: HomeServicesService) {}

  ngOnInit(): void {
  }

}
