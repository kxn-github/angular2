import { Component, OnInit } from '@angular/core';
import {HEROES} from '../mock-data';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  demodata = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

}
