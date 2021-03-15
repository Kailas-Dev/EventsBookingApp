import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreeEventsComponent } from './components/free-events/free-events.component';
import { RegisterEventsComponent } from './components/register-events/register-events.component';
import { UploadEventsComponent } from './components/upload-events/upload-events.component';
import { EventsComponent } from './events.component';
import { AuthGuard } from "../users/guards/auth.guard";

const routes: Routes = [
  { path: '', component: EventsComponent },
  { path:'free-events', component:FreeEventsComponent , canActivate: [AuthGuard]},
 
  { path:'register-events/:eventNames', component:RegisterEventsComponent },
  
  { path:'upload-events', component:UploadEventsComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
