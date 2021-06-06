import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { HttpClientModule } from "@angular/common/http";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserlistComponent,
    UserdetailComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,Ng2SearchPipeModule,NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
