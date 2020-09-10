import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import {AuthenticationService} from './authentication.service'
import {AuthHomeGuard} from './auth-home.guard';
import {AuthINGuard} from './auth-in.guard';
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";


import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
  providers: [AuthenticationService,AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
