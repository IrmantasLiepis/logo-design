import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import { HeaderComponent, CategoriesComponent, DesignersComponent,
         HowItWorksComponent, PageNotFoundComponent, ContestsComponent,
         LoginComponent, RegisterComponent, WinnersGalleryComponent, PublishContestComponent,
         ProfilePageComponent, MyContestsComponent, ContestDetailsComponent, MailListComponent,
        MailCreateComponent, MailCreateForUserComponent } from './components/index';
      
import { CanActivateOnLoginService } from './guards/can-activate-on-login.service';


const appRoutes: Routes = [
  { path: 'konkursai', children: [
    {path: '', component: ContestsComponent},
    {path: ':id', component: ContestDetailsComponent}
  ] },
  { path: 'mano-konkursai', children: [
    {path: '', component: MyContestsComponent}
  ] },
  { path: 'paskelbti-konkursa', component: PublishContestComponent },
  { path: 'kategorijos', component: CategoriesComponent },
  { path: 'nugaletoju-galerija', component: WinnersGalleryComponent },
  { path: 'dizaineriai', component: DesignersComponent },
  { path: 'kaip-tai-veikia', component: HowItWorksComponent },
  { path: 'prisijungti', component: LoginComponent },
  { path: 'registracija', component: RegisterComponent },
  //{ path: 'profilis', component: ProfilePageComponent, canActivate: [CanActivateOnLoginService] },
  { path: 'profilis', children: [
    {path: '', component: ProfilePageComponent, canActivate: [CanActivateOnLoginService] },
    {path: 'pastas', children: [
      {path: '', component: MailListComponent, canActivateChild: [CanActivateOnLoginService]},
      {path: 'rasyti-laiska', children: [
        {path: '', component: MailCreateComponent, canActivateChild: [CanActivateOnLoginService]},
        {path: ':nickname', component: MailCreateForUserComponent, canActivateChild: [CanActivateOnLoginService]}
        ]}
      ]}
    ]},
  { path: 'nerasta', component: PageNotFoundComponent },
  { path: '', component: HeaderComponent },
  { path: '**', redirectTo: 'nerasta' }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);