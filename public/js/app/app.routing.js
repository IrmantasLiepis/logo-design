"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./components/index');
var can_activate_on_login_service_1 = require('./guards/can-activate-on-login.service');
var appRoutes = [
    { path: 'konkursai', children: [
            { path: '', component: index_1.ContestsComponent },
            { path: ':id', component: index_1.ContestDetailsComponent }
        ] },
    { path: 'mano-konkursai', children: [
            { path: '', component: index_1.MyContestsComponent }
        ] },
    { path: 'paskelbti-konkursa', component: index_1.PublishContestComponent },
    { path: 'kategorijos', component: index_1.CategoriesComponent },
    { path: 'nugaletoju-galerija', component: index_1.WinnersGalleryComponent },
    { path: 'dizaineriai', component: index_1.DesignersComponent },
    { path: 'kaip-tai-veikia', component: index_1.HowItWorksComponent },
    { path: 'prisijungti', component: index_1.LoginComponent },
    { path: 'registracija', component: index_1.RegisterComponent },
    { path: 'profilis', component: index_1.ProfilePageComponent, canActivate: [can_activate_on_login_service_1.CanActivateOnLoginService] },
    { path: 'nerasta', component: index_1.PageNotFoundComponent },
    { path: '', component: index_1.HeaderComponent },
    { path: '**', redirectTo: 'nerasta' }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1QkFBcUMsaUJBQWlCLENBQUMsQ0FBQTtBQUl2RCxzQkFHbUYsb0JBQW9CLENBQUMsQ0FBQTtBQUV4Ryw4Q0FBMEMsd0NBQXdDLENBQUMsQ0FBQTtBQUduRixJQUFNLFNBQVMsR0FBVztJQUN4QixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFO1lBQzdCLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUseUJBQWlCLEVBQUM7WUFDeEMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSwrQkFBdUIsRUFBQztTQUNsRCxFQUFFO0lBQ0gsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFO1lBQ2xDLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsMkJBQW1CLEVBQUM7U0FDM0MsRUFBRTtJQUNILEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSwrQkFBdUIsRUFBRTtJQUNsRSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDJCQUFtQixFQUFFO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLFNBQVMsRUFBRSwrQkFBdUIsRUFBRTtJQUNuRSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDBCQUFrQixFQUFFO0lBQ3RELEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSwyQkFBbUIsRUFBRTtJQUMzRCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLHNCQUFjLEVBQUU7SUFDbEQsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSx5QkFBaUIsRUFBRTtJQUN0RCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDRCQUFvQixFQUFFLFdBQVcsRUFBRSxDQUFDLHlEQUF5QixDQUFDLEVBQUU7SUFDL0YsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSw2QkFBcUIsRUFBRTtJQUNyRCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLHVCQUFlLEVBQUU7SUFDeEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUU7Q0FDdEMsQ0FBQztBQUVXLDJCQUFtQixHQUFVLEVBRXpDLENBQUM7QUFFVyxlQUFPLEdBQXdCLHFCQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5yb3V0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50LCBDYXRlZ29yaWVzQ29tcG9uZW50LCBEZXNpZ25lcnNDb21wb25lbnQsXHJcbiAgICAgICAgIEhvd0l0V29ya3NDb21wb25lbnQsIFBhZ2VOb3RGb3VuZENvbXBvbmVudCwgQ29udGVzdHNDb21wb25lbnQsXHJcbiAgICAgICAgIExvZ2luQ29tcG9uZW50LCBSZWdpc3RlckNvbXBvbmVudCwgV2lubmVyc0dhbGxlcnlDb21wb25lbnQsIFB1Ymxpc2hDb250ZXN0Q29tcG9uZW50LFxyXG4gICAgICAgICBQcm9maWxlUGFnZUNvbXBvbmVudCwgTXlDb250ZXN0c0NvbXBvbmVudCwgQ29udGVzdERldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xyXG4gICAgICBcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGVPbkxvZ2luU2VydmljZSB9IGZyb20gJy4vZ3VhcmRzL2Nhbi1hY3RpdmF0ZS1vbi1sb2dpbi5zZXJ2aWNlJztcclxuXHJcblxyXG5jb25zdCBhcHBSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7IHBhdGg6ICdrb25rdXJzYWknLCBjaGlsZHJlbjogW1xyXG4gICAge3BhdGg6ICcnLCBjb21wb25lbnQ6IENvbnRlc3RzQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnOmlkJywgY29tcG9uZW50OiBDb250ZXN0RGV0YWlsc0NvbXBvbmVudH1cclxuICBdIH0sXHJcbiAgeyBwYXRoOiAnbWFuby1rb25rdXJzYWknLCBjaGlsZHJlbjogW1xyXG4gICAge3BhdGg6ICcnLCBjb21wb25lbnQ6IE15Q29udGVzdHNDb21wb25lbnR9XHJcbiAgXSB9LFxyXG4gIHsgcGF0aDogJ3Bhc2tlbGJ0aS1rb25rdXJzYScsIGNvbXBvbmVudDogUHVibGlzaENvbnRlc3RDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdrYXRlZ29yaWpvcycsIGNvbXBvbmVudDogQ2F0ZWdvcmllc0NvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ251Z2FsZXRvanUtZ2FsZXJpamEnLCBjb21wb25lbnQ6IFdpbm5lcnNHYWxsZXJ5Q29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnZGl6YWluZXJpYWknLCBjb21wb25lbnQ6IERlc2lnbmVyc0NvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ2thaXAtdGFpLXZlaWtpYScsIGNvbXBvbmVudDogSG93SXRXb3Jrc0NvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3ByaXNpanVuZ3RpJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3JlZ2lzdHJhY2lqYScsIGNvbXBvbmVudDogUmVnaXN0ZXJDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdwcm9maWxpcycsIGNvbXBvbmVudDogUHJvZmlsZVBhZ2VDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbQ2FuQWN0aXZhdGVPbkxvZ2luU2VydmljZV0gfSxcclxuICB7IHBhdGg6ICduZXJhc3RhJywgY29tcG9uZW50OiBQYWdlTm90Rm91bmRDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEhlYWRlckNvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ25lcmFzdGEnIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcHBSb3V0aW5nUHJvdmlkZXJzOiBhbnlbXSA9IFtcclxuXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGluZzogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyk7Il19
