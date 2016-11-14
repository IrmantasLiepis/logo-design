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
var angular2_notifications_1 = require('angular2-notifications');
var index_1 = require('./components/index');
var user_navigation_component_1 = require('./components/navbar/user-navigation.component');
var star_rating_component_1 = require('./components/contests/star-rating.component');
var submition_details_component_1 = require('./components/contests/submition-details.component');
var comments_section_component_1 = require('./components/contests/comments-section.component');
var contests_service_1 = require('./services/contests.service');
var auth_service_1 = require('./services/auth.service');
var designers_service_1 = require('./services/designers.service');
var api_service_1 = require('./services/api.service');
var can_activate_on_login_service_1 = require('./guards/can-activate-on-login.service');
var categories_module_1 = require('./components/categories/categories.module');
var publish_contest_module_1 = require('./components/publish-contest/publish-contest.module');
var index_2 = require('./errors/index');
var local_date_from_now_pipe_1 = require('./pipes/local-date-from-now-pipe');
var local_date_standart_pipe_1 = require('./pipes/local-date-standart-pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
                app_routing_1.routing, material_1.MaterialModule.forRoot(),
                ng2_bootstrap_1.AlertModule, primeng_1.InputTextModule, ng2_bootstrap_1.DatepickerModule, http_1.HttpModule,
                primeng_1.TabViewModule, categories_module_1.CategoriesModule, publish_contest_module_1.PublishContestModule, ng2_bs3_modal_1.Ng2Bs3ModalModule,
                angular2_notifications_1.SimpleNotificationsModule, primeng_1.AutoCompleteModule],
            declarations: [app_component_1.AppComponent, user_navigation_component_1.UserNavigationComponent, index_1.NavbarComponent, index_1.HeaderComponent,
                index_1.FooterComponent, index_1.CategoriesComponent, index_1.DesignersComponent,
                index_1.HowItWorksComponent, index_1.PageNotFoundComponent, index_1.DateTimeComponent,
                index_1.BSAlertComponent, index_1.ContestsComponent, index_1.LoginComponent, index_1.RegisterComponent,
                index_2.ErrorComponent, index_1.WinnersGalleryComponent, index_1.PublishContestComponent,
                index_1.ProfilePageComponent, index_1.MyContestsComponent, index_1.ContestDetailsComponent,
                local_date_from_now_pipe_1.LocalDateFromNowPipe, local_date_standart_pipe_1.LocalDateStandartPipe, star_rating_component_1.StarRatingComponent,
                submition_details_component_1.SubmitionDetailsComponent, comments_section_component_1.CommentsSectionComponent, index_1.MailListComponent,
                index_1.MailCreateComponent, index_1.MailCreateForUserComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [{ provide: core_1.LOCALE_ID, useValue: "lt-LT" }, app_routing_1.appRoutingProviders, contests_service_1.ContestsService, auth_service_1.AuthService, index_2.ErrorService,
                designers_service_1.DesignersService, api_service_1.ApiService, can_activate_on_login_service_1.CanActivateOnLoginService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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RV9JRCB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgcm91dGluZyxcclxuICAgICAgICAgYXBwUm91dGluZ1Byb3ZpZGVycyB9ICBmcm9tICcuL2FwcC5yb3V0aW5nJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYlZpZXdNb2R1bGUsIElucHV0VGV4dE1vZHVsZSwgQXV0b0NvbXBsZXRlTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5pbXBvcnQgeyBBbGVydE1vZHVsZSwgRGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IE5nMkJzM01vZGFsTW9kdWxlIH0gZnJvbSAnbmcyLWJzMy1tb2RhbC9uZzItYnMzLW1vZGFsJztcclxuaW1wb3J0IHsgU2ltcGxlTm90aWZpY2F0aW9uc01vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgTmF2YmFyQ29tcG9uZW50LCBIZWFkZXJDb21wb25lbnQsIEZvb3RlckNvbXBvbmVudCwgXHJcbiAgQ2F0ZWdvcmllc0NvbXBvbmVudCwgRGVzaWduZXJzQ29tcG9uZW50LCBIb3dJdFdvcmtzQ29tcG9uZW50LCBcclxuICBQYWdlTm90Rm91bmRDb21wb25lbnQsIEJTQWxlcnRDb21wb25lbnQsIERhdGVUaW1lQ29tcG9uZW50LFxyXG4gIENvbnRlc3RzQ29tcG9uZW50LCBSZWdpc3RlckNvbXBvbmVudCwgTG9naW5Db21wb25lbnQsIFdpbm5lcnNHYWxsZXJ5Q29tcG9uZW50LFxyXG4gIFB1Ymxpc2hDb250ZXN0Q29tcG9uZW50LCBQcm9maWxlUGFnZUNvbXBvbmVudCwgTXlDb250ZXN0c0NvbXBvbmVudCxcclxuICBDb250ZXN0RGV0YWlsc0NvbXBvbmVudCwgTWFpbExpc3RDb21wb25lbnQsIE1haWxDcmVhdGVDb21wb25lbnQsIE1haWxDcmVhdGVGb3JVc2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcclxuaW1wb3J0IHsgVXNlck5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyL3VzZXItbmF2aWdhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdGFyUmF0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlc3RzL3N0YXItcmF0aW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN1Ym1pdGlvbkRldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udGVzdHMvc3VibWl0aW9uLWRldGFpbHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tbWVudHNTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlc3RzL2NvbW1lbnRzLXNlY3Rpb24uY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29udGVzdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEZXNpZ25lcnNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kZXNpZ25lcnMuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGVPbkxvZ2luU2VydmljZSB9IGZyb20gJy4vZ3VhcmRzL2Nhbi1hY3RpdmF0ZS1vbi1sb2dpbi5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IENhdGVnb3JpZXNNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLm1vZHVsZSc7XHJcbmltcG9ydCB7IFB1Ymxpc2hDb250ZXN0TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3B1Ymxpc2gtY29udGVzdC9wdWJsaXNoLWNvbnRlc3QubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IEVycm9yQ29tcG9uZW50LCBFcnJvclNlcnZpY2UgfSBmcm9tICcuL2Vycm9ycy9pbmRleCc7XHJcblxyXG5pbXBvcnQgeyBMb2NhbERhdGVGcm9tTm93UGlwZSB9IGZyb20gJy4vcGlwZXMvbG9jYWwtZGF0ZS1mcm9tLW5vdy1waXBlJztcclxuaW1wb3J0IHsgTG9jYWxEYXRlU3RhbmRhcnRQaXBlIH0gZnJvbSAnLi9waXBlcy9sb2NhbC1kYXRlLXN0YW5kYXJ0LXBpcGUnO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFsgQnJvd3Nlck1vZHVsZSwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIFxyXG4gICAgICAgICAgICAgcm91dGluZywgTWF0ZXJpYWxNb2R1bGUuZm9yUm9vdCgpLCBcclxuICAgICAgICAgICAgIEFsZXJ0TW9kdWxlLCBJbnB1dFRleHRNb2R1bGUsIERhdGVwaWNrZXJNb2R1bGUsIEh0dHBNb2R1bGUsIFxyXG4gICAgICAgICAgICAgVGFiVmlld01vZHVsZSwgQ2F0ZWdvcmllc01vZHVsZSwgUHVibGlzaENvbnRlc3RNb2R1bGUsIE5nMkJzM01vZGFsTW9kdWxlLFxyXG4gICAgICAgICAgICAgU2ltcGxlTm90aWZpY2F0aW9uc01vZHVsZSwgQXV0b0NvbXBsZXRlTW9kdWxlIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbIEFwcENvbXBvbmVudCwgVXNlck5hdmlnYXRpb25Db21wb25lbnQsIE5hdmJhckNvbXBvbmVudCwgSGVhZGVyQ29tcG9uZW50LCBcclxuICAgICAgICAgICAgICAgICAgRm9vdGVyQ29tcG9uZW50LCBDYXRlZ29yaWVzQ29tcG9uZW50LCBEZXNpZ25lcnNDb21wb25lbnQsIFxyXG4gICAgICAgICAgICAgICAgICBIb3dJdFdvcmtzQ29tcG9uZW50LCBQYWdlTm90Rm91bmRDb21wb25lbnQsIERhdGVUaW1lQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgICBCU0FsZXJ0Q29tcG9uZW50LCBDb250ZXN0c0NvbXBvbmVudCwgTG9naW5Db21wb25lbnQsIFJlZ2lzdGVyQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgICBFcnJvckNvbXBvbmVudCwgV2lubmVyc0dhbGxlcnlDb21wb25lbnQsIFB1Ymxpc2hDb250ZXN0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgICBQcm9maWxlUGFnZUNvbXBvbmVudCwgTXlDb250ZXN0c0NvbXBvbmVudCwgQ29udGVzdERldGFpbHNDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgIExvY2FsRGF0ZUZyb21Ob3dQaXBlLCBMb2NhbERhdGVTdGFuZGFydFBpcGUsIFN0YXJSYXRpbmdDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgIFN1Ym1pdGlvbkRldGFpbHNDb21wb25lbnQsIENvbW1lbnRzU2VjdGlvbkNvbXBvbmVudCwgTWFpbExpc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgIE1haWxDcmVhdGVDb21wb25lbnQsIE1haWxDcmVhdGVGb3JVc2VyQ29tcG9uZW50XSxcclxuICBib290c3RyYXA6IFsgQXBwQ29tcG9uZW50IF0sXHJcbiAgcHJvdmlkZXJzOiBbIHtwcm92aWRlOiBMT0NBTEVfSUQsIHVzZVZhbHVlOiBcImx0LUxUXCJ9LCBhcHBSb3V0aW5nUHJvdmlkZXJzLCBDb250ZXN0c1NlcnZpY2UsIEF1dGhTZXJ2aWNlLCBFcnJvclNlcnZpY2UsIFxyXG4gICAgICAgICAgICAgICBEZXNpZ25lcnNTZXJ2aWNlLCBBcGlTZXJ2aWNlLCBDYW5BY3RpdmF0ZU9uTG9naW5TZXJ2aWNlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIl19
