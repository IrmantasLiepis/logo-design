import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ContestsService } from '../../services/contests.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  moduleId: module.id,
  selector: 'mail-create-for-user',
  templateUrl: 'mail-create-for-user.component.html',
  styleUrls: ['mail-create-for-user.component.css']
})
export class MailCreateForUserComponent implements OnInit {
  nickname: any;
  message: string;
  //searchedUsers = [];
  results:any;
  userId: string;
  sender: any;
  topic: string;
  isLoading: boolean = false;
  public options = {
      position: ["top","right"]
    };
  constructor(private route: ActivatedRoute, 
              private apiService: ApiService,
              private notificationsService: NotificationsService,
              private router: Router,
              private contestsService: ContestsService) { }

  ngOnInit() { 
    if (this.contestsService.mailTopic) {
      this.topic = this.contestsService.mailTopic;
    }
    this.userId = sessionStorage.getItem('userId');
    this.route.params.subscribe((params: Params) => {
    this.nickname = params['nickname'];
    });
    this.apiService.getUserInfo(this.userId)
      .subscribe(res => {
        this.sender = res;
      }, error => {
        this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });
  }

  sendMessage() {
    this.isLoading = true;
    if (!this.topic || !this.message) {
      this.isLoading = false;
      this.notificationsService.error('Klaida !', 'Įveskite temą ir žinutę', {timeOut: 3000, showProgressBar: false})
    } else {
    var recipient;
    if (typeof this.nickname === 'string') {
      recipient = this.nickname;
    } else {
      recipient = this.nickname.nickName;
    }
    this.apiService.sendMessage(recipient, this.topic, this.message, this.sender.nickName)
      .subscribe(res => {
        this.notificationsService.success('Išsiųsta', 'Žinutė išsiųsta sėkmingai', {timeOut: 3000, showProgressBar: false})
        this.isLoading = false;
        this.router.navigate(['/profilis', 'pastas']);
      }, error => {
        this.isLoading = false;
        this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });
    }
  }

  search(event) {
    this.apiService.searchUsers(event.query)
      .subscribe(res => {
        this.results = res;
      }, error => {
        this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });
  }
  onSelect(obj) {
    //this.nickname = obj.nickName;
  }

  goBack() {
    this.router.navigate(['/profilis', 'pastas']);
  }

  goToReceivedMessages() {
    this.router.navigate(['/profilis', 'pastas']);
  }

  goToSentMessages() {
    this.router.navigate(['/profilis', 'pastas', 'issiusta']);
  }
  
}