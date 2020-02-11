import { Component, OnInit } from '@angular/core';

// Constant
import { appPath } from '../const/app-path.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  path = appPath;

  constructor() { }

  ngOnInit() {
  }

}
