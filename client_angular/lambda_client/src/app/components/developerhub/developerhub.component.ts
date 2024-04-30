import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {GridApi} from "ag-grid-community";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {DataServiceService} from "../../service/data-service.service";
interface User {
  name: string;
  bskills:string;
  skills: string;
  project: string;
  team: string;
  points: number;
}


@Component({
  selector: 'app-developerhub',
  templateUrl: './developerhub.component.html',
  styleUrls: ['./developerhub.component.scss']
})
export class DeveloperhubComponent {
  gridApi:GridApi;
  form: FormGroup;
  data=this.dataService.getUsers();
  // data: User[] = [
  //   { name: 'Ishan',bskills:'CoolApi', skills: 'Java,Angular', project: 'Snowflake', team: 'Team 1', points: 30 },
  //   { name: 'Mehak', bskills: 'Myhaze',skills:'Python,Camunda', project: 'Workflow', team: 'Team 2', points: 40 },
  //   { name: 'Mansi',bskills:'Bus', skills: 'Java,Python', project: 'Dashboard,NLP', team: 'Team 1', points: 20 },
  // ];
  filteredUsers: User[] = [];
  searchTerm: string = '';

  columnDefs = [
    { field: 'name', headerName: 'Name' },
    { field: 'subject', headerName: 'Subject Expertise' },
    { field: 'contact', headerName: 'Contact Details' },
    { field: 'freeSlot', headerName: 'Free Slot' },
   
  ];

  defaultColDef = {
    resizable: true,
    sortable: true,
    filter: true,
    floatingFilter: true,
  };

  constructor(private fb: FormBuilder,private snackBar: MatSnackBar,private dataService: DataServiceService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      skills: ['', Validators.required],
      bskills: ['', Validators.required],
      project: ['', Validators.required],
      team: ['', Validators.required],
    });
  }

  submitForm() {
   console.log("hello")
  }

  onGridReady(params: any) {
    this.gridApi = params.api;

    params.api.sizeColumnsToFit();
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
