import { Component, OnInit, Input} from '@angular/core';
import { ContestsService } from '../../services/contests.service';
import { ErrorService } from '../../errors/index';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  moduleId: module.id,
  selector: 'submition-details',
  templateUrl: 'submition-details.component.html',
  styleUrls: ['submition-details.component.css']
})
export class SubmitionDetailsComponent implements OnInit {
    @Input() contestId: string;
    @Input() contest: any;
    @Input() submition: any;
    cssClass: string = '';
    submitions: any[] = [];
    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;
    confirmationVisible: boolean = false;
    isLoading = false;
    public options = {
      position: ["top","right"]
    };
    
  constructor(private apiService: ApiService, 
              private errorService: ErrorService,
              private contestsService: ContestsService, 
              private route: ActivatedRoute,
              private router: Router,
              private notificationsService: NotificationsService) { }

  ngOnInit() { 
      this.isLoading = true;
    // this.route.params.subscribe((params: Params) => {
    //   this.contestId = params['id'];
    //   console.log('ngOnInit params id (contestId)');
    //   console.log(this.contestId);
    // });
    this.apiService.getContestSubmitions(this.contestId) //CURRENT FOCUS
        .subscribe(submitions => {
            console.log('submitions from apiservice in submition-details');
            console.log(submitions);
            this.submitions = submitions;
            this.isLoading = false;
            console.log(this.submitions);
        },
        error => {
          //this.errorService.handleError(error);
          this.isLoading = false;
          this.notificationsService.error('Įvyko klaida', 'Nepavyko gauti konkurso dizainų', {timeOut: 3000, showProgressBar: false})
      });
    //   console.log('ngOnInit submition details this.submitionS');
    //   console.log(this.submitions);
    //   this.submition = this.submitions.filter((sub) => {
    //     console.log('sub.submitionUrl');
    //     console.log(sub.submitionUrl);
    //     console.log('this.submitionUrl');
    //     console.log(this.submitionUrl);
    //     return sub.submitionUrl == this.submitionUrl
    //   });
    //   console.log('ngOnInit submition details this.submition');
    //   console.log(this.submition);
  }

    closed() {
        console.log('Modal closed');
    }

    dismissed() {
        console.log('Modal dismissed');
        this.confirmationVisible = false;
    }

    opened() {
        console.log('Modal opened');
    }

    isContestPublisher(contestAuthorId: string) {
        var userId = localStorage.getItem('userId');
        return contestAuthorId == userId;
    }

    onRating(obj: any) {
        this.isLoading = true;
        var submition = this.submitions.filter((item: any) => item.submitionId == obj.submitionId);
        console.log('onRating() submition after filter');
        console.log(submition);
        if (!!submition && submition.length == 1) {
            //this.submitions[0].submitionRating = obj.rating;
            submition[0].submitionRating = obj.rating;
            this.contestsService.updateSubmitionRating(this.contest, submition[0])
                .subscribe(data => {
                    console.log('Rating changed');
                    console.log(data);
                    this.isLoading = false;
                }, error => {
                    this.isLoading = false;
                    this.notificationsService.error('Įvyko klaida', 'Nepavyko pakeisti reitingo', {timeOut: 3000, showProgressBar: false})
                })
        }
    }

    selectWinner(contestIdName, submitionId) {
        this.isLoading = true;
        console.log('you win ' + contestIdName +', '+ submitionId);
        this.apiService.selectWinner(contestIdName, submitionId)
            .subscribe(data => {
                console.log(data);
                this.isLoading = false;
            }, error => {
                this.isLoading = false;
                this.notificationsService.error('Įvyko klaida', 'Nepavyko išrinkti nugalėtojo', {timeOut: 3000, showProgressBar: false})
            });
    }

}