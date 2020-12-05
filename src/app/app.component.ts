import { Component } from '@angular/core';
import{ Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dawar Insurance';
  
  constructor(private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
  
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.router.navigated = true;
        window.scrollTo(0,0);
    }
    });

    
   }
}
