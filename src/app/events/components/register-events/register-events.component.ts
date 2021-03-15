import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-register-events',
  templateUrl: './register-events.component.html',
  styleUrls: ['./register-events.component.css']
})
export class RegisterEventsComponent implements OnInit {

  public collections:any;

  alert:boolean = false;

  

 

  constructor(private eventService: EventService,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router
    ) { }

    public eventName: string;
    public registersEvent;
    public eventListName;

  ngOnInit(): void {

    this.eventService.getEventList()
    .subscribe((data) =>{
      this.eventListName = data;
    

    })
    
    this.eventService.getRegEventList()
    .subscribe((result) => {
      this.collections = result;
      console.log(this.collections);
    })

    let eventName = this.activatedRoute.snapshot.paramMap.get('eventNames');
  
    
    this.registersEvent = this.fb.group({
      userName: ['', [Validators.required,Validators.minLength(5) ]],
      address: [''],
      adharNumber: ['',[Validators.required, Validators.minLength(12)]],
      mobile: [''],
      eventName: [eventName]
    });


    
  }
  createEvent() {
    console.log(this.registersEvent.value);
    
    this.eventService.registersEvent(this.registersEvent.value)
    .subscribe((result) => {
     // this.alert = true;
     let updatedEventName = this.eventListName.map((eventInfo) => {
       if(eventInfo.name == this.registersEvent.value.eventName) {
          eventInfo.isEventDisabled = true;
        }
       return eventInfo;
       
     })
     
    

     console.log(updatedEventName);

     console.log("this.registersEvent.value");
      console.log(this.registersEvent.value);
      alert(`${this.registersEvent.value.eventName} Registered Succesfully`);
      this.registersEvent.reset();
     
      
      
      this.router.navigate(['/events/free-events']);
    })



  }

 

}
