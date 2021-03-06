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
  sentMessages = [];
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
    this.userId = sessionStorage.getItem('userId');
    this.apiService.getMessages(this.userId)
      .subscribe(messages => {
        
        let filteredMessages = [];
        let filteredSentMessages = [];
        for (let i=0; i<messages.length; i++) {
          if(messages[i].status == 'Neperžiūrėta' || messages[i].status == 'Peržiūrėta') {
            filteredMessages.push(messages[i]);
          }
          if(messages[i].status == 'Išsiųsta') {
            filteredSentMessages.push(messages[i]);
          }
        }
        this.messages = filteredMessages;
        this.sentMessages = filteredSentMessages;
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
        this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });
  }

  viewMessage(messageId: number) {
    this.apiService.changeMessageStatus(this.userId, messageId)
      .subscribe(res => {
      }, error => {
      });
    this.router.navigate(['zinutes', messageId], {relativeTo: this.route})
  }

  goToSentMessages() {
    this.router.navigate(['/profilis', 'pastas', 'issiusta']);
  }

  goToNewMessage() {
    this.router.navigate(['/profilis', 'pastas', 'rasyti-laiska']);
  }

}