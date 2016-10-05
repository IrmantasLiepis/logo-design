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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var primeng_1 = require('primeng/primeng');
var material_1 = require('@angular/material');
var publish_contest_dashboard_component_1 = require('./publish-contest-dashboard/publish-contest-dashboard.component');
var index_1 = require('./logo-and-business-cards/index');
var index_2 = require('./web-and-app-design/index');
var index_3 = require('./business-and-advertising/index');
var index_4 = require('./clothing-and-merchandise/index');
var index_5 = require('./art-and-illustration/index');
var index_6 = require('./invitations-design/index');
var index_7 = require('./packaging-and-label/index');
var index_8 = require('./books-and-magazines/index');
var other_designs_component_1 = require('./other-designs/other-designs.component');
var publish_contest_routing_1 = require('./publish-contest.routing');
var PublishContestModule = (function () {
    function PublishContestModule() {
    }
    PublishContestModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, primeng_1.InputTextModule, forms_1.ReactiveFormsModule,
                publish_contest_routing_1.publishContestRouting, material_1.MaterialModule.forRoot()
            ],
            declarations: [
                publish_contest_dashboard_component_1.PublishContestDashboardComponent, index_1.BusinessCardComponent, index_1.LogoComponent, index_1.LogoAndBusinessCardComponent,
                index_2.AbBannerComponent, index_2.AndroidAppComponent, index_2.BlogDesignComponent,
                index_2.FacebookDesignComponent, index_2.FlashBannerComponent, index_2.FrontPageComponent,
                index_2.IconDesignComponent, index_2.IosAppComponent, index_2.MobileAppComponent,
                index_2.TwitterDesignComponent, index_2.WebsiteHeaderComponent, index_2.WebsiteRedesignComponent,
                index_2.WordpressThemeComponent, index_2.YoutubeChannelComponent, index_2.OtherWebAndAppDesignComponent,
                index_3.AbDesignComponent, index_3.BillboardComponent, index_3.BookletComponent,
                index_3.CarAdComponent, index_3.EmailDesignComponent, index_3.FoodMenuComponent,
                index_3.LeafletComponent, index_3.OtherBusinessOrAdvertisingComponent, index_3.PostcardComponent,
                index_3.PowerPointDesignComponent, index_3.MicrosoftWordDesignComponent, index_3.ResumeDesignComponent,
                index_4.HaberDasheryDesignComponent, index_4.CapDesignComponent, index_4.MerchandiseDesignComponent,
                index_4.MugDesignComponent, index_4.OtherClothingOrMerchandiseComponent,
                index_4.SweatShirtDesignComponent, index_4.TShirtDesignComponent, index_5.CdCoverDesignComponent,
                index_5.IllustrationDesignComponent, index_5.KidsIllustrationDesignComponent, index_5.OtherArtOrIllustrationDesignComponent,
                index_5.TattooDesignComponent, index_5.ThreeDDesignComponent, index_5.StickerDesignComponent,
                index_6.AnniversaryInvitationDesignComponent, index_6.BirthdayInvitationDesignComponent, index_6.ChildChristeningInvitationDesignComponent,
                index_6.InvitationCardDesignComponent, index_6.MarriageInvitationDesignComponent, index_6.OtherInvitationDesignComponent,
                index_7.CosmeticsProductsLabelOrPackagingDesignComponent, index_7.DrinkLabelDesignComponent,
                index_7.FoodProductsLabelOrPackagingDesignComponent, index_7.OtherProductsLabelOrPackagingDesignComponent,
                index_8.BookCoverDesignComponent, index_8.EBookCoverDesignComponent, index_8.MagazineCoverDesignComponent,
                other_designs_component_1.OtherDesignsComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PublishContestModule);
    return PublishContestModule;
}());
exports.PublishContestModule = PublishContestModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHVibGlzaC1jb250ZXN0L3B1Ymxpc2gtY29udGVzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUVsRSx3QkFBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNsRCx5QkFBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUVuRCxvREFBaUQsaUVBQWlFLENBQUMsQ0FBQTtBQUNuSCxzQkFBbUYsaUNBQWlDLENBQUMsQ0FBQTtBQUNySCxzQkFJZ0csNEJBQTRCLENBQUMsQ0FBQTtBQUM3SCxzQkFHK0Ysa0NBQWtDLENBQUMsQ0FBQTtBQUNsSSxzQkFFaUUsa0NBQWtDLENBQUMsQ0FBQTtBQUNwRyxzQkFFdUMsOEJBQThCLENBQUMsQ0FBQTtBQUN0RSxzQkFFa0YsNEJBQTRCLENBQUMsQ0FBQTtBQUMvRyxzQkFDMEcsNkJBQTZCLENBQUMsQ0FBQTtBQUN4SSxzQkFBa0csNkJBQTZCLENBQUMsQ0FBQTtBQUNoSSx3Q0FBc0MseUNBQXlDLENBQUMsQ0FBQTtBQUdoRix3Q0FBc0MsMkJBQTJCLENBQUMsQ0FBQTtBQWdDbEU7SUFBQTtJQUVBLENBQUM7SUFoQ0Q7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AscUJBQVksRUFBRSx5QkFBZSxFQUFFLDJCQUFtQjtnQkFDbEQsK0NBQXFCLEVBQUUseUJBQWMsQ0FBQyxPQUFPLEVBQUU7YUFDaEQ7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osc0VBQWdDLEVBQUUsNkJBQXFCLEVBQUUscUJBQWEsRUFBRSxvQ0FBNEI7Z0JBQ3BHLHlCQUFpQixFQUFFLDJCQUFtQixFQUFFLDJCQUFtQjtnQkFDM0QsK0JBQXVCLEVBQUUsNEJBQW9CLEVBQUUsMEJBQWtCO2dCQUNqRSwyQkFBbUIsRUFBRSx1QkFBZSxFQUFFLDBCQUFrQjtnQkFDeEQsOEJBQXNCLEVBQUUsOEJBQXNCLEVBQUUsZ0NBQXdCO2dCQUN4RSwrQkFBdUIsRUFBRSwrQkFBdUIsRUFBRSxxQ0FBNkI7Z0JBQy9FLHlCQUFpQixFQUFFLDBCQUFrQixFQUFFLHdCQUFnQjtnQkFDdkQsc0JBQWMsRUFBRSw0QkFBb0IsRUFBRSx5QkFBaUI7Z0JBQ3ZELHdCQUFnQixFQUFFLDJDQUFtQyxFQUFFLHlCQUFpQjtnQkFDeEUsaUNBQXlCLEVBQUUsb0NBQTRCLEVBQUUsNkJBQXFCO2dCQUM5RSxtQ0FBMkIsRUFBRSwwQkFBa0IsRUFBRSxrQ0FBMEI7Z0JBQzNFLDBCQUFrQixFQUFFLDJDQUFtQztnQkFDdkQsaUNBQXlCLEVBQUUsNkJBQXFCLEVBQUUsOEJBQXNCO2dCQUN4RSxtQ0FBMkIsRUFBRSx1Q0FBK0IsRUFBRSw2Q0FBcUM7Z0JBQ25HLDZCQUFxQixFQUFFLDZCQUFxQixFQUFFLDhCQUFzQjtnQkFDcEUsNENBQW9DLEVBQUUseUNBQWlDLEVBQUUsaURBQXlDO2dCQUNsSCxxQ0FBNkIsRUFBRSx5Q0FBaUMsRUFBRSxzQ0FBOEI7Z0JBQ2hHLHdEQUFnRCxFQUFFLGlDQUF5QjtnQkFDM0UsbURBQTJDLEVBQUUsb0RBQTRDO2dCQUN6RixnQ0FBd0IsRUFBRSxpQ0FBeUIsRUFBRSxvQ0FBNEI7Z0JBQ2pGLCtDQUFxQjthQUN0QjtTQUNGLENBQUM7OzRCQUFBO0lBSUYsMkJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLDRCQUFvQix1QkFFaEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3B1Ymxpc2gtY29udGVzdC9wdWJsaXNoLWNvbnRlc3QubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dFRleHRNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbmltcG9ydCB7IFB1Ymxpc2hDb250ZXN0RGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9wdWJsaXNoLWNvbnRlc3QtZGFzaGJvYXJkL3B1Ymxpc2gtY29udGVzdC1kYXNoYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnVzaW5lc3NDYXJkQ29tcG9uZW50LCBMb2dvQ29tcG9uZW50LCBMb2dvQW5kQnVzaW5lc3NDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dvLWFuZC1idXNpbmVzcy1jYXJkcy9pbmRleCc7XHJcbmltcG9ydCB7IEFiQmFubmVyQ29tcG9uZW50LCBBbmRyb2lkQXBwQ29tcG9uZW50LCBCbG9nRGVzaWduQ29tcG9uZW50LFxyXG4gICAgICAgICBGYWNlYm9va0Rlc2lnbkNvbXBvbmVudCwgRmxhc2hCYW5uZXJDb21wb25lbnQsIEZyb250UGFnZUNvbXBvbmVudCxcclxuICAgICAgICAgSWNvbkRlc2lnbkNvbXBvbmVudCwgSW9zQXBwQ29tcG9uZW50LCBNb2JpbGVBcHBDb21wb25lbnQsXHJcbiAgICAgICAgIFR3aXR0ZXJEZXNpZ25Db21wb25lbnQsIFdlYnNpdGVIZWFkZXJDb21wb25lbnQsIFdlYnNpdGVSZWRlc2lnbkNvbXBvbmVudCxcclxuICAgICAgICAgV29yZHByZXNzVGhlbWVDb21wb25lbnQsIFlvdXR1YmVDaGFubmVsQ29tcG9uZW50LCBPdGhlcldlYkFuZEFwcERlc2lnbkNvbXBvbmVudCB9IGZyb20gJy4vd2ViLWFuZC1hcHAtZGVzaWduL2luZGV4JztcclxuaW1wb3J0IHsgQWJEZXNpZ25Db21wb25lbnQsIEJpbGxib2FyZENvbXBvbmVudCwgQm9va2xldENvbXBvbmVudCxcclxuICAgICAgICAgQ2FyQWRDb21wb25lbnQsIEVtYWlsRGVzaWduQ29tcG9uZW50LCBGb29kTWVudUNvbXBvbmVudCxcclxuICAgICAgICAgTGVhZmxldENvbXBvbmVudCwgT3RoZXJCdXNpbmVzc09yQWR2ZXJ0aXNpbmdDb21wb25lbnQsIFBvc3RjYXJkQ29tcG9uZW50LFxyXG4gICAgICAgICBQb3dlclBvaW50RGVzaWduQ29tcG9uZW50LCBNaWNyb3NvZnRXb3JkRGVzaWduQ29tcG9uZW50LCBSZXN1bWVEZXNpZ25Db21wb25lbnQgfSBmcm9tICcuL2J1c2luZXNzLWFuZC1hZHZlcnRpc2luZy9pbmRleCc7XHJcbmltcG9ydCB7IEhhYmVyRGFzaGVyeURlc2lnbkNvbXBvbmVudCwgQ2FwRGVzaWduQ29tcG9uZW50LCBNZXJjaGFuZGlzZURlc2lnbkNvbXBvbmVudCxcclxuICAgICAgICAgTXVnRGVzaWduQ29tcG9uZW50LCBPdGhlckNsb3RoaW5nT3JNZXJjaGFuZGlzZUNvbXBvbmVudCxcclxuICAgICAgICAgU3dlYXRTaGlydERlc2lnbkNvbXBvbmVudCwgVFNoaXJ0RGVzaWduQ29tcG9uZW50IH0gZnJvbSAnLi9jbG90aGluZy1hbmQtbWVyY2hhbmRpc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBDZENvdmVyRGVzaWduQ29tcG9uZW50LCBJbGx1c3RyYXRpb25EZXNpZ25Db21wb25lbnQsIEtpZHNJbGx1c3RyYXRpb25EZXNpZ25Db21wb25lbnQsXHJcbiAgICAgICAgIE90aGVyQXJ0T3JJbGx1c3RyYXRpb25EZXNpZ25Db21wb25lbnQsIFRhdHRvb0Rlc2lnbkNvbXBvbmVudCwgVGhyZWVERGVzaWduQ29tcG9uZW50LFxyXG4gICAgICAgICBTdGlja2VyRGVzaWduQ29tcG9uZW50IH0gZnJvbSAnLi9hcnQtYW5kLWlsbHVzdHJhdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IEFubml2ZXJzYXJ5SW52aXRhdGlvbkRlc2lnbkNvbXBvbmVudCwgQmlydGhkYXlJbnZpdGF0aW9uRGVzaWduQ29tcG9uZW50LCBcclxuICAgICAgICAgQ2hpbGRDaHJpc3RlbmluZ0ludml0YXRpb25EZXNpZ25Db21wb25lbnQsIEludml0YXRpb25DYXJkRGVzaWduQ29tcG9uZW50LFxyXG4gICAgICAgICBNYXJyaWFnZUludml0YXRpb25EZXNpZ25Db21wb25lbnQsIE90aGVySW52aXRhdGlvbkRlc2lnbkNvbXBvbmVudCB9IGZyb20gJy4vaW52aXRhdGlvbnMtZGVzaWduL2luZGV4JztcclxuaW1wb3J0IHsgQ29zbWV0aWNzUHJvZHVjdHNMYWJlbE9yUGFja2FnaW5nRGVzaWduQ29tcG9uZW50LCBEcmlua0xhYmVsRGVzaWduQ29tcG9uZW50LFxyXG4gICAgICAgICBGb29kUHJvZHVjdHNMYWJlbE9yUGFja2FnaW5nRGVzaWduQ29tcG9uZW50LCBPdGhlclByb2R1Y3RzTGFiZWxPclBhY2thZ2luZ0Rlc2lnbkNvbXBvbmVudCB9IGZyb20gJy4vcGFja2FnaW5nLWFuZC1sYWJlbC9pbmRleCc7XHJcbmltcG9ydCB7IEJvb2tDb3ZlckRlc2lnbkNvbXBvbmVudCwgRUJvb2tDb3ZlckRlc2lnbkNvbXBvbmVudCwgTWFnYXppbmVDb3ZlckRlc2lnbkNvbXBvbmVudCB9IGZyb20gJy4vYm9va3MtYW5kLW1hZ2F6aW5lcy9pbmRleCc7XHJcbmltcG9ydCB7IE90aGVyRGVzaWduc0NvbXBvbmVudCB9IGZyb20gJy4vb3RoZXItZGVzaWducy9vdGhlci1kZXNpZ25zLmNvbXBvbmVudCc7XHJcblxyXG5cclxuaW1wb3J0IHsgcHVibGlzaENvbnRlc3RSb3V0aW5nIH0gZnJvbSAnLi9wdWJsaXNoLWNvbnRlc3Qucm91dGluZyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSwgSW5wdXRUZXh0TW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgcHVibGlzaENvbnRlc3RSb3V0aW5nLCBNYXRlcmlhbE1vZHVsZS5mb3JSb290KClcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgUHVibGlzaENvbnRlc3REYXNoYm9hcmRDb21wb25lbnQsIEJ1c2luZXNzQ2FyZENvbXBvbmVudCwgTG9nb0NvbXBvbmVudCwgTG9nb0FuZEJ1c2luZXNzQ2FyZENvbXBvbmVudCxcclxuICAgIEFiQmFubmVyQ29tcG9uZW50LCBBbmRyb2lkQXBwQ29tcG9uZW50LCBCbG9nRGVzaWduQ29tcG9uZW50LFxyXG4gICAgRmFjZWJvb2tEZXNpZ25Db21wb25lbnQsIEZsYXNoQmFubmVyQ29tcG9uZW50LCBGcm9udFBhZ2VDb21wb25lbnQsXHJcbiAgICBJY29uRGVzaWduQ29tcG9uZW50LCBJb3NBcHBDb21wb25lbnQsIE1vYmlsZUFwcENvbXBvbmVudCxcclxuICAgIFR3aXR0ZXJEZXNpZ25Db21wb25lbnQsIFdlYnNpdGVIZWFkZXJDb21wb25lbnQsIFdlYnNpdGVSZWRlc2lnbkNvbXBvbmVudCxcclxuICAgIFdvcmRwcmVzc1RoZW1lQ29tcG9uZW50LCBZb3V0dWJlQ2hhbm5lbENvbXBvbmVudCwgT3RoZXJXZWJBbmRBcHBEZXNpZ25Db21wb25lbnQsXHJcbiAgICBBYkRlc2lnbkNvbXBvbmVudCwgQmlsbGJvYXJkQ29tcG9uZW50LCBCb29rbGV0Q29tcG9uZW50LFxyXG4gICAgQ2FyQWRDb21wb25lbnQsIEVtYWlsRGVzaWduQ29tcG9uZW50LCBGb29kTWVudUNvbXBvbmVudCxcclxuICAgIExlYWZsZXRDb21wb25lbnQsIE90aGVyQnVzaW5lc3NPckFkdmVydGlzaW5nQ29tcG9uZW50LCBQb3N0Y2FyZENvbXBvbmVudCxcclxuICAgIFBvd2VyUG9pbnREZXNpZ25Db21wb25lbnQsIE1pY3Jvc29mdFdvcmREZXNpZ25Db21wb25lbnQsIFJlc3VtZURlc2lnbkNvbXBvbmVudCxcclxuICAgIEhhYmVyRGFzaGVyeURlc2lnbkNvbXBvbmVudCwgQ2FwRGVzaWduQ29tcG9uZW50LCBNZXJjaGFuZGlzZURlc2lnbkNvbXBvbmVudCxcclxuICAgIE11Z0Rlc2lnbkNvbXBvbmVudCwgT3RoZXJDbG90aGluZ09yTWVyY2hhbmRpc2VDb21wb25lbnQsXHJcbiAgICBTd2VhdFNoaXJ0RGVzaWduQ29tcG9uZW50LCBUU2hpcnREZXNpZ25Db21wb25lbnQsIENkQ292ZXJEZXNpZ25Db21wb25lbnQsXHJcbiAgICBJbGx1c3RyYXRpb25EZXNpZ25Db21wb25lbnQsIEtpZHNJbGx1c3RyYXRpb25EZXNpZ25Db21wb25lbnQsIE90aGVyQXJ0T3JJbGx1c3RyYXRpb25EZXNpZ25Db21wb25lbnQsXHJcbiAgICBUYXR0b29EZXNpZ25Db21wb25lbnQsIFRocmVlRERlc2lnbkNvbXBvbmVudCwgU3RpY2tlckRlc2lnbkNvbXBvbmVudCxcclxuICAgIEFubml2ZXJzYXJ5SW52aXRhdGlvbkRlc2lnbkNvbXBvbmVudCwgQmlydGhkYXlJbnZpdGF0aW9uRGVzaWduQ29tcG9uZW50LCBDaGlsZENocmlzdGVuaW5nSW52aXRhdGlvbkRlc2lnbkNvbXBvbmVudCxcclxuICAgIEludml0YXRpb25DYXJkRGVzaWduQ29tcG9uZW50LCBNYXJyaWFnZUludml0YXRpb25EZXNpZ25Db21wb25lbnQsIE90aGVySW52aXRhdGlvbkRlc2lnbkNvbXBvbmVudCxcclxuICAgIENvc21ldGljc1Byb2R1Y3RzTGFiZWxPclBhY2thZ2luZ0Rlc2lnbkNvbXBvbmVudCwgRHJpbmtMYWJlbERlc2lnbkNvbXBvbmVudCxcclxuICAgIEZvb2RQcm9kdWN0c0xhYmVsT3JQYWNrYWdpbmdEZXNpZ25Db21wb25lbnQsIE90aGVyUHJvZHVjdHNMYWJlbE9yUGFja2FnaW5nRGVzaWduQ29tcG9uZW50LFxyXG4gICAgQm9va0NvdmVyRGVzaWduQ29tcG9uZW50LCBFQm9va0NvdmVyRGVzaWduQ29tcG9uZW50LCBNYWdhemluZUNvdmVyRGVzaWduQ29tcG9uZW50LFxyXG4gICAgT3RoZXJEZXNpZ25zQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFB1Ymxpc2hDb250ZXN0TW9kdWxlIHtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
