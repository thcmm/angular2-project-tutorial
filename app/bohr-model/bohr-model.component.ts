import { Component } from '@angular/core';

import { BohrModelService } from '../services/bohr-model.service';

@Component({
  moduleId: module.id, // This allows relative paths so templateUrl will work
  selector: 'bohr-model',
  styleUrls: ['bohr-model.component.scss'],
  templateUrl: 'bohr-model.component.html',
  providers: [BohrModelService]
})

export class BohrModelComponent {

  models: Model[];

  constructor(private modelService: BohrModelService) {
    // modelService : has to be passed in to be available

    // This returns an observable so we have to subscribe to it
    //this.models = this.modelService.getModels();
  }

  ngOnInit() {
    // for(let i = 0; i < 15; i++) {
    this.models = this.modelService.getModels(88);
    console.log(this.models, "MyModel");
    // }
  }

  trackByFn(num) {
    return num++;
  }
}

interface Model {
  containerId: string,
  numElectrons: number,
  nucleusRadius: number,
  nucleusColor: string
  electronRadius: number
  electronColor: string,
  orbitalSpacing: number,
  orbitalWidth: number,
  orbitalColor: string,
  idNumber: number,
  animationTime: number,
  rotateConfig: { speed: number, clockwise: boolean },
  orbitalRotationConfig: {
    pattern: {
      alternating: boolean,
      clockwise: boolean,
      preset: string,
    }
  },
  symbolOffset: number,
  drawSymbol: boolean
}

// var myAtom = new Atom({
//   containerId: '#bohr-model-container',
//   numElectrons: 4, // An integer between 1 and 118
//   nucleusRadius: 15, // If not supplied will be 1/12 of the containers width
//   nucleusColor: 'rgba(124,240,10,0.5)', // Hex, string or rbga
//   electronRadius: 3, // Default value is 3
//   electronColor: 'blue', // See nucleusColor
//   orbitalSpacing: 10, // If not specified will be a 1/3rd of the nucleusRadius
//   orbitalWidth: 0.1, // width of orbital paths, default is 0.1
//   orbitalColor: 'black', // see electronColor
//   idNumber: 1, // Required int to provide unique Atoms
//   animationTime: 1300, // Time in milliseconds for initial electron animation
//   rotateConfig: {speed: 500, clockwise: true}, // Rotates entire Atom with given params
//   orbitalRotationConfig: { // Invokes orbital rotations at initialization
//     pattern: {
//       alternating: false, // Alternate orbital direction
//       clockwise: false, // Direction for all orbitals
//       preset: 'cubedPositive', // String to set pattern (see Features section)
//     }
//   },
//   symbolOffset: 8, // When modifying nucleus radius this may need adjusting
//   drawSymbol: true // Render atomic symbol or not
// });