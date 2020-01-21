import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {NotificationService} from "../../service/notification.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    users: any = {};

    constructor(private userService: UserService,
                private notify: NotificationService,
                private router: Router) {
    }

    ngOnInit() {
    }

    onLogin() {
        this.userService.userLogin(this.users)
            .subscribe((res) => {
                console.log('res', res);
                if (res) {
                    this.notify.showSuccess('Login Successfully..!');
                    localStorage.setItem('token', res.tokens.authToken);
                    localStorage.setItem('email', res.user.email);
                    this.router.navigate(['/dashboard']);
                }
            }, error => {
                this.notify.showError(error.message);
                console.log('error', error);
            });
    }

    onSignUp() {
        this.router.navigate(['/signup']);
    }
}
