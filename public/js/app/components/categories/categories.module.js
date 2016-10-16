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
var ng2_file_upload_1 = require('ng2-file-upload/ng2-file-upload');
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
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var categories_routing_1 = require('./categories.routing');
var CategoriesModule = (function () {
    function CategoriesModule() {
    }
    CategoriesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, primeng_1.InputTextModule, forms_1.ReactiveFormsModule,
                categories_routing_1.categoriesRouting, material_1.MaterialModule.forRoot(), ng2_bs3_modal_1.Ng2Bs3ModalModule
            ],
            declarations: [
                categories_dashboard_component_1.CategoriesDashboardComponent, index_1.BusinessCardComponent, index_1.LogoComponent, index_1.LogoAndBusinessCardComponent,
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
                other_designs_component_1.OtherDesignsComponent, ng2_file_upload_1.FileSelectDirective, ng2_file_upload_1.FileDropDirective, index_3.FileUploadComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CategoriesModule);
    return CategoriesModule;
}());
exports.CategoriesModule = CategoriesModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBRWxFLHdCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2xELHlCQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBQ25ELGdDQUF1RCxpQ0FBaUMsQ0FBQyxDQUFBO0FBRXpGLCtDQUE2Qyx1REFBdUQsQ0FBQyxDQUFBO0FBQ3JHLHNCQUFtRixpQ0FBaUMsQ0FBQyxDQUFBO0FBQ3JILHNCQUlnRyw0QkFBNEIsQ0FBQyxDQUFBO0FBQzdILHNCQUlvQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3ZFLHNCQUVpRSxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3BHLHNCQUV1Qyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ3RFLHNCQUVrRiw0QkFBNEIsQ0FBQyxDQUFBO0FBQy9HLHNCQUMwRyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3hJLHNCQUFrRyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ2hJLHdDQUFzQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBQ2hGLDhCQUFrQyw2QkFBNkIsQ0FBQyxDQUFBO0FBR2hFLG1DQUFrQyxzQkFBc0IsQ0FBQyxDQUFBO0FBZ0N6RDtJQUFBO0lBRUEsQ0FBQztJQWhDRDtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxxQkFBWSxFQUFFLHlCQUFlLEVBQUUsMkJBQW1CO2dCQUNsRCxzQ0FBaUIsRUFBRSx5QkFBYyxDQUFDLE9BQU8sRUFBRSxFQUFFLGlDQUFpQjthQUMvRDtZQUNELFlBQVksRUFBRTtnQkFDWiw2REFBNEIsRUFBRSw2QkFBcUIsRUFBRSxxQkFBYSxFQUFFLG9DQUE0QjtnQkFDaEcseUJBQWlCLEVBQUUsMkJBQW1CLEVBQUUsMkJBQW1CO2dCQUMzRCwrQkFBdUIsRUFBRSw0QkFBb0IsRUFBRSwwQkFBa0I7Z0JBQ2pFLDJCQUFtQixFQUFFLHVCQUFlLEVBQUUsMEJBQWtCO2dCQUN4RCw4QkFBc0IsRUFBRSw4QkFBc0IsRUFBRSxnQ0FBd0I7Z0JBQ3hFLCtCQUF1QixFQUFFLCtCQUF1QixFQUFFLHFDQUE2QjtnQkFDL0UseUJBQWlCLEVBQUUsMEJBQWtCLEVBQUUsd0JBQWdCO2dCQUN2RCxzQkFBYyxFQUFFLDRCQUFvQixFQUFFLHlCQUFpQjtnQkFDdkQsd0JBQWdCLEVBQUUsMkNBQW1DLEVBQUUseUJBQWlCO2dCQUN4RSxpQ0FBeUIsRUFBRSxvQ0FBNEIsRUFBRSw2QkFBcUI7Z0JBQzlFLG1DQUEyQixFQUFFLDBCQUFrQixFQUFFLGtDQUEwQjtnQkFDM0UsMEJBQWtCLEVBQUUsMkNBQW1DO2dCQUN2RCxpQ0FBeUIsRUFBRSw2QkFBcUIsRUFBRSw4QkFBc0I7Z0JBQ3hFLG1DQUEyQixFQUFFLHVDQUErQixFQUFFLDZDQUFxQztnQkFDbkcsNkJBQXFCLEVBQUUsNkJBQXFCLEVBQUUsOEJBQXNCO2dCQUNwRSw0Q0FBb0MsRUFBRSx5Q0FBaUMsRUFBRSxpREFBeUM7Z0JBQ2xILHFDQUE2QixFQUFFLHlDQUFpQyxFQUFFLHNDQUE4QjtnQkFDaEcsd0RBQWdELEVBQUUsaUNBQXlCO2dCQUMzRSxtREFBMkMsRUFBRSxvREFBNEM7Z0JBQ3pGLGdDQUF3QixFQUFFLGlDQUF5QixFQUFFLG9DQUE0QjtnQkFDakYsK0NBQXFCLEVBQUUscUNBQW1CLEVBQUUsbUNBQWlCLEVBQUUsMkJBQW1CO2FBQ25GO1NBQ0YsQ0FBQzs7d0JBQUE7SUFJRix1QkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksd0JBQWdCLG1CQUU1QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEZpbGVTZWxlY3REaXJlY3RpdmUsIEZpbGVEcm9wRGlyZWN0aXZlIH0gZnJvbSAnbmcyLWZpbGUtdXBsb2FkL25nMi1maWxlLXVwbG9hZCc7XHJcblxyXG5pbXBvcnQgeyBDYXRlZ29yaWVzRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jYXRlZ29yaWVzLWRhc2hib2FyZC9jYXRlZ29yaWVzLWRhc2hib2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdXNpbmVzc0NhcmRDb21wb25lbnQsIExvZ29Db21wb25lbnQsIExvZ29BbmRCdXNpbmVzc0NhcmRDb21wb25lbnQgfSBmcm9tICcuL2xvZ28tYW5kLWJ1c2luZXNzLWNhcmRzL2luZGV4JztcclxuaW1wb3J0IHsgQWJCYW5uZXJDb21wb25lbnQsIEFuZHJvaWRBcHBDb21wb25lbnQsIEJsb2dEZXNpZ25Db21wb25lbnQsXHJcbiAgICAgICAgIEZhY2Vib29rRGVzaWduQ29tcG9uZW50LCBGbGFzaEJhbm5lckNvbXBvbmVudCwgRnJvbnRQYWdlQ29tcG9uZW50LFxyXG4gICAgICAgICBJY29uRGVzaWduQ29tcG9uZW50LCBJb3NBcHBDb21wb25lbnQsIE1vYmlsZUFwcENvbXBvbmVudCxcclxuICAgICAgICAgVHdpdHRlckRlc2lnbkNvbXBvbmVudCwgV2Vic2l0ZUhlYWRlckNvbXBvbmVudCwgV2Vic2l0ZVJlZGVzaWduQ29tcG9uZW50LFxyXG4gICAgICAgICBXb3JkcHJlc3NUaGVtZUNvbXBvbmVudCwgWW91dHViZUNoYW5uZWxDb21wb25lbnQsIE90aGVyV2ViQW5kQXBwRGVzaWduQ29tcG9uZW50IH0gZnJvbSAnLi93ZWItYW5kLWFwcC1kZXNpZ24vaW5kZXgnO1xyXG5pbXBvcnQgeyBBYkRlc2lnbkNvbXBvbmVudCwgQmlsbGJvYXJkQ29tcG9uZW50LCBCb29rbGV0Q29tcG9uZW50LFxyXG4gICAgICAgICBDYXJBZENvbXBvbmVudCwgRW1haWxEZXNpZ25Db21wb25lbnQsIEZvb2RNZW51Q29tcG9uZW50LFxyXG4gICAgICAgICBMZWFmbGV0Q29tcG9uZW50LCBPdGhlckJ1c2luZXNzT3JBZHZlcnRpc2luZ0NvbXBvbmVudCwgUG9zdGNhcmRDb21wb25lbnQsXHJcbiAgICAgICAgIFBvd2VyUG9pbnREZXNpZ25Db21wb25lbnQsIE1pY3Jvc29mdFdvcmREZXNpZ25Db21wb25lbnQsIFJlc3VtZURlc2lnbkNvbXBvbmVudCxcclxuICAgICAgICAgRmlsZVVwbG9hZENvbXBvbmVudCB9IGZyb20gJy4vYnVzaW5lc3MtYW5kLWFkdmVydGlzaW5nL2luZGV4JztcclxuaW1wb3J0IHsgSGFiZXJEYXNoZXJ5RGVzaWduQ29tcG9uZW50LCBDYXBEZXNpZ25Db21wb25lbnQsIE1lcmNoYW5kaXNlRGVzaWduQ29tcG9uZW50LFxyXG4gICAgICAgICBNdWdEZXNpZ25Db21wb25lbnQsIE90aGVyQ2xvdGhpbmdPck1lcmNoYW5kaXNlQ29tcG9uZW50LFxyXG4gICAgICAgICBTd2VhdFNoaXJ0RGVzaWduQ29tcG9uZW50LCBUU2hpcnREZXNpZ25Db21wb25lbnQgfSBmcm9tICcuL2Nsb3RoaW5nLWFuZC1tZXJjaGFuZGlzZS9pbmRleCc7XHJcbmltcG9ydCB7IENkQ292ZXJEZXNpZ25Db21wb25lbnQsIElsbHVzdHJhdGlvbkRlc2lnbkNvbXBvbmVudCwgS2lkc0lsbHVzdHJhdGlvbkRlc2lnbkNvbXBvbmVudCxcclxuICAgICAgICAgT3RoZXJBcnRPcklsbHVzdHJhdGlvbkRlc2lnbkNvbXBvbmVudCwgVGF0dG9vRGVzaWduQ29tcG9uZW50LCBUaHJlZUREZXNpZ25Db21wb25lbnQsXHJcbiAgICAgICAgIFN0aWNrZXJEZXNpZ25Db21wb25lbnQgfSBmcm9tICcuL2FydC1hbmQtaWxsdXN0cmF0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgQW5uaXZlcnNhcnlJbnZpdGF0aW9uRGVzaWduQ29tcG9uZW50LCBCaXJ0aGRheUludml0YXRpb25EZXNpZ25Db21wb25lbnQsIFxyXG4gICAgICAgICBDaGlsZENocmlzdGVuaW5nSW52aXRhdGlvbkRlc2lnbkNvbXBvbmVudCwgSW52aXRhdGlvbkNhcmREZXNpZ25Db21wb25lbnQsXHJcbiAgICAgICAgIE1hcnJpYWdlSW52aXRhdGlvbkRlc2lnbkNvbXBvbmVudCwgT3RoZXJJbnZpdGF0aW9uRGVzaWduQ29tcG9uZW50IH0gZnJvbSAnLi9pbnZpdGF0aW9ucy1kZXNpZ24vaW5kZXgnO1xyXG5pbXBvcnQgeyBDb3NtZXRpY3NQcm9kdWN0c0xhYmVsT3JQYWNrYWdpbmdEZXNpZ25Db21wb25lbnQsIERyaW5rTGFiZWxEZXNpZ25Db21wb25lbnQsXHJcbiAgICAgICAgIEZvb2RQcm9kdWN0c0xhYmVsT3JQYWNrYWdpbmdEZXNpZ25Db21wb25lbnQsIE90aGVyUHJvZHVjdHNMYWJlbE9yUGFja2FnaW5nRGVzaWduQ29tcG9uZW50IH0gZnJvbSAnLi9wYWNrYWdpbmctYW5kLWxhYmVsL2luZGV4JztcclxuaW1wb3J0IHsgQm9va0NvdmVyRGVzaWduQ29tcG9uZW50LCBFQm9va0NvdmVyRGVzaWduQ29tcG9uZW50LCBNYWdhemluZUNvdmVyRGVzaWduQ29tcG9uZW50IH0gZnJvbSAnLi9ib29rcy1hbmQtbWFnYXppbmVzL2luZGV4JztcclxuaW1wb3J0IHsgT3RoZXJEZXNpZ25zQ29tcG9uZW50IH0gZnJvbSAnLi9vdGhlci1kZXNpZ25zL290aGVyLWRlc2lnbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmcyQnMzTW9kYWxNb2R1bGUgfSBmcm9tICduZzItYnMzLW1vZGFsL25nMi1iczMtbW9kYWwnO1xyXG5cclxuXHJcbmltcG9ydCB7IGNhdGVnb3JpZXNSb3V0aW5nIH0gZnJvbSAnLi9jYXRlZ29yaWVzLnJvdXRpbmcnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsIElucHV0VGV4dE1vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIGNhdGVnb3JpZXNSb3V0aW5nLCBNYXRlcmlhbE1vZHVsZS5mb3JSb290KCksIE5nMkJzM01vZGFsTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIENhdGVnb3JpZXNEYXNoYm9hcmRDb21wb25lbnQsIEJ1c2luZXNzQ2FyZENvbXBvbmVudCwgTG9nb0NvbXBvbmVudCwgTG9nb0FuZEJ1c2luZXNzQ2FyZENvbXBvbmVudCxcclxuICAgIEFiQmFubmVyQ29tcG9uZW50LCBBbmRyb2lkQXBwQ29tcG9uZW50LCBCbG9nRGVzaWduQ29tcG9uZW50LFxyXG4gICAgRmFjZWJvb2tEZXNpZ25Db21wb25lbnQsIEZsYXNoQmFubmVyQ29tcG9uZW50LCBGcm9udFBhZ2VDb21wb25lbnQsXHJcbiAgICBJY29uRGVzaWduQ29tcG9uZW50LCBJb3NBcHBDb21wb25lbnQsIE1vYmlsZUFwcENvbXBvbmVudCxcclxuICAgIFR3aXR0ZXJEZXNpZ25Db21wb25lbnQsIFdlYnNpdGVIZWFkZXJDb21wb25lbnQsIFdlYnNpdGVSZWRlc2lnbkNvbXBvbmVudCxcclxuICAgIFdvcmRwcmVzc1RoZW1lQ29tcG9uZW50LCBZb3V0dWJlQ2hhbm5lbENvbXBvbmVudCwgT3RoZXJXZWJBbmRBcHBEZXNpZ25Db21wb25lbnQsXHJcbiAgICBBYkRlc2lnbkNvbXBvbmVudCwgQmlsbGJvYXJkQ29tcG9uZW50LCBCb29rbGV0Q29tcG9uZW50LFxyXG4gICAgQ2FyQWRDb21wb25lbnQsIEVtYWlsRGVzaWduQ29tcG9uZW50LCBGb29kTWVudUNvbXBvbmVudCxcclxuICAgIExlYWZsZXRDb21wb25lbnQsIE90aGVyQnVzaW5lc3NPckFkdmVydGlzaW5nQ29tcG9uZW50LCBQb3N0Y2FyZENvbXBvbmVudCxcclxuICAgIFBvd2VyUG9pbnREZXNpZ25Db21wb25lbnQsIE1pY3Jvc29mdFdvcmREZXNpZ25Db21wb25lbnQsIFJlc3VtZURlc2lnbkNvbXBvbmVudCxcclxuICAgIEhhYmVyRGFzaGVyeURlc2lnbkNvbXBvbmVudCwgQ2FwRGVzaWduQ29tcG9uZW50LCBNZXJjaGFuZGlzZURlc2lnbkNvbXBvbmVudCxcclxuICAgIE11Z0Rlc2lnbkNvbXBvbmVudCwgT3RoZXJDbG90aGluZ09yTWVyY2hhbmRpc2VDb21wb25lbnQsXHJcbiAgICBTd2VhdFNoaXJ0RGVzaWduQ29tcG9uZW50LCBUU2hpcnREZXNpZ25Db21wb25lbnQsIENkQ292ZXJEZXNpZ25Db21wb25lbnQsXHJcbiAgICBJbGx1c3RyYXRpb25EZXNpZ25Db21wb25lbnQsIEtpZHNJbGx1c3RyYXRpb25EZXNpZ25Db21wb25lbnQsIE90aGVyQXJ0T3JJbGx1c3RyYXRpb25EZXNpZ25Db21wb25lbnQsXHJcbiAgICBUYXR0b29EZXNpZ25Db21wb25lbnQsIFRocmVlRERlc2lnbkNvbXBvbmVudCwgU3RpY2tlckRlc2lnbkNvbXBvbmVudCxcclxuICAgIEFubml2ZXJzYXJ5SW52aXRhdGlvbkRlc2lnbkNvbXBvbmVudCwgQmlydGhkYXlJbnZpdGF0aW9uRGVzaWduQ29tcG9uZW50LCBDaGlsZENocmlzdGVuaW5nSW52aXRhdGlvbkRlc2lnbkNvbXBvbmVudCxcclxuICAgIEludml0YXRpb25DYXJkRGVzaWduQ29tcG9uZW50LCBNYXJyaWFnZUludml0YXRpb25EZXNpZ25Db21wb25lbnQsIE90aGVySW52aXRhdGlvbkRlc2lnbkNvbXBvbmVudCxcclxuICAgIENvc21ldGljc1Byb2R1Y3RzTGFiZWxPclBhY2thZ2luZ0Rlc2lnbkNvbXBvbmVudCwgRHJpbmtMYWJlbERlc2lnbkNvbXBvbmVudCxcclxuICAgIEZvb2RQcm9kdWN0c0xhYmVsT3JQYWNrYWdpbmdEZXNpZ25Db21wb25lbnQsIE90aGVyUHJvZHVjdHNMYWJlbE9yUGFja2FnaW5nRGVzaWduQ29tcG9uZW50LFxyXG4gICAgQm9va0NvdmVyRGVzaWduQ29tcG9uZW50LCBFQm9va0NvdmVyRGVzaWduQ29tcG9uZW50LCBNYWdhemluZUNvdmVyRGVzaWduQ29tcG9uZW50LFxyXG4gICAgT3RoZXJEZXNpZ25zQ29tcG9uZW50LCBGaWxlU2VsZWN0RGlyZWN0aXZlLCBGaWxlRHJvcERpcmVjdGl2ZSwgRmlsZVVwbG9hZENvbXBvbmVudFxyXG4gIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXRlZ29yaWVzTW9kdWxlIHtcclxuXHJcbn0iXX0=
