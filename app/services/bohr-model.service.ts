// Ability to inject this service as a dependency
import { Injectable } from '@angular/core';

// Use of http calls
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class BohrModelService {

  constructor(private http: Http) {
    console.log("PostsService Initialized...");
  }

  getModels(electrons) {
    return [
      {
        containerId: '#bohr-model-container' + electrons,
        numElectrons: 2,
        nucleusRadius: 15, // If not supplied will be 1/12 of the containers width
        nucleusColor: 'rgba(124,240,10,0.5)', // Hex, string or rbga
        electronRadius: 3, // Default value is 3
        electronColor: 'blue', // See nucleusColor
        orbitalSpacing: 10, // If not specified will be a 1/3rd of the nucleusRadius
        orbitalWidth: 5, // width of orbital paths, default is 0.1
        orbitalColor: 'black', // see electronColor
        idNumber: 1, // Required int to provide unique Atoms
        animationTime: 1300, // Time in milliseconds for initial electron animation
        rotateConfig: { speed: 500, clockwise: true }, // Rotates entire Atom with given params
        orbitalRotationConfig: { // Invokes orbital rotations at initialization
          pattern: {
            alternating: false, // Alternate orbital direction
            clockwise: false, // Direction for all orbitals
            preset: 'cubedPositive', // String to set pattern (see Features section)
          }
        },
        symbolOffset: 8, // When modifying nucleus radius this may need adjusting
        drawSymbol: true // Render atomic symbol or not
      }
    ];
  }
}