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
var router_1 = require('@angular/router');
var api_service_1 = require('../../services/api.service');
var contests_service_1 = require('../../services/contests.service');
var angular2_notifications_1 = require('angular2-notifications');
var MailCreateForUserComponent = (function () {
    function MailCreateForUserComponent(route, apiService, notificationsService, router, contestsService) {
        this.route = route;
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.router = router;
        this.contestsService = contestsService;
        this.isLoading = false;
        this.options = {
            position: ["top", "right"]
        };
    }
    MailCreateForUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.contestsService.mailTopic) {
            this.topic = this.contestsService.mailTopic;
        }
        this.userId = localStorage.getItem('userId');
        this.route.params.subscribe(function (params) {
            _this.nickname = params['nickname'];
        });
        this.apiService.getUserInfo(this.userId)
            .subscribe(function (res) {
            _this.sender = res;
            console.log('THIS.SENDER');
            console.log(_this.sender);
        }, function (error) {
            _this.notificationsService.error('Įvyko klaida', 'Nepavyko gauti siuntėjo informacijos', { timeOut: 3000, showProgressBar: false });
        });
    };
    MailCreateForUserComponent.prototype.sendMessage = function () {
        var _this = this;
        this.isLoading = true;
        var recipient;
        if (typeof this.nickname === 'string') {
            recipient = this.nickname;
        }
        else {
            recipient = this.nickname.nickName;
        }
        this.apiService.sendMessage(recipient, this.topic, this.message)
            .subscribe(function (res) {
            console.log(res);
            _this.notificationsService.success('Išsiųsta', 'Žinutė išsiųsta sėkmingai', { timeOut: 3000, showProgressBar: false });
            _this.isLoading = false;
            _this.router.navigate(['/profilis', 'pastas']);
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error('Įvyko klaida', 'Nepavyko išsiųsti žinutės! Patikrinkite gavėjo slapyvardį', { timeOut: 3000, showProgressBar: false });
        });
    };
    // searchUsers() {
    //   this.apiService.searchUsers(this.nickname)
    //     .subscribe(res => {
    //       this.searchedUsers = res;
    //       console.log('SEARCH RESULTS');
    //       console.log(res);
    //       console.log('THIS.searchedUsers');
    //       console.log(this.searchedUsers);
    //     }, error => {
    //       this.notificationsService.error('Įvyko klaida', 'Nepavyko rasti vartotojo', {timeOut: 3000, showProgressBar: false})
    //     });
    // }
    MailCreateForUserComponent.prototype.search = function (event) {
        var _this = this;
        this.apiService.searchUsers(event.query)
            .subscribe(function (res) {
            _this.results = res;
        }, function (error) {
            _this.notificationsService.error('Įvyko klaida', 'Nepavyko rasti vartotojo', { timeOut: 3000, showProgressBar: false });
        });
    };
    MailCreateForUserComponent.prototype.onSelect = function (obj) {
        console.log(event);
        //this.nickname = obj.nickName;
    };
    MailCreateForUserComponent.prototype.goBack = function () {
        this.router.navigate(['/profilis', 'pastas']);
    };
    MailCreateForUserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mail-create-for-user',
            templateUrl: 'mail-create-for-user.component.html',
            styleUrls: ['mail-create-for-user.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, api_service_1.ApiService, angular2_notifications_1.NotificationsService, router_1.Router, contests_service_1.ContestsService])
    ], MailCreateForUserComponent);
    return MailCreateForUserComponent;
}());
exports.MailCreateForUserComponent = MailCreateForUserComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZS9tYWlsLWNyZWF0ZS1mb3ItdXNlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBK0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRSw0QkFBMkIsNEJBQTRCLENBQUMsQ0FBQTtBQUN4RCxpQ0FBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQUNsRSx1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQVE5RDtJQVlFLG9DQUFvQixLQUFxQixFQUNyQixVQUFzQixFQUN0QixvQkFBMEMsRUFDMUMsTUFBYyxFQUNkLGVBQWdDO1FBSmhDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBUnBELGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDcEIsWUFBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQztTQUMxQixDQUFDO0lBS29ELENBQUM7SUFFekQsNkNBQVEsR0FBUjtRQUFBLGlCQWdCQztRQWZDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO1FBQzlDLENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBYztZQUMzQyxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNu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QjtJQUNqQyxDQUFDO0lBRUQsMkNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQTFGSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxXQUFXLEVBQUUscUNBQXFDO1lBQ2xELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO1NBQ2xELENBQUM7O2tDQUFBO0lBdUZGLGlDQUFDO0FBQUQsQ0F0RkEsQUFzRkMsSUFBQTtBQXRGWSxrQ0FBMEIsNkJBc0Z0QyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcHJvZmlsZS9tYWlsLWNyZWF0ZS1mb3ItdXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYXJhbXMsIEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb250ZXN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdtYWlsLWNyZWF0ZS1mb3ItdXNlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICdtYWlsLWNyZWF0ZS1mb3ItdXNlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ21haWwtY3JlYXRlLWZvci11c2VyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbENyZWF0ZUZvclVzZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIG5pY2tuYW1lOiBhbnk7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIC8vc2VhcmNoZWRVc2VycyA9IFtdO1xyXG4gIHJlc3VsdHM6YW55O1xyXG4gIHVzZXJJZDogc3RyaW5nO1xyXG4gIHNlbmRlcjogYW55O1xyXG4gIHRvcGljOiBzdHJpbmc7XHJcbiAgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIG9wdGlvbnMgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBbXCJ0b3BcIixcInJpZ2h0XCJdXHJcbiAgICB9O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBub3RpZmljYXRpb25zU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICBwcml2YXRlIGNvbnRlc3RzU2VydmljZTogQ29udGVzdHNTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IFxyXG4gICAgaWYgKHRoaXMuY29udGVzdHNTZXJ2aWNlLm1haWxUb3BpYykge1xyXG4gICAgICB0aGlzLnRvcGljID0gdGhpcy5jb250ZXN0c1NlcnZpY2UubWFpbFRvcGljO1xyXG4gICAgfVxyXG4gICAgdGhpcy51c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtczogUGFyYW1zKSA9PiB7XHJcbiAgICB0aGlzLm5pY2tuYW1lID0gcGFyYW1zWyduaWNrbmFtZSddO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0VXNlckluZm8odGhpcy51c2VySWQpXHJcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICB0aGlzLnNlbmRlciA9IHJlcztcclxuICAgICAgICBjb25zb2xlLmxvZygnVEhJUy5TRU5ERVInKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbmRlcik7XHJcbiAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKCfErnZ5a28ga2xhaWRhJywgJ05lcGF2eWtvIGdhdXRpIHNpdW50xJdqbyBpbmZvcm1hY2lqb3MnLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VuZE1lc3NhZ2UoKSB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB2YXIgcmVjaXBpZW50O1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLm5pY2tuYW1lID09PSAnc3RyaW5nJykge1xyXG4gICAgICByZWNpcGllbnQgPSB0aGlzLm5pY2tuYW1lO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVjaXBpZW50ID0gdGhpcy5uaWNrbmFtZS5uaWNrTmFtZTtcclxuICAgIH1cclxuICAgIHRoaXMuYXBpU2VydmljZS5zZW5kTWVzc2FnZShyZWNpcGllbnQsIHRoaXMudG9waWMsIHRoaXMubWVzc2FnZSlcclxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCdJxaFzacWzc3RhJywgJ8W9aW51dMSXIGnFoXNpxbNzdGEgc8SXa21pbmdhaScsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Byb2ZpbGlzJywgJ3Bhc3RhcyddKTtcclxuICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcignxK52eWtvIGtsYWlkYScsICdOZXBhdnlrbyBpxaFzacWzc3RpIMW+aW51dMSXcyEgUGF0aWtyaW5raXRlIGdhdsSXam8gc2xhcHl2YXJkxK8nLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gc2VhcmNoVXNlcnMoKSB7XHJcbiAgLy8gICB0aGlzLmFwaVNlcnZpY2Uuc2VhcmNoVXNlcnModGhpcy5uaWNrbmFtZSlcclxuICAvLyAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gIC8vICAgICAgIHRoaXMuc2VhcmNoZWRVc2VycyA9IHJlcztcclxuICAvLyAgICAgICBjb25zb2xlLmxvZygnU0VBUkNIIFJFU1VMVFMnKTtcclxuICAvLyAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKCdUSElTLnNlYXJjaGVkVXNlcnMnKTtcclxuICAvLyAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaGVkVXNlcnMpO1xyXG4gIC8vICAgICB9LCBlcnJvciA9PiB7XHJcbiAgLy8gICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcignxK52eWtvIGtsYWlkYScsICdOZXBhdnlrbyByYXN0aSB2YXJ0b3Rvam8nLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vIH1cclxuXHJcbiAgc2VhcmNoKGV2ZW50KSB7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2Uuc2VhcmNoVXNlcnMoZXZlbnQucXVlcnkpXHJcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICB0aGlzLnJlc3VsdHMgPSByZXM7XHJcbiAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKCfErnZ5a28ga2xhaWRhJywgJ05lcGF2eWtvIHJhc3RpIHZhcnRvdG9qbycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIG9uU2VsZWN0KG9iaikge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgLy90aGlzLm5pY2tuYW1lID0gb2JqLm5pY2tOYW1lO1xyXG4gIH1cclxuXHJcbiAgZ29CYWNrKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcHJvZmlsaXMnLCAncGFzdGFzJ10pO1xyXG4gIH1cclxuICBcclxufSJdfQ==
