import { MoviesService } from './Services/movies.service';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ChordsComponent } from './chords/chords.component';
import { FooterComponent } from './footer/footer.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { PostsComponent } from './posts/posts.component';
import { RegisterComponent } from './register/register.component';
import { PostsService } from './Services/posts.service';
import { TabsComponent } from './tabs/tabs.component';
import { TestNavComponent } from './test-nav/test-nav.component';
import { TileComponent } from './tile/tile.component';
// import { PostsService } from './services/posts.service';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TestNavComponent,
    GridViewComponent,
    TileComponent,
    TabsComponent,
    ChordsComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    HttpClientModule,
    MatIconModule,
    MatListModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatExpansionModule
  ],
  providers: [AuthService,PostsService,MoviesService,AuthGuard,
  {provide:HTTP_INTERCEPTORS,
  useClass:TokenInterceptorService,
  multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
