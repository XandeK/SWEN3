import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoyaltyProductsListComponent } from './loyalty-products-list/loyalty-products-list.component';
import { NewProductLoyaltyComponent } from './new-product-loyalty/new-product-loyalty.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RegisterComponent } from './register/register.component';
import { RoomRateComponent } from './room-rate/room-rate.component';
import { NewRoomRateComponent } from './new-room-rate/new-room-rate.component';
import { ReportComponent } from './report/report.component';
import { HousekeepingComponent } from './housekeeping/housekeeping.component';
import { DirtyRoomComponent } from './dirty-room/dirty-room.component';
import { AdminAccountComponent } from './admin-account/admin-account.component';
import { LoginComponent } from './login/login.component';
import { GuestComponent } from './guest/guest.component';
import { CheckInComponent } from './check-in/check-in.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { NewStaffComponent } from './new-staff/new-staff.component';
import { HousekeepingReportComponent } from './housekeeping-report/housekeeping-report.component';
import { NewRoomReportComponent } from './new-room-report/new-room-report.component';
import { NewHousekeepingReportComponent } from './new-housekeeping-report/new-housekeeping-report.component';
import { NewDirtyRoomComponent } from './new-dirty-room/new-dirty-room.component';


@NgModule({
  declarations: [
    AppComponent,
    LoyaltyProductsListComponent,
    NewProductLoyaltyComponent,
    ProductDetailComponent,
    SidenavComponent,
    RegisterComponent,
    RoomRateComponent,
    NewRoomRateComponent,
    ReportComponent,
    HousekeepingComponent,
    DirtyRoomComponent,
    AdminAccountComponent,
    LoginComponent,
    GuestComponent,
    CheckInComponent,
    UpdateproductComponent,
    NewStaffComponent,
    HousekeepingReportComponent,
    NewRoomReportComponent,
    NewHousekeepingReportComponent,
    NewDirtyRoomComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
