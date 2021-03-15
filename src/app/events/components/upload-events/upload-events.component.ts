import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventService } from "../../services/event.service";

@Component({
  selector: 'app-upload-events',
  templateUrl: './upload-events.component.html',
  styleUrls: ['./upload-events.component.css']
})
export class UploadEventsComponent implements OnInit {

  alert: boolean = false;

  uploadEvent = new FormGroup({
    name: new FormControl(''),
    topic: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    place: new FormControl(''),
    contactPerson: new FormControl(''),
    mobile: new FormControl('')

  })
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }
  createEvent() {
    /* console.log(this.uploadEvent.value); */
    this.eventService.addEvent(this.uploadEvent.value)
    .subscribe(
      (result) => {
        this.alert = true;
        this.uploadEvent.reset({});
        console.log("Get Data From Service",result);
      })
  }

  closeAlert() {
  this.alert = false;
  }
  
}
