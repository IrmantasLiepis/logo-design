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
var contest_1 = require('../models/contest');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var ContestsService = (function () {
    function ContestsService(http) {
        this.http = http;
        this.contests = [];
        this.designers = [];
        this.contestEdited = new core_1.EventEmitter();
    }
    ContestsService.prototype.getAllContests = function () {
        return this.http.get('http://localhost:3000/api/v1/konkursai')
            .map(function (res) {
            console.log(res.json());
            //        const data = res.json().obj;
            var data = res.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var contest = new contest_1.Contest(data[i].name, data[i].uniqueId, data[i].idName, data[i]._id, data[i].category, data[i].description, data[i].award, data[i].status, data[i].submitionCount, data[i].daysRemaining, data[i].startDate, data[i].endDate, data[i].submitions, data[i].publisher);
                objs.push(contest);
            }
            ;
            return objs;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ContestsService.prototype.getIndividualContests = function (id) {
        return this.http.get('http://localhost:3000/api/v1/konkursai')
            .map(function (res) {
            console.log(res.json());
            //        const data = res.json().obj;
            var data = res.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                if (data[i].publisher._id == id) {
                    var contest = new contest_1.Contest(data[i].name, data[i].uniqueId, data[i].idName, data[i]._id, data[i].category, data[i].description, data[i].award, data[i].status, data[i].submitionCount, data[i].daysRemaining, data[i].startDate, data[i].endDate, data[i].submitions, data[i].publisher);
                    objs.push(contest);
                }
            }
            ;
            console.log('getIndividualContests objs after loop');
            console.log(objs);
            return objs;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ContestsService.prototype.getIndividualContest = function (id) {
        return this.http.get('http://localhost:3000/api/v1/konkursai/' + id)
            .map(function (res) {
            console.log(res.json());
            var data = res.json().obj;
            var contest = new contest_1.Contest(data.name, data.uniqueId, data.idName, data._id, data.category, data.description, data.award, data.status, data.submitionCount, data.daysRemaining, data.startDate, data.endDate, data.submitions, data.publisher);
            return contest;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ContestsService.prototype.addContest = function (contest) {
        var body = JSON.stringify(contest);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.post("http://localhost:3000/konkursai" + token, body, { headers: headers })
            .map(function (res) {
            var data = res.json().obj;
            var contest = new contest_1.Contest(data.name, data.uniqueId, data.idName, data._id, data.category, data.description, data.award, data.status, data.submitionCount, data.daysRemaining, data.startDate, data.endDate, data.submitions, data.publisher);
            return contest;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ContestsService.prototype.updateContest = function (contest) {
        var body = JSON.stringify(contest);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.patch("http://localhost:3000/konkursai/" + contest.id + token, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ContestsService.prototype.editContest = function (contest) {
        this.contestEdited.emit(contest);
    };
    ContestsService.prototype.deleteContest = function (contest) {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        this.contests.splice(this.contests.indexOf(contest), 1);
        return this.http.delete("http://localhost:3000/konkursai/" + contest.id + token)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ContestsService.prototype.updateSubmitionRating = function (contest, submition) {
        var body = JSON.stringify(submition);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.patch("http://localhost:3000/api/v1/submitions/" + contest.idName + token, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ContestsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContestsService);
    return ContestsService;
}());
exports.ContestsService = ContestsService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QyxlQUFlLENBQUMsQ0FBQTtBQUN6RCx3QkFBd0IsbUJBQW1CLENBQUMsQ0FBQTtBQUU1QyxxQkFBOEIsZUFBZSxDQUFDLENBQUE7QUFDOUMsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUdqQjtJQUlFLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUg5QixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFXLENBQUM7SUFDVixDQUFDO0lBRW5DLHdDQUFjLEdBQWQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUM7YUFDM0QsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDaEMsc0NBQXNDO1lBQzlCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDNUIsSUFBSSxJQUFJLEdBQVUsRUFBRSxDQUFDO1lBQ3JCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNqQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcs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dHMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250ZXN0IH0gZnJvbSAnLi4vbW9kZWxzL2NvbnRlc3QnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL3VzZXInO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29udGVzdHNTZXJ2aWNlIHtcclxuICBjb250ZXN0cyA9IFtdO1xyXG4gIGRlc2lnbmVycyA9IFtdO1xyXG4gIGNvbnRlc3RFZGl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPENvbnRlc3Q+KCk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgZ2V0QWxsQ29udGVzdHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9rb25rdXJzYWknKVxyXG4gICAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmpzb24oKSk7XHJcbi8vICAgICAgICBjb25zdCBkYXRhID0gcmVzLmpzb24oKS5vYmo7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5qc29uKCkub2JqO1xyXG4gICAgICAgIGxldCBvYmpzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBsZXQgY29udGVzdCA9IG5ldyBDb250ZXN0KGRhdGFbaV0ubmFtZSwgZGF0YVtpXS51bmlxdWVJZCwgZGF0YVtpXS5pZE5hbWUsIGRhdGFbaV0uX2lkLCBkYXRhW2ldLmNhdGVnb3J5LCBkYXRhW2ldLmRlc2NyaXB0aW9uLCBkYXRhW2ldLmF3YXJkLCBkYXRhW2ldLnN0YXR1cywgZGF0YVtpXS5zdWJtaXRpb25Db3VudCwgZGF0YVtpXS5kYXlzUmVtYWluaW5nLCBkYXRhW2ldLnN0YXJ0RGF0ZSwgZGF0YVtpXS5lbmREYXRlLCBkYXRhW2ldLnN1Ym1pdGlvbnMsIGRhdGFbaV0ucHVibGlzaGVyKTtcclxuICAgICAgICAgIG9ianMucHVzaChjb250ZXN0KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBvYmpzO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIGdldEluZGl2aWR1YWxDb250ZXN0cyhpZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9rb25rdXJzYWknKVxyXG4gICAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmpzb24oKSk7XHJcbi8vICAgICAgICBjb25zdCBkYXRhID0gcmVzLmpzb24oKS5vYmo7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5qc29uKCkub2JqO1xyXG4gICAgICAgIGxldCBvYmpzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAoZGF0YVtpXS5wdWJsaXNoZXIuX2lkID09IGlkKSB7XHJcbiAgICAgICAgICBsZXQgY29udGVzdCA9IG5ldyBDb250ZXN0KGRhdGFbaV0ubmFtZSwgZGF0YVtpXS51bmlxdWVJZCwgZGF0YVtpXS5pZE5hbWUsIGRhdGFbaV0uX2lkLCBkYXRhW2ldLmNhdGVnb3J5LCBkYXRhW2ldLmRlc2NyaXB0aW9uLCBkYXRhW2ldLmF3YXJkLCBkYXRhW2ldLnN0YXR1cywgZGF0YVtpXS5zdWJtaXRpb25Db3VudCwgZGF0YVtpXS5kYXlzUmVtYWluaW5nLCBkYXRhW2ldLnN0YXJ0RGF0ZSwgZGF0YVtpXS5lbmREYXRlLCBkYXRhW2ldLnN1Ym1pdGlvbnMsIGRhdGFbaV0ucHVibGlzaGVyKTtcclxuICAgICAgICAgIG9ianMucHVzaChjb250ZXN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRJbmRpdmlkdWFsQ29udGVzdHMgb2JqcyBhZnRlciBsb29wJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cob2Jqcyk7XHJcbiAgICAgICAgcmV0dXJuIG9ianM7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5kaXZpZHVhbENvbnRlc3QoaWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEva29ua3Vyc2FpLycgKyBpZClcclxuICAgICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5qc29uKCkpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXMuanNvbigpLm9iajtcclxuICAgICAgICBsZXQgY29udGVzdCA9IG5ldyBDb250ZXN0KGRhdGEubmFtZSwgZGF0YS51bmlxdWVJZCwgZGF0YS5pZE5hbWUsIGRhdGEuX2lkLCBkYXRhLmNhdGVnb3J5LCBkYXRhLmRlc2NyaXB0aW9uLCBkYXRhLmF3YXJkLCBkYXRhLnN0YXR1cywgZGF0YS5zdWJtaXRpb25Db3VudCwgZGF0YS5kYXlzUmVtYWluaW5nLCBkYXRhLnN0YXJ0RGF0ZSwgZGF0YS5lbmREYXRlLCBkYXRhLnN1Ym1pdGlvbnMsIGRhdGEucHVibGlzaGVyKTtcclxuICAgICAgICByZXR1cm4gY29udGVzdDtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICBhZGRDb250ZXN0KGNvbnRlc3Q6IENvbnRlc3QpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShjb250ZXN0KTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/ICc/dG9rZW49JyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJyc7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2tvbmt1cnNhaVwiICsgdG9rZW4sIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IHJlcy5qc29uKCkub2JqO1xyXG4gICAgICBsZXQgY29udGVzdCA9IG5ldyBDb250ZXN0KGRhdGEubmFtZSwgZGF0YS51bmlxdWVJZCwgZGF0YS5pZE5hbWUsIGRhdGEuX2lkLCBkYXRhLmNhdGVnb3J5LCBkYXRhLmRlc2NyaXB0aW9uLCBkYXRhLmF3YXJkLCBkYXRhLnN0YXR1cywgZGF0YS5zdWJtaXRpb25Db3VudCwgZGF0YS5kYXlzUmVtYWluaW5nLCBkYXRhLnN0YXJ0RGF0ZSwgZGF0YS5lbmREYXRlLCBkYXRhLnN1Ym1pdGlvbnMsIGRhdGEucHVibGlzaGVyKTtcclxuICAgICAgcmV0dXJuIGNvbnRlc3Q7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDb250ZXN0KGNvbnRlc3Q6IENvbnRlc3QpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShjb250ZXN0KTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/ICc/dG9rZW49JyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJyc7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9rb25rdXJzYWkvXCIgKyBjb250ZXN0LmlkICsgdG9rZW4sIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcbiAgXHJcblxyXG4gIGVkaXRDb250ZXN0KGNvbnRlc3Q6IGFueSkge1xyXG4gICAgdGhpcy5jb250ZXN0RWRpdGVkLmVtaXQoY29udGVzdCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVDb250ZXN0KGNvbnRlc3Q6IGFueSkge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/ICc/dG9rZW49JyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJyc7XHJcbiAgICB0aGlzLmNvbnRlc3RzLnNwbGljZSh0aGlzLmNvbnRlc3RzLmluZGV4T2YoY29udGVzdCksIDEpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAva29ua3Vyc2FpL1wiICsgY29udGVzdC5pZCArIHRva2VuKVxyXG4gICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVN1Ym1pdGlvblJhdGluZyhjb250ZXN0OiBhbnksIHN1Ym1pdGlvbjogYW55KSB7XHJcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoc3VibWl0aW9uKTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/ICc/dG9rZW49JyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJyc7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvc3VibWl0aW9ucy9cIiArIGNvbnRlc3QuaWROYW1lICsgdG9rZW4sIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIFxyXG59Il19
