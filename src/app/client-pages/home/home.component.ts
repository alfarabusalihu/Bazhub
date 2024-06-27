import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
   productInterface:boolean=true;
  private routerSubscription: Subscription|null=null;
  
  constructor(private router: Router) 
{ }

ngOnInit() {
  this.routerSubscription = this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      // this.productInterface = this.router.url === '';
    }
  });
}

ngOnDestroy() {
  if (this.routerSubscription) {
    this.routerSubscription.unsubscribe();
  }
}

}
