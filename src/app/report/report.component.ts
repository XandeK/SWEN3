import { Component, OnInit } from '@angular/core';
import { HousekeepingService } from '../housekeeping.service';
import { FormBuilder, FormGroup } from 
'@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  records: any = [];
  myForm: FormGroup;

  constructor(private housekeepingService: HousekeepingService,private fb: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({date: '',roomtype: '',guestnumber: '',
    });
      // Retrieve posts from the API
   this.housekeepingService.getroomreport().subscribe(records => {
    this.records = records;
   });
  }
}
