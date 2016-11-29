import { Component, OnInit } from '@angular/core';
import { Contest } from '../../../../models/contest';
import { ContestsService } from '../../../../services/contests.service';
import { AuthService } from '../../../../services/auth.service';
import { ErrorService } from '../../../../errors/index';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  moduleId: module.id,
  templateUrl: 'wordpress-theme.component.html',
  styleUrls: ['wordpress-theme.component.css']
})
export class WordpressThemeComponent implements OnInit {
  contest: Object = {};
  isLoading = false;
  public options = {
      position: ["top","right"]
    };

  constructor(private router: Router,
              private contestsService: ContestsService,
              private notificationsService: NotificationsService,
              private authService: AuthService) { }

  ngOnInit() { 
    window.scrollTo(0,0);
    this.contest.category = "WordPress tema";
  }

  backToList() {
    this.router.navigate(['/paskelbti-konkursa']);
  }

  logErrors(errors) {
    console.log(errors);
  }

  addContest(value) {
    this.isLoading = true;
    console.log(value);
    this.contestsService.addContest(value)
      .subscribe(contest => {
        console.log('contest added');
        console.log(contest);
        this.isLoading = false;
        this.notificationsService.success('Paskelbta', 'Konkursas paskelbtas', {timeOut: 3000, showProgressBar: false})
        this.router.navigate(['/']);
      }, error => {
        this.isLoading = false;
        this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });
  }
  isClient() {
    return this.authService.isClient();
  }

  isDesigner() {
    return this.authService.isDesigner();
  }
}