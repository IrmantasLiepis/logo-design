import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  moduleId: module.id,
  selector: 'mail-list',
  templateUrl: 'mail-list.component.html',
  styleUrls: ['mail-list.component.css']
})
export class MailListComponent implements OnInit {
  messages = [];
  userId: string;
  isLoading: boolean = false;
  public options = {
      position: ["top","right"]
    };
  constructor(private apiService: ApiService, 
              private router: Router, 
              private route: ActivatedRoute,
              private notificationsService: NotificationsService) { }

  ngOnInit() { 
    this.isLoading = true;
    this.userId = localStorage.getItem('userId');
    this.apiService.getMessages(this.userId)
      .subscribe(messages => {
        
        let filteredMessages = [];
        for (let i=0; i<messages.length; i++) {
          if(messages[i].status == 'Neperžiūrėta' || messages[i].status == 'Peržiūrėta') {
            filteredMessages.push(messages[i]);
          }
        }
        this.messages = filteredMessages;
        this.isLoading = false;
        console.log('THIS.MESSAGES');
        console.log(this.messages);
      }, error => {
        this.isLoading = false;
        this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });
  }

  viewMessage(messageId: number) {
    this.apiService.changeMessageStatus(this.userId, messageId)
      .subscribe(res => {
        console.log(res);
      }, error => {
        console.error(error);
      });
    this.router.navigate(['zinutes', messageId], {relativeTo: this.route})
  }
}