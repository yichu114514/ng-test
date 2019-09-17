import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  // {path:"", redirectTo:'table', pathMatch:'full'}, // 首页重定向
  {path:'hero',component:HeroComponent},  //path不要用分割线
  {path:'user',component:UserComponent}  //path不要用分割线
];

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    UserComponent
  ],
  imports: [
    RouterModule.forRoot(routes),//路由实现页面嵌套
    BrowserModule,
    AppRoutingModule,
    FormsModule   ,
  ],
  exports: [RouterModule],//导出页面
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
