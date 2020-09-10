import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { MapComponent } from "../../pages/map/map.component";
import { UserComponent } from "../../pages/user/user.component";
import { FilterComponent } from "../../pages/filter/filter.component";
import { exportComponent } from "../../pages/export/export.component";
import { searchComponent } from "../../pages/Search/search.component";
import { ManualComponent } from "../../pages/Manual/Manual.component";


// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "filter", component: FilterComponent },
  { path: "export", component: exportComponent },
  { path: "search", component: searchComponent },
  { path: "maps", component: MapComponent },
  { path: "user", component: UserComponent },
  { path: "manual", component: ManualComponent },

  // { path: "rtl", component: RtlComponent }
];
