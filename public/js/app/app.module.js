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
                primeng_1.TabViewModule, categories_module_1.CategoriesModule, publish_contest_module_1.PublishContestModule, ng2_bs3_modal_1.Ng2Bs3ModalModule],
            declarations: [app_component_1.AppComponent, user_navigation_component_1.UserNavigationComponent, index_1.NavbarComponent, index_1.HeaderComponent,
                index_1.FooterComponent, index_1.CategoriesComponent, index_1.DesignersComponent,
                index_1.HowItWorksComponent, index_1.PageNotFoundComponent, index_1.DateTimeComponent,
                index_1.BSAlertComponent, index_1.ContestsComponent, index_1.LoginComponent, index_1.RegisterComponent,
                index_2.ErrorComponent, index_1.WinnersGalleryComponent, index_1.PublishContestComponent,
                index_1.ProfilePageComponent, index_1.MyContestsComponent, index_1.ContestDetailsComponent,
                local_date_from_now_pipe_1.LocalDateFromNowPipe, local_date_standart_pipe_1.LocalDateStandartPipe, star_rating_component_1.StarRatingComponent,
                submition_details_component_1.SubmitionDetailsComponent, comments_section_component_1.CommentsSectionComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [{ provide: core_1.LOCALE_ID, useValue: "lt-LT" }, app_routing_1.appRoutingProviders, contests_service_1.ContestsService, auth_service_1.AuthService, index_2.ErrorService,
                designers_service_1.DesignersService, api_service_1.ApiService, can_activate_on_login_service_1.CanActivateOnLoginService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QyxlQUFlLENBQUMsQ0FBQTtBQUN6RCxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCw0QkFDcUMsZUFBZSxDQUFDLENBQUE7QUFDckQsc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFDbEUscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDhCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHdCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pFLHlCQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBRW5ELDhCQUE4Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzVFLDhCQUFrQyw2QkFBNkIsQ0FBQyxDQUFBO0FBRWhFLHNCQUtpQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3RELDBDQUF3QywrQ0FBK0MsQ0FBQyxDQUFBO0FBQ3hGLHNDQUFvQyw2Q0FBNkMsQ0FBQyxDQUFBO0FBQ2xGLDRDQUEwQyxtREFBbUQsQ0FBQyxDQUFBO0FBQzlGLDJDQUF5QyxrREFBa0QsQ0FBQyxDQUFBO0FBRTVGLGlDQUFnQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzlELDZCQUE0Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3RELGtDQUFpQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ2hFLDRCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3BELDhDQUEwQyx3Q0FBd0MsQ0FBQyxDQUFBO0FBRW5GLGtDQUFpQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQzdFLHVDQUFxQyxxREFBcUQsQ0FBQyxDQUFBO0FBRTNGLHNCQUE2QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBRTlELHlDQUFxQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3hFLHlDQUFzQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBcUJ6RTtJQUFBO0lBQXlCLENBQUM7SUFqQjFCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUUsZ0NBQWEsRUFBRSxtQkFBVyxFQUFFLDJCQUFtQjtnQkFDL0MscUJBQU8sRUFBRSx5QkFBYyxDQUFDLE9BQU8sRUFBRTtnQkFDakMsMkJBQVcsRUFBRSx5QkFBZSxFQUFFLGdDQUFnQixFQUFFLGlCQUFVO2dCQUMxRCx1QkFBYSxFQUFFLG9DQUFnQixFQUFFLDZDQUFvQixFQUFFLGlDQUFpQixDQUFFO1lBQ3JGLFlBQVksRUFBRSxDQUFFLDRCQUFZLEVBQUUsbURBQXVCLEVBQUUsdUJBQWUsRUFBRSx1QkFBZTtnQkFDdkUsdUJBQWUsRUFBRSwyQkFBbUIsRUFBRSwwQkFBa0I7Z0JBQ3hELDJCQUFtQixFQUFFLDZCQUFxQixFQUFFLHlCQUFpQjtnQkFDN0Qsd0JBQWdCLEVBQUUseUJBQWlCLEVBQUUsc0JBQWMsRUFBRSx5QkFBaUI7Z0JBQ3RFLHNCQUFjLEVBQUUsK0JBQXVCLEVBQUUsK0JBQXVCO2dCQUNoRSw0QkFBb0IsRUFBRSwyQkFBbUIsRUFBRSwrQkFBdUI7Z0JBQ2xFLCtDQUFvQixFQUFFLGdEQUFxQixFQUFFLDJDQUFtQjtnQkFDaEUsdURBQXlCLEVBQUUscURBQXdCLENBQUU7WUFDckUsU0FBUyxFQUFFLENBQUUsNEJBQVksQ0FBRTtZQUMzQixTQUFTLEVBQUUsQ0FBRSxFQUFDLE9BQU8sRUFBRSxnQkFBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUMsRUFBRSxpQ0FBbUIsRUFBRSxrQ0FBZSxFQUFFLDBCQUFXLEVBQUUsb0JBQVk7Z0JBQ3hHLG9DQUFnQixFQUFFLHdCQUFVLEVBQUUseURBQXlCLENBQUU7U0FDdkUsQ0FBQzs7aUJBQUE7SUFDdUIsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsaUJBQVMsWUFBSSxDQUFBIiwiZmlsZSI6ImFwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTE9DQUxFX0lEIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyByb3V0aW5nLFxyXG4gICAgICAgICBhcHBSb3V0aW5nUHJvdmlkZXJzIH0gIGZyb20gJy4vYXBwLnJvdXRpbmcnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSAgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFiVmlld01vZHVsZSwgSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5pbXBvcnQgeyBBbGVydE1vZHVsZSwgRGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IE5nMkJzM01vZGFsTW9kdWxlIH0gZnJvbSAnbmcyLWJzMy1tb2RhbC9uZzItYnMzLW1vZGFsJztcclxuXHJcbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCwgSGVhZGVyQ29tcG9uZW50LCBGb290ZXJDb21wb25lbnQsIFxyXG4gIENhdGVnb3JpZXNDb21wb25lbnQsIERlc2lnbmVyc0NvbXBvbmVudCwgSG93SXRXb3Jrc0NvbXBvbmVudCwgXHJcbiAgUGFnZU5vdEZvdW5kQ29tcG9uZW50LCBCU0FsZXJ0Q29tcG9uZW50LCBEYXRlVGltZUNvbXBvbmVudCxcclxuICBDb250ZXN0c0NvbXBvbmVudCwgUmVnaXN0ZXJDb21wb25lbnQsIExvZ2luQ29tcG9uZW50LCBXaW5uZXJzR2FsbGVyeUNvbXBvbmVudCxcclxuICBQdWJsaXNoQ29udGVzdENvbXBvbmVudCwgUHJvZmlsZVBhZ2VDb21wb25lbnQsIE15Q29udGVzdHNDb21wb25lbnQsXHJcbiAgQ29udGVzdERldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xyXG5pbXBvcnQgeyBVc2VyTmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZiYXIvdXNlci1uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN0YXJSYXRpbmdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udGVzdHMvc3Rhci1yYXRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3VibWl0aW9uRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb250ZXN0cy9zdWJtaXRpb24tZGV0YWlscy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21tZW50c1NlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udGVzdHMvY29tbWVudHMtc2VjdGlvbi5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgQ29udGVzdHNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IERlc2lnbmVyc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Rlc2lnbmVycy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZU9uTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi9ndWFyZHMvY2FuLWFjdGl2YXRlLW9uLWxvZ2luLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgQ2F0ZWdvcmllc01vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMubW9kdWxlJztcclxuaW1wb3J0IHsgUHVibGlzaENvbnRlc3RNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcHVibGlzaC1jb250ZXN0L3B1Ymxpc2gtY29udGVzdC5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQsIEVycm9yU2VydmljZSB9IGZyb20gJy4vZXJyb3JzL2luZGV4JztcclxuXHJcbmltcG9ydCB7IExvY2FsRGF0ZUZyb21Ob3dQaXBlIH0gZnJvbSAnLi9waXBlcy9sb2NhbC1kYXRlLWZyb20tbm93LXBpcGUnO1xyXG5pbXBvcnQgeyBMb2NhbERhdGVTdGFuZGFydFBpcGUgfSBmcm9tICcuL3BpcGVzL2xvY2FsLWRhdGUtc3RhbmRhcnQtcGlwZSc7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogWyBCcm93c2VyTW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgXHJcbiAgICAgICAgICAgICByb3V0aW5nLCBNYXRlcmlhbE1vZHVsZS5mb3JSb290KCksIFxyXG4gICAgICAgICAgICAgQWxlcnRNb2R1bGUsIElucHV0VGV4dE1vZHVsZSwgRGF0ZXBpY2tlck1vZHVsZSwgSHR0cE1vZHVsZSwgXHJcbiAgICAgICAgICAgICBUYWJWaWV3TW9kdWxlLCBDYXRlZ29yaWVzTW9kdWxlLCBQdWJsaXNoQ29udGVzdE1vZHVsZSwgTmcyQnMzTW9kYWxNb2R1bGUgXSxcclxuICBkZWNsYXJhdGlvbnM6IFsgQXBwQ29tcG9uZW50LCBVc2VyTmF2aWdhdGlvbkNvbXBvbmVudCwgTmF2YmFyQ29tcG9uZW50LCBIZWFkZXJDb21wb25lbnQsIFxyXG4gICAgICAgICAgICAgICAgICBGb290ZXJDb21wb25lbnQsIENhdGVnb3JpZXNDb21wb25lbnQsIERlc2lnbmVyc0NvbXBvbmVudCwgXHJcbiAgICAgICAgICAgICAgICAgIEhvd0l0V29ya3NDb21wb25lbnQsIFBhZ2VOb3RGb3VuZENvbXBvbmVudCwgRGF0ZVRpbWVDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgIEJTQWxlcnRDb21wb25lbnQsIENvbnRlc3RzQ29tcG9uZW50LCBMb2dpbkNvbXBvbmVudCwgUmVnaXN0ZXJDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgIEVycm9yQ29tcG9uZW50LCBXaW5uZXJzR2FsbGVyeUNvbXBvbmVudCwgUHVibGlzaENvbnRlc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgIFByb2ZpbGVQYWdlQ29tcG9uZW50LCBNeUNvbnRlc3RzQ29tcG9uZW50LCBDb250ZXN0RGV0YWlsc0NvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgTG9jYWxEYXRlRnJvbU5vd1BpcGUsIExvY2FsRGF0ZVN0YW5kYXJ0UGlwZSwgU3RhclJhdGluZ0NvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgU3VibWl0aW9uRGV0YWlsc0NvbXBvbmVudCwgQ29tbWVudHNTZWN0aW9uQ29tcG9uZW50IF0sXHJcbiAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxyXG4gIHByb3ZpZGVyczogWyB7cHJvdmlkZTogTE9DQUxFX0lELCB1c2VWYWx1ZTogXCJsdC1MVFwifSwgYXBwUm91dGluZ1Byb3ZpZGVycywgQ29udGVzdHNTZXJ2aWNlLCBBdXRoU2VydmljZSwgRXJyb3JTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICAgRGVzaWduZXJzU2VydmljZSwgQXBpU2VydmljZSwgQ2FuQWN0aXZhdGVPbkxvZ2luU2VydmljZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==
