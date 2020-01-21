import {Component, OnInit} from '@angular/core';
import {NotificationService} from "../../service/notification.service";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    answer: any = {};
    feedBack: any = 0;
    email;

    constructor(private notify: NotificationService,
                private userService: UserService,
                private router: Router,) {
    }

    ngOnInit() {
        const accessToken = localStorage.getItem('token');
        this.email = localStorage.getItem('email');
        console.log('accessToken', accessToken);
        if (!accessToken) {
            this.router.navigate(['/login']);
        }
        this.getTotal();
    }

    getTotal() {
        this.userService.getuserFeedbackCount()
            .subscribe((data) => {
                this.feedBack = data.totalCount;
            }, (err) => {
                console.log('err', err);
            })
    }

    onSave() {
        let data = {
            answers: {
                email: this.email,
            }
        };
        this.userService.userFeedback(data)
            .subscribe((res) => {
                console.log('res', res);
                this.notify.showSuccess('Feedback Submit Successfully');
                this.feedBack ++;
            }, error => {
                this.notify.showError(error.message);
                console.log('error', error);
            });

    }
}
