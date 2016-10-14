import { Component, OnInit, ElementRef } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  moduleId: module.id,
  templateUrl: 'billboard.component.html'
})
export class BillboardComponent implements OnInit {
  constructor(private http: Http, private el:ElementRef) { }

  ngOnInit() { }

  upload() {
        let inputEl = this.el.nativeElement.firstElementChild;
        if (inputEl.files.length > 0) { // a file was selected
            let file:FileList = inputEl.files[0];
            this.http
                .post('http://your.upload.url', file)
                // do whatever you do...
                // subscribe to observable to listen for response
        }
  }
}