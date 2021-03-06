import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Contest } from '../../models/contest';
import { ContestsService } from '../../services/contests.service';
import { DesignersService } from '../../services/designers.service';
import { ErrorService } from '../../errors/index';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import 'moment/min/locales';
import { NotificationsService } from 'angular2-notifications';

declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'designer-details',
  templateUrl: 'designer-details.component.html',
  styleUrls: ['designer-details.component.css']
})
export class DesignerDetailsComponent implements OnInit {
  isLoading = false;
  designerId: string;
  designer: any;
  public options = {
      position: ["top","right"]
    };
  constructor(private route: ActivatedRoute,
              private router: Router,
              private contestsService: ContestsService,
              private designersService: DesignersService,
              private errorService: ErrorService,
              private authService: AuthService,
              private apiService: ApiService,
              private notificationsService: NotificationsService) { }

  ngOnInit() { 
    this.isLoading = true;
    this.route.params.subscribe((params: Params) => {
      this.designerId = params['id'];
    });
    this.designersService.getIndividualDesigner(this.designerId)
      .subscribe(designer => {
        this.designer = designer[0];
        this.isLoading = false;
      }, 
      error => {
          this.isLoading = false;
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });
  }

  ngAfterViewInit() {
      jQuery(document).ready(function() {
        jQuery(".fancybox").fancybox({
        
        });
    });
  }

  sendPrivateMessage(nickname) {
        this.router.navigate(['/profilis', 'pastas', 'rasyti-laiska', nickname]);
    }


}