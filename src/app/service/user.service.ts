import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    api = environment.api;

    constructor(private http: HttpClient) {
    }

    userLogin(data) {
        return this.http.post<any>(this.api + '/user/login', data);
    }

    userSignUp(data) {
        return this.http.post<any>(this.api + '/user', data);
    }

    userFeedback(data) {
        return this.http.post<any>(this.api + '/setanswer', data);
    }
    getuserFeedbackCount() {
        return this.http.get<any>(this.api + '/getTotal');
    }
}
