import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
Injectable({
    providedIn: 'root'
})
export class CounterCanActivate implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // return true;
        if (!localStorage.getItem('currentUser')) {
            alert('Kindly Login to see counter functions');
            return false;
          } else {
            // this.router.navigateByUrl('/counter');
            return true;
          }
    }
}