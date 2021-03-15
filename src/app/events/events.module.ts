import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { FreeEventsComponent } from './components/free-events/free-events.component';
import { RegisterEventsComponent } from './components/register-events/register-events.component';
import { UploadEventsComponent } from './components/upload-events/upload-events.component';





@NgModule({
  declarations: [EventsComponent, FreeEventsComponent, RegisterEventsComponent, UploadEventsComponent ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  
  ]
})
export class EventsModule { }
