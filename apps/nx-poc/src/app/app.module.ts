import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UiModule } from '../../../../libs/ui/src/lib/ui.module';
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
    UiModule,
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
