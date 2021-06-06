import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { LoginComponent } from './login/login.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [ 
    HomeComponent
  ],
  imports: [RouterModule.forRoot([
      { path: '', redirectTo:'/registration',pathMatch:'full' },
      { path: 'home', component: HomeComponent },
      { path: 'registration', component: LoginComponent },
      { path: 'userlist', component: UserlistComponent },
      { path: 'userdeatil/:id', component: UserdetailComponent },
      { path: 'carousel', component: CarouselComponent },

  ])
],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}

