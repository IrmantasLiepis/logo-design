import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  moduleId: module.id,
  selector: 'read-message',
  templateUrl: 'read-message.component.html',
  styleUrls: ['read-message.component.css']
})
export class ReadMessageComponent implements OnInit {
  messageId: number;
  userId: string;
  message: any;
  isLoading = false;
  public options = {
      position: ["top","right"]
    };
  constructor(private route: ActivatedRoute, 
              private apiService: ApiService, 
              private router: Router,
              private notificationsService: NotificationsService) { }

  ngOnInit() { 
    this.isLoading = true;
    this.userId = sessionStorage.getItem('userId');
    this.route.params.subscribe((params: Params) => {
    this.messageId = params['messageId']
    })
    this.apiService.getMessages(this.userId)
      .subscribe(messages => {
        for(let i=0; i<messages.length; i++) {
          if(messages[i].messageId == this.messageId) {
            this.message = messages[i];
          }
        }
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
        this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });
  }

  reply() {
    this.router.navigate(['/profilis', 'pastas', 'rasyti-laiska', this.message.sender]);
  }

  deleteMessage() {
    this.isLoading = true;
    this.apiService.deleteMessage(this.messageId)
      .subscribe(res => {
        this.isLoading = false;
        this.notificationsService.info('Ištrinta', 'Žinutė ištrinta', {timeOut: 3000, showProgressBar: false})
        this.router.navigate(['/profilis', 'pastas']);
      }, error => {
        this.isLoading = false;
        this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });
  }

  goBack() {
    this.router.navigate(['/profilis', 'pastas']);
  }

}