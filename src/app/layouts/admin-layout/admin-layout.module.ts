import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { exportComponent } from "../../pages/export/export.component";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { FilterComponent } from "../../pages/filter/filter.component";
import { searchComponent } from "../../pages/Search/search.component";
import { ManualComponent } from "../../pages/Manual/Manual.component";
import { ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from "../../pages/map/map.component";
import { UserComponent } from "../../pages/user/user.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    FilterComponent,
    exportComponent,
    searchComponent,
    ManualComponent,
    UserComponent,
    MapComponent,
  ]
})
export class AdminLayoutModule {}
