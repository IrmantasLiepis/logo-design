"use strict";
var router_1 = require('@angular/router');
var categories_component_1 = require('./categories.component');
var categories_dashboard_component_1 = require('./categories-dashboard/categories-dashboard.component');
var index_1 = require('./logo-and-business-cards/index');
var index_2 = require('./web-and-app-design/index');
var index_3 = require('./business-and-advertising/index');
var index_4 = require('./clothing-and-merchandise/index');
var index_5 = require('./art-and-illustration/index');
var index_6 = require('./invitations-design/index');
var index_7 = require('./packaging-and-label/index');
var index_8 = require('./books-and-magazines/index');
var other_designs_component_1 = require('./other-designs/other-designs.component');
var categoriesRoutes = [
    {
        path: 'kategorijos',
        component: categories_component_1.CategoriesComponent,
        children: [
            // Logotipai, Verslo korteles
            { path: 'verslo-korteles-dizainas', component: index_1.BusinessCardComponent },
            { path: 'logotipo-dizainas', component: index_1.LogoComponent },
            { path: 'logotipo-ir-verslo-korteles-dizainas', component: index_1.LogoAndBusinessCardComponent },
            // Web dizainas
            { path: 'reklamines-juostos-dizainas', component: index_2.AbBannerComponent },
            { path: 'puslapio-antrastes-dizainas', component: index_2.WebsiteHeaderComponent },
            { path: 'tinklarascio-dizainas', component: index_2.BlogDesignComponent },
            { path: 'esamo-dizaino-keitimas', component: index_2.WebsiteRedesignComponent },
            { path: 'youtube-kanalo-dizainas', component: index_2.YoutubeChannelComponent },
            { path: 'twitter-paskyros-dizainas', component: index_2.TwitterDesignComponent },
            { path: 'wordpress-temos-dizainas', component: index_2.WordpressThemeComponent },
            { path: 'ios-aplikacijos-dizainas', component: index_2.IosAppComponent },
            { path: 'android-aplikacijos-dizainas', component: index_2.AndroidAppComponent },
            { path: 'mobilios-aplikacijos-dizainas', component: index_2.MobileAppComponent },
            { path: 'ikonu-dizainas', component: index_2.IconDesignComponent },
            { path: 'pagrindinio-puslapio-dizainas', component: index_2.FrontPageComponent },
            { path: 'facebook-virselio-dizainas', component: index_2.FacebookDesignComponent },
            { path: 'flash-reklamos-dizainas', component: index_2.FlashBannerComponent },
            { path: 'kitas-puslapio-ar-aplikacijos-dizainas', component: index_2.OtherWebAndAppDesignComponent },
            // Verslas, Reklama
            { path: 'reklamos-dizainas', component: index_3.AbDesignComponent },
            { path: 'brosiuros-dizainas', component: index_3.BookletComponent },
            { path: 'skelbimu-lentos-skelbimo-dizainas', component: index_3.BillboardComponent },
            { path: 'reklamines-masinos-dizainas', component: index_3.CarAdComponent },
            { path: 'skrajutes-dizainas', component: index_3.LeafletComponent },
            { path: 'atvirutes-dizainas', component: index_3.PostcardComponent },
            { path: 'el-pasto-pranesimo-dizainas', component: index_3.EmailDesignComponent },
            { path: 'meniu-dizainas', component: index_3.FoodMenuComponent },
            { path: 'powerpoint-prezentacijos-dizainas', component: index_3.PowerPointDesignComponent },
            { path: 'reziume-dizainas', component: index_3.ResumeDesignComponent },
            { path: 'microsoft-word-dokumento-dizainas', component: index_3.MicrosoftWordDesignComponent },
            { path: 'kitas-verslo-ar-reklamos-dizainas', component: index_3.OtherBusinessOrAdvertisingComponent },
            // Drabužiai, galanterija
            //{ path: 'puodeliu-dizainas', component: MugDesignComponent },
            { path: 'kepures-dizainas', component: index_4.CapDesignComponent },
            { path: 'marskineliu-dizainas', component: index_4.TShirtDesignComponent },
            { path: 'megztiniu-dizainas', component: index_4.SweatShirtDesignComponent },
            { path: 'galanterijos-dizainas', component: index_4.HaberDasheryDesignComponent },
            { path: 'kitu-drabuziu-dizainas', component: index_4.OtherClothingOrMerchandiseComponent },
            // Art & ilustration
            { path: '3d-dizainas', component: index_5.ThreeDDesignComponent },
            { path: 'cd-virselio-dizainas', component: index_5.CdCoverDesignComponent },
            { path: 'vaikisku-iliustraciju-dizainas', component: index_5.KidsIllustrationDesignComponent },
            { path: 'iliustraciju-dizainas', component: index_5.IllustrationDesignComponent },
            { path: 'tatuiruotes-dizainas', component: index_5.TattooDesignComponent },
            { path: 'lipduku-dizainas', component: index_5.StickerDesignComponent },
            { path: 'kitas-meno-dizainas', component: index_5.OtherArtOrIllustrationDesignComponent },
            // Pakvietimai
            { path: 'vestuviu-pakvietimo-dizainas', component: index_6.MarriageInvitationDesignComponent },
            { path: 'vaiko-krikstynu-pakvietimo-dizainas', component: index_6.ChildChristeningInvitationDesignComponent },
            { path: 'pakvietimo-korteles-dizainas', component: index_6.InvitationCardDesignComponent },
            { path: 'jubiliejaus-pakvietimo-dizainas', component: index_6.AnniversaryInvitationDesignComponent },
            { path: 'gimtadienio-pakvietimo-dizainas', component: index_6.BirthdayInvitationDesignComponent },
            { path: 'kitos-progos-pakvietimo-dizainas', component: index_6.OtherInvitationDesignComponent },
            // Packaging & label 
            { path: 'gerimu-dizainas', component: index_7.DrinkLabelDesignComponent },
            { path: 'maisto-produktu-dizainas', component: index_7.FoodProductsLabelOrPackagingDesignComponent },
            { path: 'kosmetikos-priemoniu-dizainas', component: index_7.CosmeticsProductsLabelOrPackagingDesignComponent },
            { path: 'kitu-prekiu-dizainas', component: index_7.OtherProductsLabelOrPackagingDesignComponent },
            // Knygos ir Zurnalai
            { path: 'knygos-virselio-dizainas', component: index_8.BookCoverDesignComponent },
            { path: 'e-knygos-dizainas', component: index_8.EBookCoverDesignComponent },
            { path: 'zurnalo-virselio-dizainas', component: index_8.MagazineCoverDesignComponent },
            // Other...
            { path: 'kitas-dizainas', component: other_designs_component_1.OtherDesignsComponent },
            { path: '', component: categories_dashboard_component_1.CategoriesDashboardComponent },
        ]
    }
];
exports.categoriesRouting = router_1.RouterModule.forChild(categoriesRoutes);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRXZELHFDQUFvQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzdELCtDQUE2Qyx1REFBdUQsQ0FBQyxDQUFBO0FBQ3JHLHNCQUFtRixpQ0FBaUMsQ0FBQyxDQUFBO0FBQ3JILHNCQUlnRyw0QkFBNEIsQ0FBQyxDQUFBO0FBQzdILHNCQUcrRixrQ0FBa0MsQ0FBQyxDQUFBO0FBQ2xJLHNCQUVpRSxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3BHLHNCQUV1Qyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ3RFLHNCQUVrRiw0QkFBNEIsQ0FBQyxDQUFBO0FBQy9HLHNCQUMwRyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3hJLHNCQUFrRyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ2hJLHdDQUFzQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBR2hGLElBQU0sZ0JBQWdCLEdBQVc7SUFDL0I7UUFDRSxJQUFJLEVBQUUsYUFBYTtRQUNuQixTQUFTLEVBQUUsMENBQW1CO1FBQzlCLFFBQVEsRUFBRTtZQUNSLDZCQUE2QjtZQUM3QixFQUFFLElBQUksRUFBRSwwQkFBMEIsRUFBRSxTQUFTLEVBQUUsNkJBQXFCLEVBQUU7WUFDdEUsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLHFCQUFhLEVBQUU7WUFDdkQsRUFBRSxJQUFJLEVBQUUsc0NBQXNDLEVBQUUsU0FBUyxFQUFFLG9DQUE0QixFQUFFO1lBQ3pGLGVBQWU7WUFDZixFQUFFLElBQUksRUFBRSw2QkFBNkIsRUFBRSxTQUFTLEVBQUUseUJBQWlCLEVBQUU7WUFDckUsRUFBRSxJQUFJLEVBQUUsNkJBQTZCLEVBQUUsU0FBUyxFQUFFLDhCQUFzQixFQUFFO1lBQzFFLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSwyQkFBbUIsRUFBRTtZQUNqRSxF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RUFBRSxpQ0FBeUIsRUFBRTtZQUNuRSxFQUFFLElBQUksRUFBRSwyQkFBMkIsRUFBRSxTQUFTLEVBQUUsb0NBQTRCLEVBQUU7WUFDOUUsV0FBVztZQUNYLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSwrQ0FBcUIsRUFBRTtZQUM1RCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDZEQUE0QixFQUFFO1NBQ3REO0tBQ0Y7Q0FDRixDQUFDO0FBRVcseUJBQWlCLEdBQXdCLHFCQUFZLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMucm91dGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYXRlZ29yaWVzQ29tcG9uZW50IH0gZnJvbSAnLi9jYXRlZ29yaWVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhdGVnb3JpZXNEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2NhdGVnb3JpZXMtZGFzaGJvYXJkL2NhdGVnb3JpZXMtZGFzaGJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJ1c2luZXNzQ2FyZENvbXBvbmVudCwgTG9nb0NvbXBvbmVudCwgTG9nb0FuZEJ1c2luZXNzQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vbG9nby1hbmQtYnVzaW5lc3MtY2FyZHMvaW5kZXgnO1xyXG5pbXBvcnQgeyBBYkJhbm5lckNvbXBvbmVudCwgQW5kcm9pZEFwcENvbXBvbmVudCwgQmxvZ0Rlc2lnbkNvbXBvbmVudCxcclxuICAgICAgICAgRmFjZWJvb2tEZXNpZ25Db21wb25lbnQsIEZsYXNoQmFubmVyQ29tcG9uZW50LCBGcm9udFBhZ2VDb21wb25lbnQsXHJcbiAgICAgICAgIEljb25EZXNpZ25Db21wb25lbnQsIElvc0FwcENvbXBvbmVudCwgTW9iaWxlQXBwQ29tcG9uZW50LFxyXG4gICAgICAgICBUd2l0dGVyRGVzaWduQ29tcG9uZW50LCBXZWJzaXRlSGVhZGVyQ29tcG9uZW50LCBXZWJzaXRlUmVkZXNpZ25Db21wb25lbnQsXHJcbiAgICAgICAgIFdvcmRwcmVzc1RoZW1lQ29tcG9uZW50LCBZb3V0dWJlQ2hhbm5lbENvbXBvbmVudCwgT3RoZXJXZWJBbmRBcHBEZXNpZ25Db21wb25lbnQgfSBmcm9tICcuL3dlYi1hbmQtYXBwLWRlc2lnbi9pbmRleCc7XHJcbmltcG9ydCB7IEFiRGVzaWduQ29tcG9uZW50LCBCaWxsYm9hcmRDb21wb25lbnQsIEJvb2tsZXRDb21wb25lbnQsXHJcbiAgICAgICAgIENhckFkQ29tcG9uZW50LCBFbWFpbERlc2lnbkNvbXBvbmVudCwgRm9vZE1lbnVDb21wb25lbnQsXHJcbiAgICAgICAgIExlYWZsZXRDb21wb25lbnQsIE90aGVyQnVzaW5lc3NPckFkdmVydGlzaW5nQ29tcG9uZW50LCBQb3N0Y2FyZENvbXBvbmVudCxcclxuICAgICAgICAgUG93ZXJQb2ludERlc2lnbkNvbXBvbmVudCwgTWljcm9zb2Z0V29yZERlc2lnbkNvbXBvbmVudCwgUmVzdW1lRGVzaWduQ29tcG9uZW50IH0gZnJvbSAnLi9idXNpbmVzcy1hbmQtYWR2ZXJ0aXNpbmcvaW5kZXgnO1xyXG5pbXBvcnQgeyBIYWJlckRhc2hlcnlEZXNpZ25Db21wb25lbnQsIENhcERlc2lnbkNvbXBvbmVudCwgTWVyY2hhbmRpc2VEZXNpZ25Db21wb25lbnQsXHJcbiAgICAgICAgIE11Z0Rlc2lnbkNvbXBvbmVudCwgT3RoZXJDbG90aGluZ09yTWVyY2hhbmRpc2VDb21wb25lbnQsXHJcbiAgICAgICAgIFN3ZWF0U2hpcnREZXNpZ25Db21wb25lbnQsIFRTaGlydERlc2lnbkNvbXBvbmVudCB9IGZyb20gJy4vY2xvdGhpbmctYW5kLW1lcmNoYW5kaXNlL2luZGV4JztcclxuaW1wb3J0IHsgQ2RDb3ZlckRlc2lnbkNvbXBvbmVudCwgSWxsdXN0cmF0aW9uRGVzaWduQ29tcG9uZW50LCBLaWRzSWxsdXN0cmF0aW9uRGVzaWduQ29tcG9uZW50LFxyXG4gICAgICAgICBPdGhlckFydE9ySWxsdXN0cmF0aW9uRGVzaWduQ29tcG9uZW50LCBUYXR0b29EZXNpZ25Db21wb25lbnQsIFRocmVlRERlc2lnbkNvbXBvbmVudCxcclxuICAgICAgICAgU3RpY2tlckRlc2lnbkNvbXBvbmVudCB9IGZyb20gJy4vYXJ0LWFuZC1pbGx1c3RyYXRpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBBbm5pdmVyc2FyeUludml0YXRpb25EZXNpZ25Db21wb25lbnQsIEJpcnRoZGF5SW52aXRhdGlvbkRlc2lnbkNvbXBvbmVudCwgXHJcbiAgICAgICAgIENoaWxkQ2hyaXN0ZW5pbmdJbnZpdGF0aW9uRGVzaWduQ29tcG9uZW50LCBJbnZpdGF0aW9uQ2FyZERlc2lnbkNvbXBvbmVudCxcclxuICAgICAgICAgTWFycmlhZ2VJbnZpdGF0aW9uRGVzaWduQ29tcG9uZW50LCBPdGhlckludml0YXRpb25EZXNpZ25Db21wb25lbnQgfSBmcm9tICcuL2ludml0YXRpb25zLWRlc2lnbi9pbmRleCc7XHJcbmltcG9ydCB7IENvc21ldGljc1Byb2R1Y3RzTGFiZWxPclBhY2thZ2luZ0Rlc2lnbkNvbXBvbmVudCwgRHJpbmtMYWJlbERlc2lnbkNvbXBvbmVudCxcclxuICAgICAgICAgRm9vZFByb2R1Y3RzTGFiZWxPclBhY2thZ2luZ0Rlc2lnbkNvbXBvbmVudCwgT3RoZXJQcm9kdWN0c0xhYmVsT3JQYWNrYWdpbmdEZXNpZ25Db21wb25lbnQgfSBmcm9tICcuL3BhY2thZ2luZy1hbmQtbGFiZWwvaW5kZXgnO1xyXG5pbXBvcnQgeyBCb29rQ292ZXJEZXNpZ25Db21wb25lbnQsIEVCb29rQ292ZXJEZXNpZ25Db21wb25lbnQsIE1hZ2F6aW5lQ292ZXJEZXNpZ25Db21wb25lbnQgfSBmcm9tICcuL2Jvb2tzLWFuZC1tYWdhemluZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBPdGhlckRlc2lnbnNDb21wb25lbnQgfSBmcm9tICcuL290aGVyLWRlc2lnbnMvb3RoZXItZGVzaWducy5jb21wb25lbnQnO1xyXG5cclxuXHJcbmNvbnN0IGNhdGVnb3JpZXNSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAna2F0ZWdvcmlqb3MnLFxyXG4gICAgY29tcG9uZW50OiBDYXRlZ29yaWVzQ29tcG9uZW50LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgLy8gTG9nb3RpcGFpLCBWZXJzbG8ga29ydGVsZXNcclxuICAgICAgeyBwYXRoOiAndmVyc2xvLWtvcnRlbGVzLWRpemFpbmFzJywgY29tcG9uZW50OiBCdXNpbmVzc0NhcmRDb21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAnbG9nb3RpcG8tZGl6YWluYXMnLCBjb21wb25lbnQ6IExvZ29Db21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAnbG9nb3RpcG8taXItdmVyc2xvLWtvcnRlbGVzLWRpemFpbmFzJywgY29tcG9uZW50OiBMb2dvQW5kQnVzaW5lc3NDYXJkQ29tcG9uZW50IH0sXHJcbiAgICAgIC8vIFdlYiBkaXphaW5hc1xyXG4gICAgICB7IHBhdGg6ICdyZWtsYW1pbmVzLWp1b3N0b3MtZGl6YWluYXMnLCBjb21wb25lbnQ6IEFiQmFubmVyQ29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogJ3B1c2xhcGlvLWFudHJhc3Rlcy1kaXphaW5hcycsIGNvbXBvbmVudDogV2Vic2l0ZUhlYWRlckNvbXBvbmVudCB9LFxyXG4gICAgICB7IHBhdGg6ICd0aW5rbGFyYXNjaW8tZGl6YWluYXMnLCBjb21wb25lbnQ6IEJsb2dEZXNpZ25Db21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAnZXNhbW8tZGl6YWluby1rZWl0aW1hcycsIGNvbXBvbmVudDogV2Vic2l0ZVJlZGVzaWduQ29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogJ3lvdXR1YmUta2FuYWxvLWRpemFpbmFzJywgY29tcG9uZW50OiBZb3V0dWJlQ2hhbm5lbENvbXBvbmVudCB9LFxyXG4gICAgICB7IHBhdGg6ICd0d2l0dGVyLXBhc2t5cm9zLWRpemFpbmFzJywgY29tcG9uZW50OiBUd2l0dGVyRGVzaWduQ29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogJ3dvcmRwcmVzcy10ZW1vcy1kaXphaW5hcycsIGNvbXBvbmVudDogV29yZHByZXNzVGhlbWVDb21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAnaW9zLWFwbGlrYWNpam9zLWRpemFpbmFzJywgY29tcG9uZW50OiBJb3NBcHBDb21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAnYW5kcm9pZC1hcGxpa2FjaWpvcy1kaXphaW5hcycsIGNvbXBvbmVudDogQW5kcm9pZEFwcENvbXBvbmVudCB9LFxyXG4gICAgICB7IHBhdGg6ICdtb2JpbGlvcy1hcGxpa2FjaWpvcy1kaXphaW5hcycsIGNvbXBvbmVudDogTW9iaWxlQXBwQ29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogJ2lrb251LWRpemFpbmFzJywgY29tcG9uZW50OiBJY29uRGVzaWduQ29tcG9uZW50IH0sIC8vICtteWd0dWthaVxyXG4gICAgICB7IHBhdGg6ICdwYWdyaW5kaW5pby1wdXNsYXBpby1kaXphaW5hcycsIGNvbXBvbmVudDogRnJvbnRQYWdlQ29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogJ2ZhY2Vib29rLXZpcnNlbGlvLWRpemFpbmFzJywgY29tcG9uZW50OiBGYWNlYm9va0Rlc2lnbkNvbXBvbmVudCB9LFxyXG4gICAgICB7IHBhdGg6ICdmbGFzaC1yZWtsYW1vcy1kaXphaW5hcycsIGNvbXBvbmVudDogRmxhc2hCYW5uZXJDb21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAna2l0YXMtcHVzbGFwaW8tYXItYXBsaWthY2lqb3MtZGl6YWluYXMnLCBjb21wb25lbnQ6IE90aGVyV2ViQW5kQXBwRGVzaWduQ29tcG9uZW50IH0sXHJcbiAgICAgIC8vIFZlcnNsYXMsIFJla2xhbWFcclxuICAgICAgeyBwYXRoOiAncmVrbGFtb3MtZGl6YWluYXMnLCBjb21wb25lbnQ6IEFiRGVzaWduQ29tcG9uZW50IH0sIC8vIEJpbGxib2FyZCwgYm9vdGggYmFubmVyXHJcbiAgICAgIHsgcGF0aDogJ2Jyb3NpdXJvcy1kaXphaW5hcycsIGNvbXBvbmVudDogQm9va2xldENvbXBvbmVudCB9LCAvLyAzIHRhYnMgLyBib3RoIHNpZGVzXHJcbiAgICAgIHsgcGF0aDogJ3NrZWxiaW11LWxlbnRvcy1za2VsYmltby1kaXphaW5hcycsIGNvbXBvbmVudDogQmlsbGJvYXJkQ29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogJ3Jla2xhbWluZXMtbWFzaW5vcy1kaXphaW5hcycsIGNvbXBvbmVudDogQ2FyQWRDb21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAnc2tyYWp1dGVzLWRpemFpbmFzJywgY29tcG9uZW50OiBMZWFmbGV0Q29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogJ2F0dmlydXRlcy1kaXphaW5hcycsIGNvbXBvbmVudDogUG9zdGNhcmRDb21wb25lbnQgfSwgLy8gTFQgdmVydGltYXM/IExhacWha8WzIGRpemFpbmFzP1xyXG4gICAgICB7IHBhdGg6ICdlbC1wYXN0by1wcmFuZXNpbW8tZGl6YWluYXMnLCBjb21wb25lbnQ6IEVtYWlsRGVzaWduQ29tcG9uZW50IH0sIC8vIEVtYWlsIGRpemFpbmFzLCBuYXVqaWVubGFpc2tpYWlcclxuICAgICAgeyBwYXRoOiAnbWVuaXUtZGl6YWluYXMnLCBjb21wb25lbnQ6IEZvb2RNZW51Q29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogJ3Bvd2VycG9pbnQtcHJlemVudGFjaWpvcy1kaXphaW5hcycsIGNvbXBvbmVudDogUG93ZXJQb2ludERlc2lnbkNvbXBvbmVudCB9LFxyXG4gICAgICB7IHBhdGg6ICdyZXppdW1lLWRpemFpbmFzJywgY29tcG9uZW50OiBSZXN1bWVEZXNpZ25Db21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAnbWljcm9zb2Z0LXdvcmQtZG9rdW1lbnRvLWRpemFpbmFzJywgY29tcG9uZW50OiBNaWNyb3NvZnRXb3JkRGVzaWduQ29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogJ2tpdGFzLXZlcnNsby1hci1yZWtsYW1vcy1kaXphaW5hcycsIGNvbXBvbmVudDogT3RoZXJCdXNpbmVzc09yQWR2ZXJ0aXNpbmdDb21wb25lbnQgfSxcclxuICAgICAgLy8gRHJhYnXFvmlhaSwgZ2FsYW50ZXJpamFcclxuICAgIC8veyBwYXRoOiAncHVvZGVsaXUtZGl6YWluYXMnLCBjb21wb25lbnQ6IE11Z0Rlc2lnbkNvbXBvbmVudCB9LFxyXG4gICAgICB7IHBhdGg6ICdrZXB1cmVzLWRpemFpbmFzJywgY29tcG9uZW50OiBDYXBEZXNpZ25Db21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAnbWFyc2tpbmVsaXUtZGl6YWluYXMnLCBjb21wb25lbnQ6IFRTaGlydERlc2lnbkNvbXBvbmVudCB9LFxyXG4gICAgICB7IHBhdGg6ICdtZWd6dGluaXUtZGl6YWluYXMnLCBjb21wb25lbnQ6IFN3ZWF0U2hpcnREZXNpZ25Db21wb25lbnQgfSwgLy8gK2hvb2RpZXM/XHJcbiAgICAgIHsgcGF0aDogJ2dhbGFudGVyaWpvcy1kaXphaW5hcycsIGNvbXBvbmVudDogSGFiZXJEYXNoZXJ5RGVzaWduQ29tcG9uZW50IH0sIC8vZ2FsYW50ZXJpamEgICBcclxuICAgICAgeyBwYXRoOiAna2l0dS1kcmFidXppdS1kaXphaW5hcycsIGNvbXBvbmVudDogT3RoZXJDbG90aGluZ09yTWVyY2hhbmRpc2VDb21wb25lbnQgfSxcclxuICAgICAgLy8gQXJ0ICYgaWx1c3RyYXRpb25cclxuICAgICAgeyBwYXRoOiAnM2QtZGl6YWluYXMnLCBjb21wb25lbnQ6IFRocmVlRERlc2lnbkNvbXBvbmVudCB9LFxyXG4gICAgICB7IHBhdGg6ICdjZC12aXJzZWxpby1kaXphaW5hcycsIGNvbXBvbmVudDogQ2RDb3ZlckRlc2lnbkNvbXBvbmVudCB9LFxyXG4gICAgICB7IHBhdGg6ICd2YWlraXNrdS1pbGl1c3RyYWNpanUtZGl6YWluYXMnLCBjb21wb25lbnQ6IEtpZHNJbGx1c3RyYXRpb25EZXNpZ25Db21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAnaWxpdXN0cmFjaWp1LWRpemFpbmFzJywgY29tcG9uZW50OiBJbGx1c3RyYXRpb25EZXNpZ25Db21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAndGF0dWlydW90ZXMtZGl6YWluYXMnLCBjb21wb25lbnQ6IFRhdHRvb0Rlc2lnbkNvbXBvbmVudCB9LFxyXG4gICAgICB7IHBhdGg6ICdsaXBkdWt1LWRpemFpbmFzJywgY29tcG9uZW50OiBTdGlja2VyRGVzaWduQ29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogJ2tpdGFzLW1lbm8tZGl6YWluYXMnLCBjb21wb25lbnQ6IE90aGVyQXJ0T3JJbGx1c3RyYXRpb25EZXNpZ25Db21wb25lbnQgfSxcclxuICAgICAgLy8gUGFrdmlldGltYWlcclxuICAgICAgeyBwYXRoOiAndmVzdHV2aXUtcGFrdmlldGltby1kaXphaW5hcycsIGNvbXBvbmVudDogTWFycmlhZ2VJbnZpdGF0aW9uRGVzaWduQ29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogJ3ZhaWtvLWtyaWtzdHludS1wYWt2aWV0aW1vLWRpemFpbmFzJywgY29tcG9uZW50OiBDaGlsZENocmlzdGVuaW5nSW52aXRhdGlvbkRlc2lnbkNvbXBvbmVudCB9LFxyXG4gICAgICB7IHBhdGg6ICdwYWt2aWV0aW1vLWtvcnRlbGVzLWRpemFpbmFzJywgY29tcG9uZW50OiBJbnZpdGF0aW9uQ2FyZERlc2lnbkNvbXBvbmVudCB9LFxyXG4gICAgICB7IHBhdGg6ICdqdWJpbGllamF1cy1wYWt2aWV0aW1vLWRpemFpbmFzJywgY29tcG9uZW50OiBBbm5pdmVyc2FyeUludml0YXRpb25EZXNpZ25Db21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAnZ2ltdGFkaWVuaW8tcGFrdmlldGltby1kaXphaW5hcycsIGNvbXBvbmVudDogQmlydGhkYXlJbnZpdGF0aW9uRGVzaWduQ29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogJ2tpdG9zLXByb2dvcy1wYWt2aWV0aW1vLWRpemFpbmFzJywgY29tcG9uZW50OiBPdGhlckludml0YXRpb25EZXNpZ25Db21wb25lbnQgfSxcclxuICAgICAgLy8gUGFja2FnaW5nICYgbGFiZWwgXHJcbiAgICAgIHsgcGF0aDogJ2dlcmltdS1kaXphaW5hcycsIGNvbXBvbmVudDogRHJpbmtMYWJlbERlc2lnbkNvbXBvbmVudCB9LFxyXG4gICAgICB7IHBhdGg6ICdtYWlzdG8tcHJvZHVrdHUtZGl6YWluYXMnLCBjb21wb25lbnQ6IEZvb2RQcm9kdWN0c0xhYmVsT3JQYWNrYWdpbmdEZXNpZ25Db21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAna29zbWV0aWtvcy1wcmllbW9uaXUtZGl6YWluYXMnLCBjb21wb25lbnQ6IENvc21ldGljc1Byb2R1Y3RzTGFiZWxPclBhY2thZ2luZ0Rlc2lnbkNvbXBvbmVudCB9LFxyXG4gICAgICB7IHBhdGg6ICdraXR1LXByZWtpdS1kaXphaW5hcycsIGNvbXBvbmVudDogT3RoZXJQcm9kdWN0c0xhYmVsT3JQYWNrYWdpbmdEZXNpZ25Db21wb25lbnQgfSxcclxuICAgICAgLy8gS255Z29zIGlyIFp1cm5hbGFpXHJcbiAgICAgIHsgcGF0aDogJ2tueWdvcy12aXJzZWxpby1kaXphaW5hcycsIGNvbXBvbmVudDogQm9va0NvdmVyRGVzaWduQ29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogJ2Uta255Z29zLWRpemFpbmFzJywgY29tcG9uZW50OiBFQm9va0NvdmVyRGVzaWduQ29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogJ3p1cm5hbG8tdmlyc2VsaW8tZGl6YWluYXMnLCBjb21wb25lbnQ6IE1hZ2F6aW5lQ292ZXJEZXNpZ25Db21wb25lbnQgfSxcclxuICAgICAgLy8gT3RoZXIuLi5cclxuICAgICAgeyBwYXRoOiAna2l0YXMtZGl6YWluYXMnLCBjb21wb25lbnQ6IE90aGVyRGVzaWduc0NvbXBvbmVudCB9LFxyXG4gICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IENhdGVnb3JpZXNEYXNoYm9hcmRDb21wb25lbnQgfSxcclxuICAgIF1cclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgY2F0ZWdvcmllc1JvdXRpbmc6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoY2F0ZWdvcmllc1JvdXRlcyk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
