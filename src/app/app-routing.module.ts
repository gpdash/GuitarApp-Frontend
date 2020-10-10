import { AuthGuard } from './auth.guard';
import { ChordsComponent } from './chords/chords.component';
import { NavComponent } from './nav/nav.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path: '',redirectTo:'/chords',pathMatch:'full'},
    {path:"chords",component:ChordsComponent},
    {path:"tabs",component:TabsComponent},
    {path:"register",component:RegisterComponent},
    {path:"login",component:LoginComponent},
    {path:"posts",component:PostsComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
