import { Component, OnInit } from '@angular/core';

import { ElementService } from '../services/elements.service';

@Component({
  moduleId: module.id, // This allows relative paths so templateUrl will work
  selector: 'periodic-table',
  styleUrls: ['periodic-table.component.scss'],
  templateUrl: 'periodic-table.component.html',
  providers: [ElementService]
})

export class PeriodicTableComponent implements OnInit {
  name: string = 'hello';
  elements: Element[];

  constructor(private elementService: ElementService) { 
    // elementService : has to be passed in to be available

    // This returns an observable so we have to subscribe to it
    this.elements = this.elementService.getElements();      
  }

  ngOnInit() {
    this.elements = this.elementService.getElements();
    console.log(this.elements, "we're here");
  }

  handleClick(event: any) {
    console.log(event);
  }
  
  handleChange(value: string) {
    console.log(value);
    this.name = value;
  }
}

interface Element {
  atomicNumber: number,
  symbol: string,
  name: string,
  atomicMass: string,
  cpkHexColor: string,
  electronicConfiguration: string,
  electronegativity: number,
  atomicRadius: number,
  ionRadius: number,
  vanDelWaalsRadius: number,
  ionizationEnergy: number,
  electronAffinity: number,
  oxidationStates: string,
  standardState: string,
  bondingType: string,
  meltingPoint: number,
  boilingPoint: number,
  density: number,
  groupBlock: string,
  yearDiscovered: number
}

// 'use strict'

// document.addEventListener('DOMContentLoaded', () => {
//   adjustHeight();
//   window.addEventListener('resize', () => {
//     adjustHeight();
//   });
// });

// function adjustHeight() {
//   const elementWidth = document.getElementById('element_1').offsetWidth;
//   const elements = document.getElementsByClassName('row');
//   for (const row of elements) {
//     row.style.height = `${elementWidth}px`;
//   }
// }