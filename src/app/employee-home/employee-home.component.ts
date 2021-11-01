import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {

  public employeeDetails: Employee[] = [];

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getEmployeeData().subscribe(response => {
      this.employeeDetails = response;
      console.log(this.employeeDetails);
    });
  }

}