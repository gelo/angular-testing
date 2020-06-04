import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-test-bed',
  templateUrl: './sample-test-bed.component.html',
  styleUrls: ['./sample-test-bed.component.css']
})
export class SampleTestBedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public characterLimitTen(word: string): boolean {
    if (word.length <= 10) {
      return false;
    } else { return true; }
  }

}
