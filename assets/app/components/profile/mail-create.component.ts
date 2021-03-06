import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  moduleId: module.id,
  selector: 'mail-create',
  templateUrl: 'mail-create.component.html',
  styleUrls: ['mail-create.component.css']
})
export class MailCreateComponent implements OnInit {
  nickname: any;
  message: string;
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
              private router: Router) { }

  ngOnInit() { 
    this.userId = sessionStorage.getItem('userId');
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
        this.router.navigate(['/profilis', 'pastas']);
        this.isLoading = false;
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