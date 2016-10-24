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
var platform_browser_1 = require('@angular/platform-browser');
var app_routing_1 = require('./app.routing');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var primeng_1 = require('primeng/primeng');
var material_1 = require('@angular/material');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var index_1 = require('./components/index');
var user_navigation_component_1 = require('./components/navbar/user-navigation.component');
var contests_service_1 = require('./services/contests.service');
var auth_service_1 = require('./services/auth.service');
var designers_service_1 = require('./services/designers.service');
var can_activate_on_login_service_1 = require('./guards/can-activate-on-login.service');
var categories_module_1 = require('./components/categories/categories.module');
var publish_contest_module_1 = require('./components/publish-contest/publish-contest.module');
var index_2 = require('./errors/index');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
                app_routing_1.routing, material_1.MaterialModule.forRoot(),
                ng2_bootstrap_1.AlertModule, primeng_1.InputTextModule, ng2_bootstrap_1.DatepickerModule, http_1.HttpModule,
                primeng_1.TabViewModule, categories_module_1.CategoriesModule, publish_contest_module_1.PublishContestModule, ng2_bs3_modal_1.Ng2Bs3ModalModule],
            declarations: [app_component_1.AppComponent, user_navigation_component_1.UserNavigationComponent, index_1.NavbarComponent, index_1.HeaderComponent,
                index_1.FooterComponent, index_1.CategoriesComponent, index_1.DesignersComponent,
                index_1.HowItWorksComponent, index_1.PageNotFoundComponent, index_1.DateTimeComponent,
                index_1.BSAlertComponent, index_1.ContestsComponent, index_1.LoginComponent, index_1.RegisterComponent,
                index_2.ErrorComponent, index_1.WinnersGalleryComponent, index_1.PublishContestComponent,
                index_1.ProfilePageComponent, index_1.MyContestsComponent, index_1.ContestDetailsComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [app_routing_1.appRoutingProviders, contests_service_1.ContestsService, auth_service_1.AuthService, index_2.ErrorService,
                designers_service_1.DesignersService, can_activate_on_login_service_1.CanActivateOnLoginService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCw0QkFDcUMsZUFBZSxDQUFDLENBQUE7QUFDckQsc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFDbEUscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDhCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHdCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pFLHlCQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBRW5ELDhCQUE4Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzVFLDhCQUFrQyw2QkFBNkIsQ0FBQyxDQUFBO0FBRWhFLHNCQUtpQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3RELDBDQUF3QywrQ0FBK0MsQ0FBQyxDQUFBO0FBRXhGLGlDQUFnQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzlELDZCQUE0Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3RELGtDQUFpQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ2hFLDhDQUEwQyx3Q0FBd0MsQ0FBQyxDQUFBO0FBRW5GLGtDQUFpQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQzdFLHVDQUFxQyxxREFBcUQsQ0FBQyxDQUFBO0FBRTNGLHNCQUE2QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBbUI5RDtJQUFBO0lBQXlCLENBQUM7SUFmMUI7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBRSxnQ0FBYSxFQUFFLG1CQUFXLEVBQUUsMkJBQW1CO2dCQUMvQyxxQkFBTyxFQUFFLHlCQUFjLENBQUMsT0FBTyxFQUFFO2dCQUNqQywyQkFBVyxFQUFFLHlCQUFlLEVBQUUsZ0NBQWdCLEVBQUUsaUJBQVU7Z0JBQzFELHVCQUFhLEVBQUUsb0NBQWdCLEVBQUUsNkNBQW9CLEVBQUUsaUNBQWlCLENBQUU7WUFDckYsWUFBWSxFQUFFLENBQUUsNEJBQVksRUFBRSxtREFBdUIsRUFBRSx1QkFBZSxFQUFFLHVCQUFlO2dCQUN2RSx1QkFBZSxFQUFFLDJCQUFtQixFQUFFLDBCQUFrQjtnQkFDeEQsMkJBQW1CLEVBQUUsNkJBQXFCLEVBQUUseUJBQWlCO2dCQUM3RCx3QkFBZ0IsRUFBRSx5QkFBaUIsRUFBRSxzQkFBYyxFQUFFLHlCQUFpQjtnQkFDdEUsc0JBQWMsRUFBRSwrQkFBdUIsRUFBRSwrQkFBdUI7Z0JBQ2hFLDRCQUFvQixFQUFFLDJCQUFtQixFQUFFLCtCQUF1QixDQUFFO1lBQ3BGLFNBQVMsRUFBRSxDQUFFLDRCQUFZLENBQUU7WUFDM0IsU0FBUyxFQUFFLENBQUUsaUNBQW1CLEVBQUUsa0NBQWUsRUFBRSwwQkFBVyxFQUFFLG9CQUFZO2dCQUMvRCxvQ0FBZ0IsRUFBRSx5REFBeUIsQ0FBRTtTQUMzRCxDQUFDOztpQkFBQTtJQUN1QixnQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixpQkFBUyxZQUFJLENBQUEiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyByb3V0aW5nLFxyXG4gICAgICAgICBhcHBSb3V0aW5nUHJvdmlkZXJzIH0gIGZyb20gJy4vYXBwLnJvdXRpbmcnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSAgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFiVmlld01vZHVsZSwgSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5pbXBvcnQgeyBBbGVydE1vZHVsZSwgRGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IE5nMkJzM01vZGFsTW9kdWxlIH0gZnJvbSAnbmcyLWJzMy1tb2RhbC9uZzItYnMzLW1vZGFsJztcclxuXHJcbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCwgSGVhZGVyQ29tcG9uZW50LCBGb290ZXJDb21wb25lbnQsIFxyXG4gIENhdGVnb3JpZXNDb21wb25lbnQsIERlc2lnbmVyc0NvbXBvbmVudCwgSG93SXRXb3Jrc0NvbXBvbmVudCwgXHJcbiAgUGFnZU5vdEZvdW5kQ29tcG9uZW50LCBCU0FsZXJ0Q29tcG9uZW50LCBEYXRlVGltZUNvbXBvbmVudCxcclxuICBDb250ZXN0c0NvbXBvbmVudCwgUmVnaXN0ZXJDb21wb25lbnQsIExvZ2luQ29tcG9uZW50LCBXaW5uZXJzR2FsbGVyeUNvbXBvbmVudCxcclxuICBQdWJsaXNoQ29udGVzdENvbXBvbmVudCwgUHJvZmlsZVBhZ2VDb21wb25lbnQsIE15Q29udGVzdHNDb21wb25lbnQsXHJcbiAgQ29udGVzdERldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xyXG5pbXBvcnQgeyBVc2VyTmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZiYXIvdXNlci1uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBDb250ZXN0c1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGVzaWduZXJzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGVzaWduZXJzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZU9uTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi9ndWFyZHMvY2FuLWFjdGl2YXRlLW9uLWxvZ2luLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgQ2F0ZWdvcmllc01vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMubW9kdWxlJztcclxuaW1wb3J0IHsgUHVibGlzaENvbnRlc3RNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcHVibGlzaC1jb250ZXN0L3B1Ymxpc2gtY29udGVzdC5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQsIEVycm9yU2VydmljZSB9IGZyb20gJy4vZXJyb3JzL2luZGV4JztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbIEJyb3dzZXJNb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBcclxuICAgICAgICAgICAgIHJvdXRpbmcsIE1hdGVyaWFsTW9kdWxlLmZvclJvb3QoKSwgXHJcbiAgICAgICAgICAgICBBbGVydE1vZHVsZSwgSW5wdXRUZXh0TW9kdWxlLCBEYXRlcGlja2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBcclxuICAgICAgICAgICAgIFRhYlZpZXdNb2R1bGUsIENhdGVnb3JpZXNNb2R1bGUsIFB1Ymxpc2hDb250ZXN0TW9kdWxlLCBOZzJCczNNb2RhbE1vZHVsZSBdLFxyXG4gIGRlY2xhcmF0aW9uczogWyBBcHBDb21wb25lbnQsIFVzZXJOYXZpZ2F0aW9uQ29tcG9uZW50LCBOYXZiYXJDb21wb25lbnQsIEhlYWRlckNvbXBvbmVudCwgXHJcbiAgICAgICAgICAgICAgICAgIEZvb3RlckNvbXBvbmVudCwgQ2F0ZWdvcmllc0NvbXBvbmVudCwgRGVzaWduZXJzQ29tcG9uZW50LCBcclxuICAgICAgICAgICAgICAgICAgSG93SXRXb3Jrc0NvbXBvbmVudCwgUGFnZU5vdEZvdW5kQ29tcG9uZW50LCBEYXRlVGltZUNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgQlNBbGVydENvbXBvbmVudCwgQ29udGVzdHNDb21wb25lbnQsIExvZ2luQ29tcG9uZW50LCBSZWdpc3RlckNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgRXJyb3JDb21wb25lbnQsIFdpbm5lcnNHYWxsZXJ5Q29tcG9uZW50LCBQdWJsaXNoQ29udGVzdENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgUHJvZmlsZVBhZ2VDb21wb25lbnQsIE15Q29udGVzdHNDb21wb25lbnQsIENvbnRlc3REZXRhaWxzQ29tcG9uZW50IF0sXHJcbiAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxyXG4gIHByb3ZpZGVyczogWyBhcHBSb3V0aW5nUHJvdmlkZXJzLCBDb250ZXN0c1NlcnZpY2UsIEF1dGhTZXJ2aWNlLCBFcnJvclNlcnZpY2UsIFxyXG4gICAgICAgICAgICAgICBEZXNpZ25lcnNTZXJ2aWNlLCBDYW5BY3RpdmF0ZU9uTG9naW5TZXJ2aWNlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIl19
