import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ToastrModule} from "ngx-toastr";

import {SidebarModule} from './sidebar/sidebar.module';
import {FooterModule} from './shared/footer/footer.module';
import {NavbarModule} from './shared/navbar/navbar.module';

import {AppComponent} from './app.component';
import {AppRoutes} from './app.routing';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./_helpers/jwt.interceptor";


@NgModule({
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        LoginComponent,
        SignupComponent
    ],
    imports: [
        BrowserAnimationsModule,
        RouterModule.forRoot(AppRoutes),
        SidebarModule,
        NavbarModule,
        ToastrModule.forRoot(),
        FooterModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
