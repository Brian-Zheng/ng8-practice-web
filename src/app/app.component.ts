import { Component } from '@angular/core';

// Constant
import { appPath } from './const/app-path.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  path = appPath;
}
