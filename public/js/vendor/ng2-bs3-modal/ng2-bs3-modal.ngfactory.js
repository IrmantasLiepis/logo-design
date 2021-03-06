/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('@angular/core/src/linker/ng_module_factory');
var import1 = require('./ng2-bs3-modal');
var import2 = require('@angular/common/src/common_module');
var import3 = require('@angular/common/src/localization');
var import5 = require('@angular/core/src/i18n/tokens');
var Ng2Bs3ModalModuleInjector = (function (_super) {
    __extends(Ng2Bs3ModalModuleInjector, _super);
    function Ng2Bs3ModalModuleInjector(parent) {
        _super.call(this, parent, [], []);
    }
    Object.defineProperty(Ng2Bs3ModalModuleInjector.prototype, "_NgLocalization_2", {
        get: function () {
            if ((this.__NgLocalization_2 == null)) {
                (this.__NgLocalization_2 = new import3.NgLocaleLocalization(this.parent.get(import5.LOCALE_ID)));
            }
            return this.__NgLocalization_2;
        },
        enumerable: true,
        configurable: true
    });
    Ng2Bs3ModalModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._Ng2Bs3ModalModule_1 = new import1.Ng2Bs3ModalModule();
        return this._Ng2Bs3ModalModule_1;
    };
    Ng2Bs3ModalModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import1.Ng2Bs3ModalModule)) {
            return this._Ng2Bs3ModalModule_1;
        }
        if ((token === import3.NgLocalization)) {
            return this._NgLocalization_2;
        }
        return notFoundResult;
    };
    Ng2Bs3ModalModuleInjector.prototype.destroyInternal = function () {
    };
    return Ng2Bs3ModalModuleInjector;
}(import0.NgModuleInjector));
exports.Ng2Bs3ModalModuleNgFactory = new import0.NgModuleFactory(Ng2Bs3ModalModuleInjector, import1.Ng2Bs3ModalModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWJzMy1tb2RhbC5uZ2ZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcmMvbmcyLWJzMy1tb2RhbC9uZzItYnMzLW1vZGFsLm5nZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFDRixvQkFBb0I7Ozs7Ozs7QUFFckIsSUFBWSxPQUFPLFdBQU0sNENBQTRDLENBQUMsQ0FBQTtBQUN0RSxJQUFZLE9BQU8sV0FBTSxpQkFBaUIsQ0FBQyxDQUFBO0FBQzNDLElBQVksT0FBTyxXQUFNLG1DQUFtQyxDQUFDLENBQUE7QUFDN0QsSUFBWSxPQUFPLFdBQU0sa0NBQWtDLENBQUMsQ0FBQTtBQUU1RCxJQUFZLE9BQU8sV0FBTSwrQkFBK0IsQ0FBQyxDQUFBO0FBQ3pEO0lBQXdDLDZDQUFtRDtJQUl6RixtQ0FBWSxNQUF1QjtRQUNqQyxrQkFBTSxNQUFNLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxzQkFBSSx3REFBaUI7YUFBckI7WUFDRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSyxJQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxPQUFPLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLENBQUM7WUFDckosTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUNELGtEQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzVELE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDbkMsQ0FBQztJQUNELCtDQUFXLEdBQVgsVUFBWSxLQUFTLEVBQUMsY0FBa0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQUMsQ0FBQztRQUN0RSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1FBQUMsQ0FBQztRQUNoRixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUFDLENBQUM7UUFDMUUsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsbURBQWUsR0FBZjtJQUNBLENBQUM7SUFDSCxnQ0FBQztBQUFELENBQUMsQUF4QkQsQ0FBd0MsT0FBTyxDQUFDLGdCQUFnQixHQXdCL0Q7QUFDWSxrQ0FBMEIsR0FBc0QsSUFBSSxPQUFPLENBQUMsZUFBZSxDQUFDLHlCQUF5QixFQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDIn0=