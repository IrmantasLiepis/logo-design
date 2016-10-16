"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var auth_service_1 = require('../../services/auth.service');
var user_1 = require('../../models/user');
var index_1 = require('../../errors/index');
var UserNavigationComponent = (function () {
    function UserNavigationComponent(router, authService, fb, errorService) {
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.errorService = errorService;
        //@ViewChild('modal')
        //modal: ModalComponent;   //to support modal in modal (to implement: forgot password)
        this.model = new user_1.User('', '');
        this.index = 0;
        //  backdropOptions = [true, false, 'static'];
        this.cssClass = '';
        this.animation = true;
        this.keyboard = true;
        this.backdrop = true;
        this.submitted = false;
        this.userTypes = [
            { value: 'client', display: 'Client' },
            { value: 'designer', display: 'Designer' }
        ];
    }
    UserNavigationComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, this.isValidEmail])],
            password: ['', forms_1.Validators.required]
        });
        this.registerForm = this.fb.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, this.isValidEmail])],
            password: ['', forms_1.Validators.required],
            userType: [this.userTypes[0].value, forms_1.Validators.required]
        });
    };
    UserNavigationComponent.prototype.logout = function () {
        localStorage.clear();
        console.log('localStorage cleared, logging out...');
        this.router.navigate(['/']);
    };
    UserNavigationComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    UserNavigationComponent.prototype.closed = function () {
        console.log('Modal closed');
    };
    UserNavigationComponent.prototype.dismissed = function () {
        console.log('Modal dismissed');
    };
    UserNavigationComponent.prototype.opened = function () {
        console.log('Modal opened');
    };
    UserNavigationComponent.prototype.login = function () {
        var _this = this;
        var user = new user_1.User(this.loginForm.value.email, this.loginForm.value.password);
        this.authService.signin(user)
            .subscribe(function (data) {
            console.log(data);
            console.log('Sekmingai prisijungta');
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            _this.router.navigateByUrl('/');
        }, function (error) { return _this.errorService.handleError(error); });
    };
    UserNavigationComponent.prototype.register = function () {
        var _this = this;
        var user = new user_1.User(this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.userType, this.registerForm.value.firstName, this.registerForm.value.lastName, 0, 0, 0);
        this.authService.signup(user)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) { return _this.errorService.handleError(error); });
    };
    UserNavigationComponent.prototype.isValidEmail = function (control) {
        var emailRegex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
        return emailRegex.test(control.value) ? null : { invalidEmail: true };
    };
    UserNavigationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-nav',
            templateUrl: 'user-navigation.component.html',
            styleUrls: ['user-navigation.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, forms_1.FormBuilder, index_1.ErrorService])
    ], UserNavigationComponent);
    return UserNavigationComponent;
}());
exports.UserNavigationComponent = UserNavigationComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL3VzZXItbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnRSxlQUFlLENBQUMsQ0FBQTtBQUNoRixzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRix1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6Qyw2QkFBNEIsNkJBQTZCLENBQUMsQ0FBQTtBQUUxRCxxQkFBcUIsbUJBQW1CLENBQUMsQ0FBQTtBQUN6QyxzQkFBNkIsb0JBQW9CLENBQUMsQ0FBQTtBQVVsRDtJQXVCRSxpQ0FBb0IsTUFBYyxFQUFVLFdBQXdCLEVBQVUsRUFBZSxFQUFVLFlBQTBCO1FBQTdHLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQXJCakkscUJBQXFCO1FBQ25CLHNGQUFzRjtRQUN0RixVQUFLLEdBQVMsSUFBSSxXQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRS9CLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDcEIsOENBQThDO1FBQzVDLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFFdEIsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQixhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGFBQVEsR0FBcUIsSUFBSSxDQUFDO1FBSzdCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsY0FBUyxHQUFHO1lBQ2pCLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFO1lBQ3RDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFO1NBQzdDLENBQUM7SUFFcUksQ0FBQztJQUV0SSwwQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM3QixLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN6RSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FDcEMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNoQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDcEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUN6RCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsd0NBQU0sR0FBTjtRQUNFLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCw0Q0FBVSxHQUFWO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVDLHdDQUFNLEdBQU47UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCwyQ0FBUyxHQUFUO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCx3Q0FBTSxHQUFOO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsdUNBQUssR0FBTDtRQUFBLGlCQVdDO1FBVkUsSUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzthQUM1QixTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDckMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBcEMsQ0FBb0MsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFFRCwwQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFNLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDck0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQzFCLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFwQyxDQUFvQyxDQUFDLENBQUE7SUFDcEQsQ0FBQztJQUVPLDhDQUFZLEdBQXBCLFVBQXFCLE9BQW9CO1FBQ3ZDLElBQUksVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLHVJQUF1SSxDQUFDLENBQUM7UUFDckssTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQTtJQUNuRSxDQUFDO0lBOUZQO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBRTdDLENBQUM7OytCQUFBO0lBMEZGLDhCQUFDO0FBQUQsQ0F6RkEsQUF5RkMsSUFBQTtBQXpGWSwrQkFBdUIsMEJBeUZuQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbmF2YmFyL3VzZXItbmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gJ25nMi1iczMtbW9kYWwvbmcyLWJzMy1tb2RhbCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvdXNlcic7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4uLy4uL2Vycm9ycy9pbmRleCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3VzZXItbmF2JyxcclxuICB0ZW1wbGF0ZVVybDogJ3VzZXItbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3VzZXItbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzJ11cclxuICAvLywgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlck5hdmlnYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAvL0BWaWV3Q2hpbGQoJ21vZGFsJylcclxuICAgIC8vbW9kYWw6IE1vZGFsQ29tcG9uZW50OyAgIC8vdG8gc3VwcG9ydCBtb2RhbCBpbiBtb2RhbCAodG8gaW1wbGVtZW50OiBmb3Jnb3QgcGFzc3dvcmQpXHJcbiAgICBtb2RlbDogVXNlciA9IG5ldyBVc2VyKCcnLCAnJyk7XHJcblxyXG4gICAgaW5kZXg6IG51bWJlciA9IDA7XHJcbiAgLy8gIGJhY2tkcm9wT3B0aW9ucyA9IFt0cnVlLCBmYWxzZSwgJ3N0YXRpYyddO1xyXG4gICAgY3NzQ2xhc3M6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGFuaW1hdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBrZXlib2FyZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBiYWNrZHJvcDogc3RyaW5nIHwgYm9vbGVhbiA9IHRydWU7XHJcbiAvLyAgIGNzczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgbG9naW5Gb3JtOiBGb3JtR3JvdXA7XHJcbiAgcHVibGljIHJlZ2lzdGVyRm9ybTogRm9ybUdyb3VwO1xyXG4gIHB1YmxpYyBzdWJtaXR0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgdXNlclR5cGVzID0gW1xyXG4gICAgeyB2YWx1ZTogJ2NsaWVudCcsIGRpc3BsYXk6ICdDbGllbnQnIH0sXHJcbiAgICB7IHZhbHVlOiAnZGVzaWduZXInLCBkaXNwbGF5OiAnRGVzaWduZXInIH1cclxuXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IFxyXG4gICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCB0aGlzLmlzVmFsaWRFbWFpbF0pXSxcclxuICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucmVnaXN0ZXJGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgbGFzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgdGhpcy5pc1ZhbGlkRW1haWxdKV0sXHJcbiAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICB1c2VyVHlwZTogW3RoaXMudXNlclR5cGVzWzBdLnZhbHVlLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIGNvbnNvbGUubG9nKCdsb2NhbFN0b3JhZ2UgY2xlYXJlZCwgbG9nZ2luZyBvdXQuLi4nKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcclxuICB9XHJcblxyXG4gIGlzTG9nZ2VkSW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKCk7XHJcbiAgfVxyXG5cclxuICAgIGNsb3NlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTW9kYWwgY2xvc2VkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzbWlzc2VkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNb2RhbCBkaXNtaXNzZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01vZGFsIG9wZW5lZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKCkge1xyXG4gICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKHRoaXMubG9naW5Gb3JtLnZhbHVlLmVtYWlsLCB0aGlzLmxvZ2luRm9ybS52YWx1ZS5wYXNzd29yZCk7XHJcbiAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNpZ25pbih1c2VyKVxyXG4gICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCdTZWttaW5nYWkgcHJpc2lqdW5ndGEnKTtcclxuICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YS50b2tlbik7XHJcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCBkYXRhLnVzZXJJZCk7XHJcbiAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKTtcclxuICAgICAgIH0sXHJcbiAgICAgICBlcnJvciA9PiB0aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcikpXHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIoKSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcih0aGlzLnJlZ2lzdGVyRm9ybS52YWx1ZS5lbWFpbCwgdGhpcy5yZWdpc3RlckZvcm0udmFsdWUucGFzc3dvcmQsIHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlLnVzZXJUeXBlICx0aGlzLnJlZ2lzdGVyRm9ybS52YWx1ZS5maXJzdE5hbWUsIHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlLmxhc3ROYW1lLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNpZ251cCh1c2VyKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNWYWxpZEVtYWlsKGNvbnRyb2w6IEZvcm1Db250cm9sKToge1tzOiBzdHJpbmddOiBib29sZWFufSB7XHJcbiAgICAgIGxldCBlbWFpbFJlZ2V4ID0gbmV3IFJlZ0V4cChcIlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1wiKTsgXHJcbiAgICAgIHJldHVybiBlbWFpbFJlZ2V4LnRlc3QoY29udHJvbC52YWx1ZSkgPyBudWxsIDoge2ludmFsaWRFbWFpbDogdHJ1ZX1cclxuICAgICAgfVxyXG5cclxufSJdfQ==