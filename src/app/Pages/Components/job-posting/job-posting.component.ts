import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


export interface JobData {
  location: string;
  department: string;
  type: string;
  salary: number;
  postedDate: Date;
  jobDescription: string;
}


@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.css'],
})
export class JobPostingComponent implements OnInit {
  visible: boolean = false;

  values: string;
  jobObject: any = {
    location: '',
    department: '',
    type: '',
    salary: '',
    postedDate: '',
    jobDescription: ''
  }


  constructor(
    private router: Router,
    private fb : FormBuilder,
  ) {}
  ngOnInit(): void {}

  JobPostingForm = this.fb.group({
    location: ['', Validators.required],
    department: ['', Validators.required],
    type: ['', Validators.required],
    salary: ['', Validators.required],
    postedDate: ['', Validators.required],
    jobDescription: ['', Validators.required],
  })
  get location(){
    return this.JobPostingForm.controls['location'];
  }
  get department(){
    return this.JobPostingForm.controls['department'];
  }
  get type(){
    return this.JobPostingForm.controls['type'];
  }
  get salary(){
    return this.JobPostingForm.controls['salary'];
  }
  get postedDate(){
    return this.JobPostingForm.controls['postedDate'];
  }
  get jobDescription(){
    return this.JobPostingForm.controls['jobDescription'];
  }



  createJob() {
    this.visible = true;
  }
  onCreateJob(){
    console.log(this.JobPostingForm.value);
  }










}
