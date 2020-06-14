import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = '成熟框架应用';
  isShow: boolean = true;
  Show(): void {
    this.isShow = false;
  }
}
