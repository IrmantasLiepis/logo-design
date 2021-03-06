import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import * as CryptoJS from 'crypto-js';

declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'profile-page',
  templateUrl: 'profile-page.component.html',
  styleUrls: ['profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  avatarUrl: string = '';
  filesToUpload: File[];
  percent = "0";
  id = '';
  user: any;
  isLoading = false;
  public options = {
      position: ["top","right"]
    };
  constructor(private authService: AuthService, 
              private notificationsService: NotificationsService,
              private apiService: ApiService,
              private router: Router) {
    this.filesToUpload = [];
   }

  ngOnInit() { 
      this.isLoading = true;
    this.id = sessionStorage.getItem('userId');
    this.authService.getAvatar(this.id)
      .subscribe(data => {
        this.avatarUrl = data.avatarUrl;
        this.isLoading = false;
      }, error => {
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });
      this.apiService.getUserInfo(this.id)
      .subscribe(user => {
        this.user = user;
      },
      error => {
        this.isLoading = false;
      });
  }

  ngAfterViewInit() {
    jQuery(document).ready(function() {
      jQuery(".fancybox").fancybox({
        
      });
    });
  }

  upload() {
      this.isLoading = true;
        this.makeFileRequest("http://localhost:3000/api/v1/avatars/"+this.id, this.filesToUpload).then((result) => {
            this.authService.getAvatar(this.id)
              .subscribe(data => {
              this.avatarUrl = data.avatarUrl;
              this.isLoading = false;
              this.notificationsService.success('Pakeista','Avataras pakeistas', {timeOut: 3000, showProgressBar: false})
            }, error => {
                this.isLoading = false;
                this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
            });
            this.filesToUpload = [];
        }, (error) => {
            this.isLoading = false;
            this.notificationsService.error('Klaida !', 'Netinkamas failo formatas! Tinkami formatai: .jpg, .jpeg, .png, .gif', {timeOut: 3000, showProgressBar: false});
        });
    }

    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
    }
 
    makeFileRequest(url: string, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for(var i = 0; i < files.length; i++) {
                formData.append("avatar", files[i], files[i].name);
            }
            xhr.upload.addEventListener("progress", (evt) => this.calculateUploadProgress(evt), false); 
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.onerror = function(e) {
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }

    calculateUploadProgress(evt) {
    if (evt.lengthComputable) {
        this.percent = Math.round(evt.loaded / evt.total * 100) + "%";
    }
    }

    emailConfirmed() {
        return sessionStorage.getItem('emailConfirmed') == CryptoJS.SHA3('true').toString();
    }

    sendConfirmationEmail() {
        this.authService.sendConfirmationEmail(this.id)
        .subscribe(data => {
            this.notificationsService.success('Išsiųsta', 'Patvirtinimo laiškas išsiųstas adresu ' + data.email, {timeOut: 3000, showProgressBar: false})
        }, error => {
            this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
        })
    }

    sendPrivateMessage(nickname) {
        this.router.navigate(['/profilis', 'pastas', 'rasyti-laiska', nickname]);
    }

    goToMail() {
        this.router.navigate(['/profilis', 'pastas']);
    }

    isClient() {
        return this.authService.isClient();
    }

    isDesigner() {
        return this.authService.isDesigner();
    }

    isAdmin() {
        return this.authService.isAdmin();
    }

}