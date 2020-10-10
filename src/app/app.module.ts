import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule,HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import {AuthenticationService} from './authentication.service'
import {AuthHomeGuard} from './auth-home.guard';
import {AuthINGuard} from './auth-in.guard';
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";

import { JwtInterceptor } from './_helpers/jwt.interceptor';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    ComponentsModule,
    NgbModule,
    RouterModule.forRoot([
      {
        path: "auth",
        component: AuthComponent,
        canActivate:[AuthINGuard]
       
      },
        
      {
        path: "",
        component: AdminLayoutComponent,
        canActivate:[AuthHomeGuard]
        ,
        children: [
          {
            path: "",
            loadChildren:
              "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
          },
          
         
        ]
      },
      ]),
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthComponent],
  providers: [AuthenticationService,AppComponent,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
