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
var contests_service_1 = require('../../../../services/contests.service');
var auth_service_1 = require('../../../../services/auth.service');
var router_1 = require('@angular/router');
var angular2_notifications_1 = require('angular2-notifications');
var CryptoJS = require('crypto-js');
var BookletComponent = (function () {
    function BookletComponent(router, contestsService, notificationsService, authService) {
        this.router = router;
        this.contestsService = contestsService;
        this.notificationsService = notificationsService;
        this.authService = authService;
        this.contest = {};
        this.isLoading = false;
        this.options = {
            position: ["top", "right"]
        };
    }
    BookletComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.contest.category = "Brošiūra";
    };
    BookletComponent.prototype.backToList = function () {
        this.router.navigate(['/paskelbti-konkursa']);
    };
    BookletComponent.prototype.logErrors = function (errors) {
        console.log(errors);
    };
    BookletComponent.prototype.addContest = function (value) {
        var _this = this;
        this.isLoading = true;
        //console.log(value);
        this.contestsService.addContest(value)
            .subscribe(function (contest) {
            //console.log('contest added');
            //console.log(contest);
            _this.isLoading = false;
            _this.notificationsService.success('Paskelbta', 'Konkursas paskelbtas', { timeOut: 3000, showProgressBar: false });
            _this.router.navigate(['/']);
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    BookletComponent.prototype.isClient = function () {
        return this.authService.isClient();
    };
    BookletComponent.prototype.isDesigner = function () {
        return this.authService.isDesigner();
    };
    BookletComponent.prototype.isEmailConfirmed = function () {
        return sessionStorage.getItem('emailConfirmed') == CryptoJS.SHA3('true').toString();
    };
    BookletComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'booklet.component.html',
            styleUrls: ['booklet.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, contests_service_1.ContestsService, angular2_notifications_1.NotificationsService, auth_service_1.AuthService])
    ], BookletComponent);
    return BookletComponent;
}());
exports.BookletComponent = BookletComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHVibGlzaC1jb250ZXN0L2J1c2luZXNzLWFuZC1hZHZlcnRpc2luZy9ib29rbGV0L2Jvb2tsZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFHbEQsaUNBQWdDLHVDQUF1QyxDQUFDLENBQUE7QUFDeEUsNkJBQTRCLG1DQUFtQyxDQUFDLENBQUE7QUFFaEUsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFDOUQsSUFBWSxRQUFRLFdBQU0sV0FBVyxDQUFDLENBQUE7QUFPdEM7SUFPRSwwQkFBb0IsTUFBYyxFQUNkLGVBQWdDLEVBQ2hDLG9CQUEwQyxFQUMxQyxXQUF3QjtRQUh4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFUNUMsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ1gsWUFBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQztTQUMxQixDQUFDO0lBSzRDLENBQUM7SUFFakQsbUNBQVEsR0FBUjtRQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0lBRUQscUNBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxvQ0FBUyxHQUFULFVBQVUsTUFBTTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELHFDQUFVLEdBQVYsVUFBVyxLQUFLO1FBQWhCLGlCQWNDO1FBYkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQzthQUNuQyxTQUFTLENBQUMsVUFBQSxPQUFPO1lBQ2hCLCtCQUErQjtZQUMvQix1QkFBdUI7WUFDdkIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsc0JBQXNCLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1lBQy9HLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ04sS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtRQUM1RyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsMkNBQWdCLEdBQWhCO1FBQ0UsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3RGLENBQUM7SUF4REg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQzs7d0JBQUE7SUFxREYsdUJBQUM7QUFBRCxDQXBEQSxBQW9EQyxJQUFBO0FBcERZLHdCQUFnQixtQkFvRDVCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9wdWJsaXNoLWNvbnRlc3QvYnVzaW5lc3MtYW5kLWFkdmVydGlzaW5nL2Jvb2tsZXQvYm9va2xldC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29udGVzdCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9jb250ZXN0JztcclxuaW1wb3J0IHsgQ29udGVzdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvY29udGVzdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZXJyb3JzL2luZGV4JztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcclxuaW1wb3J0ICogYXMgQ3J5cHRvSlMgZnJvbSAnY3J5cHRvLWpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6ICdib29rbGV0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYm9va2xldC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEJvb2tsZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbnRlc3Q6IE9iamVjdCA9IHt9O1xyXG4gIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gIHB1YmxpYyBvcHRpb25zID0ge1xyXG4gICAgICBwb3NpdGlvbjogW1widG9wXCIsXCJyaWdodFwiXVxyXG4gICAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICBwcml2YXRlIGNvbnRlc3RzU2VydmljZTogQ29udGVzdHNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uc1NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IFxyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsMCk7XHJcbiAgICB0aGlzLmNvbnRlc3QuY2F0ZWdvcnkgPSBcIkJyb8WhacWrcmFcIjtcclxuICB9XHJcblxyXG4gIGJhY2tUb0xpc3QoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wYXNrZWxidGkta29ua3Vyc2EnXSk7XHJcbiAgfVxyXG5cclxuICBsb2dFcnJvcnMoZXJyb3JzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ29udGVzdCh2YWx1ZSkge1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgLy9jb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5hZGRDb250ZXN0KHZhbHVlKVxyXG4gICAgICAuc3Vic2NyaWJlKGNvbnRlc3QgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2NvbnRlc3QgYWRkZWQnKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGNvbnRlc3QpO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCdQYXNrZWxidGEnLCAnS29ua3Vyc2FzIHBhc2tlbGJ0YXMnLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xyXG4gICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaXNDbGllbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0NsaWVudCgpO1xyXG4gIH1cclxuXHJcbiAgaXNEZXNpZ25lcigpIHtcclxuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzRGVzaWduZXIoKTtcclxuICB9XHJcblxyXG4gIGlzRW1haWxDb25maXJtZWQoKSB7IC8vIFRPRE8gYWRkIHRoZXNlIGNoZWNrcyB0byBldmVyeSBmb3JtXHJcbiAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZW1haWxDb25maXJtZWQnKSA9PSBDcnlwdG9KUy5TSEEzKCd0cnVlJykudG9TdHJpbmcoKTtcclxuICB9XHJcbn0iXX0=
