import { Component, OnInit } from '@angular/core';
import { DesignersService } from '../../services/designers.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  moduleId: module.id,
  selector: 'designers',
  templateUrl: 'designers.component.html',
  styleUrls: ['designers.component.css']
})
export class DesignersComponent implements OnInit {
  designers: any;
  isLoading = false;
  public options = {
      position: ["top","right"]
    };
  constructor(private designersService: DesignersService, private notificationsService: NotificationsService) { }

  ngOnInit() { 
    this.isLoading = true;
    this.designersService.getDesigners()
    .subscribe(designers => {
      this.designers = designers;
      this.designersService.designers = designers;
      this.isLoading = false;
      console.log(this.designers);
    }, error => {
      this.isLoading = false;
      this.notificationsService.error('Įvyko klaida', 'Nepavyko gauti dizainerių informacijos', {timeOut: 3000, showProgressBar: false})
    });

  }
}