import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {


  listPhone = ["Ip 11","Samsung S22","Nokia N97"];
  constructor() { }

  ngOnInit(): void {
  }

}
