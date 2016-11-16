import { Component, OnInit } from '@angular/core';
import { ContestsService } from '../../services/contests.service';
import { AuthService } from '../../services/auth.service';
import { ErrorService } from '../../errors/index';
import { Contest } from '../../models/contest';
import { NotificationsService } from 'angular2-notifications';


@Component({
  moduleId: module.id,
  selector: 'my-contests',
  templateUrl: 'my-contests.component.html',
  styleUrls: ['my-contests.component.css']
})
export class MyContestsComponent implements OnInit {
  contests: any = [];
  contest: Contest = null;
  id: string = '';
  isLoading = false;
  public options = {
      position: ["top","right"]
    };
  constructor(private contestsService: ContestsService, 
              private errorService: ErrorService, 
              private authService: AuthService,
              private notificationsService: NotificationsService) { }

  ngOnInit() { 
    this.isLoading = true;
    this.id = localStorage.getItem('userId');
    this.contestsService.getIndividualContests(this.id)
    .subscribe(contests => {
      this.contests = contests;
      this.contestsService.contests = contests;
      this.isLoading = false;
      console.log(this.contests);
    }, error => {
      this.isLoading = false;
      this.notificationsService.error('Įvyko klaida', 'Nepavyko gauti konkursų informacijos', {timeOut: 3000, showProgressBar: false})
    });
  }

  editContest(contest: any) {
    this.contestsService.editContest(contest);
  }

  deleteContest(contest: any) {
    this.isLoading = true;
    this.contestsService.deleteContest(contest)
      .subscribe(data => {
        console.log(data);
        this.isLoading = false;
      },
      error => {
        //this.errorService.handleError(error);
        this.isLoading = false;
        this.notificationsService.error('Įvyko klaida', 'Nepavyko ištrinti konkurso', {timeOut: 3000, showProgressBar: false})
      })
  }

  onCancel() {
    this.contest = null;
  }

  belongsToUser(userId: string) {
    return localStorage.getItem('userId') == userId;
  }

}