"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./components/index');
var can_activate_profile_page_service_1 = require('./guards/can-activate-profile-page.service');
var appRoutes = [
    { path: 'konkursai', component: index_1.ContestsComponent },
    { path: 'paskelbti-konkursa', component: index_1.PublishContestComponent },
    { path: 'kategorijos', component: index_1.CategoriesComponent },
    { path: 'nugaletoju-galerija', component: index_1.WinnersGalleryComponent },
    { path: 'dizaineriai', component: index_1.DesignersComponent },
    { path: 'kaip-tai-veikia', component: index_1.HowItWorksComponent },
    { path: 'prisijungti', component: index_1.LoginComponent },
    { path: 'registracija', component: index_1.RegisterComponent },
    { path: 'profilis', component: index_1.ProfilePageComponent, canActivate: [can_activate_profile_page_service_1.CanActivateProfilePageService] },
    { path: 'nerasta', component: index_1.PageNotFoundComponent },
    { path: '', component: index_1.HeaderComponent },
    { path: '**', redirectTo: 'nerasta' }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1QkFBcUMsaUJBQWlCLENBQUMsQ0FBQTtBQUl2RCxzQkFHcUMsb0JBQW9CLENBQUMsQ0FBQTtBQUUxRCxrREFBOEMsNENBQTRDLENBQUMsQ0FBQTtBQUczRixJQUFNLFNBQVMsR0FBVztJQUN4QixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHlCQUFpQixFQUFFO0lBQ25ELEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSwrQkFBdUIsRUFBRTtJQUNsRSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDJCQUFtQixFQUFFO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLFNBQVMsRUFBRSwrQkFBdUIsRUFBRTtJQUNuRSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDBCQUFrQixFQUFFO0lBQ3RELEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSwyQkFBbUIsRUFBRTtJQUMzRCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLHNCQUFjLEVBQUU7SUFDbEQsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSx5QkFBaUIsRUFBRTtJQUN0RCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDRCQUFvQixFQUFFLFdBQVcsRUFBRSxDQUFDLGlFQUE2QixDQUFDLEVBQUU7SUFDbkcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSw2QkFBcUIsRUFBRTtJQUNyRCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLHVCQUFlLEVBQUU7SUFDeEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUU7Q0FDdEMsQ0FBQztBQUVXLDJCQUFtQixHQUFVLEVBRXpDLENBQUM7QUFFVyxlQUFPLEdBQXdCLHFCQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5yb3V0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50LCBDYXRlZ29yaWVzQ29tcG9uZW50LCBEZXNpZ25lcnNDb21wb25lbnQsXHJcbiAgICAgICAgIEhvd0l0V29ya3NDb21wb25lbnQsIFBhZ2VOb3RGb3VuZENvbXBvbmVudCwgQ29udGVzdHNDb21wb25lbnQsXHJcbiAgICAgICAgIExvZ2luQ29tcG9uZW50LCBSZWdpc3RlckNvbXBvbmVudCwgV2lubmVyc0dhbGxlcnlDb21wb25lbnQsIFB1Ymxpc2hDb250ZXN0Q29tcG9uZW50LFxyXG4gICAgICAgICBQcm9maWxlUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XHJcbiAgICAgIFxyXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZVByb2ZpbGVQYWdlU2VydmljZSB9IGZyb20gJy4vZ3VhcmRzL2Nhbi1hY3RpdmF0ZS1wcm9maWxlLXBhZ2Uuc2VydmljZSc7XHJcblxyXG5cclxuY29uc3QgYXBwUm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgeyBwYXRoOiAna29ua3Vyc2FpJywgY29tcG9uZW50OiBDb250ZXN0c0NvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3Bhc2tlbGJ0aS1rb25rdXJzYScsIGNvbXBvbmVudDogUHVibGlzaENvbnRlc3RDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdrYXRlZ29yaWpvcycsIGNvbXBvbmVudDogQ2F0ZWdvcmllc0NvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ251Z2FsZXRvanUtZ2FsZXJpamEnLCBjb21wb25lbnQ6IFdpbm5lcnNHYWxsZXJ5Q29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnZGl6YWluZXJpYWknLCBjb21wb25lbnQ6IERlc2lnbmVyc0NvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ2thaXAtdGFpLXZlaWtpYScsIGNvbXBvbmVudDogSG93SXRXb3Jrc0NvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3ByaXNpanVuZ3RpJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3JlZ2lzdHJhY2lqYScsIGNvbXBvbmVudDogUmVnaXN0ZXJDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdwcm9maWxpcycsIGNvbXBvbmVudDogUHJvZmlsZVBhZ2VDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbQ2FuQWN0aXZhdGVQcm9maWxlUGFnZVNlcnZpY2VdIH0sXHJcbiAgeyBwYXRoOiAnbmVyYXN0YScsIGNvbXBvbmVudDogUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBIZWFkZXJDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICduZXJhc3RhJyB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgYXBwUm91dGluZ1Byb3ZpZGVyczogYW55W10gPSBbXHJcblxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRpbmc6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMpOyJdfQ==
