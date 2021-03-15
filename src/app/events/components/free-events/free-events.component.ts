import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { AuthService } from 'src/app/users/services/auth.service';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-free-events',
  templateUrl: './free-events.component.html',
  styleUrls: ['./free-events.component.css'],
})
export class FreeEventsComponent implements OnInit {
  

  data: Array<any>;

  totalRecords: number;

  page: number = 1;
  filterTerm : any;

 /*  searchname: any; */
  public collection: any;

  constructor(
    private eventService: EventService,
    private authService: AuthService
  ) {
    this.data = new Array<any>();
  }

  ngOnInit(): void {
    

    this.eventService.getEventList().subscribe((result) => {
      this.collection = result;
      console.log(this.collection);
    });

    this.getUsers();
  }

  search() {
    if(this.filterTerm == "") {
      this.ngOnInit();
    } else {
      this.collection = this.collection.filter((res) => {
        return res.filterTerm.toLocaleLowerCase().match(this.filterTerm.toLocaleLowerCase());
      });
    }
  }

  getUsers() {
    this.eventService.getEventList().subscribe((data) => {
      console.log(data);

      this.data = data.results;

      this.totalRecords = data.results.length;

      console.log(this.page);
    });
  }

  key:string = 'id';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
