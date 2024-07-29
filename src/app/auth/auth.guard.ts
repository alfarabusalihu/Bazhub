import { CanActivate, Router } from "@angular/router";
import { AuthenticationService } from "./authentication.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthenticationService, private router: Router) { }

    canActivate(): boolean {
        const user = this.authService.getAuthenticatedUser();

        if (user) return true
        else {
            this.router.navigate(['/sign-in']);
            return false
        }
    }

}