import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateAgoPipe } from './pipes/date-ago.pipe'
import { TimeAgoExtendsPipe } from './pipes/time-ago.pipe';;
import { MessageTimePipe } from './pipes/message-time.pipe';
import { MayMinAlternadaPipe } from './pipes/may-min-alternada.pipe';
import { SqtrValuePipe } from './pipes/sqtr-value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DateAgoPipe,
    TimeAgoExtendsPipe,
    MessageTimePipe,
    MayMinAlternadaPipe,
    SqtrValuePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
