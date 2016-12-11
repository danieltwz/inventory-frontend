import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  yourName = 'pr0';
  title = 'noob la app works!';
  noOfClicks = 0;

  keepTrack(isClicked: boolean) {
    if (isClicked){
      this.noOfClicks++;
    }

    console.log('total clicks: ', this.noOfClicks);
  }
}
