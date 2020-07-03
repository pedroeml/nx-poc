import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRestService } from './service/app-rest.service';
import { AppService } from './service/app.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    AppRestService,
    AppService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
