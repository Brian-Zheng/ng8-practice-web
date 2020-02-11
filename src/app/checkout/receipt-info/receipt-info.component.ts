import { Component, OnInit } from '@angular/core';

// Constant
import { appPath } from '../../const/app-path.const';

// Enum
import { SendType } from './send-type.enum';

@Component({
  selector: 'app-receipt-info',
  templateUrl: './receipt-info.component.html',
  styleUrls: ['./receipt-info.component.css']
})
export class ReceiptInfoComponent implements OnInit {

  path = appPath;

  sendType = SendType;

  selectedType = SendType.EMAIL;

  constructor() { }

  ngOnInit() {
  }

  switchType(type: number): void {
    this.selectedType = type;
  }


  didSelected(type: number): boolean {
    return this.selectedType === type;
  }
}
