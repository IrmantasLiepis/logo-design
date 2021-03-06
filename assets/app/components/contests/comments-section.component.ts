import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Contest } from '../../models/contest';
import { ContestsService } from '../../services/contests.service';
import { ErrorService } from '../../errors/index';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import * as CryptoJS from 'crypto-js';

@Component({
  moduleId: module.id,
  selector: 'comments-section',
  templateUrl: 'comments-section.component.html',
  styleUrls: ['comments-section.component.css']
})
export class CommentsSectionComponent implements OnInit {
   @Input() contest;
   comments: any[] = [];
   commentField: string;
   userId: string = '';
   user: any;
   contestId: string;
   isLoading = false;
   public options = {
      position: ["top","right"]
    };
   constructor(private contestsService: ContestsService,
              private errorService: ErrorService,
              private authService: AuthService,
              private apiService: ApiService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private notificationsService: NotificationsService,
              private router: Router) { 
                
              }
              

  ngOnInit() {
    this.isLoading = true;
    this.route.params.subscribe((params: Params) => {
    this.contestId = params['id'];
    });
    this.userId = sessionStorage.getItem('userId');
    this.apiService.getUserInfo(this.userId)
      .subscribe(user => {
        this.user = user;
      },
      error => {
        this.isLoading = false;

      });
    this.apiService.getComments(this.contestId)
      .subscribe(comments => {
        this.comments = comments;
        this.isLoading = false;
      },
      error => {
          this.isLoading = false;
      });
   }

  addComment(comment: string) {
    this.isLoading = true;
    if (!comment) {
      this.isLoading = false;
      this.notificationsService.info('Tuščias komentaras', 'Komentaro laukas negali būti tuščias', {timeOut: 3000, showProgressBar: true})
    } else {
    this.comments.push({comment: comment, commentAuthor: this.user});
    this.apiService.addComment({comment: comment, commentAuthor: this.user}, this.contestId)
      .subscribe(comments => {
        this.comments = comments;
        this.isLoading = false;
        this.notificationsService.success('Įkelta', 'Komentaras įkeltas', {timeOut: 3000, showProgressBar: false});
      }, 
      error => {
          //this.errorService.handleError(error);
          this.isLoading = false;
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });
    this.commentField = '';
    }
  }

  isDesigner() {
    return this.authService.isDesigner();
  }

  isContestPublisher(contestAuthorId: string) {
    var userId = sessionStorage.getItem('userId');
    return contestAuthorId == userId;
  }

  isClient() {
    return this.authService.isClient();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  isEmailConfirmed () {
     return sessionStorage.getItem('emailConfirmed') == CryptoJS.SHA3('true').toString();
  }

  goBack() {
    this.router.navigate(['/konkursai']);
  }

}