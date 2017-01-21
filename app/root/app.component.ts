import { Component } from '@angular/core';

@Component({
  moduleId: module.id, // This allows relative paths so templateUrl will work
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})

export class AppComponent {

}