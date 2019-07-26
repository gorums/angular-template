import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TokenInterceptor } from './core/api/interceptor';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './modules/user/user.module';
  import { CountryModule } from './modules/country/country.module';
  import { RoleModule } from './modules/role/role.module';
  
import { HomeComponent } from './modules/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    CoreModule,
    SharedModule,

    UserModule,
      CountryModule,
      RoleModule,
      AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
