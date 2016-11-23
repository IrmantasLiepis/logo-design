import { Component, OnInit, ViewChild, ElementRef, NgZone, ChangeDetectorRef } from '@angular/core';
import { Contest } from '../../models/contest';
import { ContestsService } from '../../services/contests.service';
import { ErrorService } from '../../errors/index';
import { NotificationsService } from 'angular2-notifications';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  //contest: Contest = null;
  contests: any = [];
  isLoading = false;
  status = "Aktyvus";
  firstTabActive = true;
  secondTabActive = false;
  @ViewChild('search') searchElRef: ElementRef;
  public options = {
      position: ["top","right"]
    };
  
  constructor(private contestsService: ContestsService, 
              private errorService: ErrorService,
              private notificationsService: NotificationsService,
              private ngzone: NgZone,
              private cdRef: ChangeDetectorRef) { }

  ngOnInit() { 
    this.isLoading = true;
    this.contestsService.getAllContests()
    .subscribe(contests => {
      this.contests = contests;
      this.contestsService.contests = contests;
      this.isLoading = false;
      console.log(this.contests);
    }, error => {
      this.isLoading = false;
      this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
    });
  }

  ngAfterViewInit() {
    this.ngzone.runOutsideAngular(() => {
      Observable.fromEvent(this.searchElRef.nativeElement, 'keyup')
      .debounceTime(1000)
      .distinctUntilChanged() // TODO test if this works. Update: not working. Needs a custom callback to check for whitespace
      .subscribe(event => {
        this.contestsService.getFilteredContests(event.target.value) //searchString
        .subscribe(contests => {
          console.log('Filter layer 1 contests');
          console.log(contests);
          var unfilteredContests = contests;
          var filteredContests = unfilteredContests.filter((item: any) => item.status == this.status);
          console.log('Filter layer 2 contests');
          console.log(filteredContests);
          this.contests = filteredContests;
          this.cdRef.detectChanges();
        }, error => {
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
        });
      });
    });
  }

  selectFirstTab() {
    this.firstTabActive = true;
    this.secondTabActive = false;
    if (this.status == "Aktyvus") {
      //do nothing
    } else {
    this.status = "Aktyvus";
    this.isLoading = true;
    this.contestsService.getFilteredContests("") // = get all
        .subscribe(contests => {
          console.log('Filter layer 1 contests');
          console.log(contests);
          var unfilteredContests = contests;
          var filteredContests = unfilteredContests.filter((item: any) => item.status == this.status);
          console.log('Filter layer 2 contests');
          console.log(filteredContests);
          this.contests = filteredContests;
          this.cdRef.detectChanges();
          this.isLoading = false;
        }, error => {
          this.isLoading = false;
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
        });
    }
  }

  selectSecondTab() {
    this.firstTabActive = false;
    this.secondTabActive = true;
    if (this.status == "Užbaigtas") {
      //do nothing
    } else {
    this.status = "Užbaigtas";
    this.isLoading = true;
    this.contestsService.getFilteredContests("") // = get all
        .subscribe(contests => {
          console.log('Filter layer 1 contests');
          console.log(contests);
          var unfilteredContests = contests;
          var filteredContests = unfilteredContests.filter((item: any) => item.status == this.status);
          console.log('Filter layer 2 contests');
          console.log(filteredContests);
          this.contests = filteredContests;
          this.cdRef.detectChanges();
          this.isLoading = false;
        }, error => {
          this.isLoading = false;
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
        });
    }
  }

}