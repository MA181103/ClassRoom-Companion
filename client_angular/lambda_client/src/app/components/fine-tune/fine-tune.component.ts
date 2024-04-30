import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DataServiceService} from "../../service/data-service.service";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {timeout} from "rxjs";

@Component({
  selector: 'app-fine-tune',
  templateUrl: './fine-tune.component.html',
  styleUrls: ['./fine-tune.component.scss']
})
export class FineTuneComponent {
  form: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private dataService: DataServiceService,private http: HttpClient,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      question: [''],
      answer: ['']
    });
  }

  onSubmit(): void {
    const name = this.form.get('name').value;
    const question = this.form.get('question').value;
    const answer = this.form.get('answer').value;

    if (this.dataService.userExists(name)) {
      this.dataService.addPoints(name, 5);
    } else {
      const bskills = 'add your default value for bskills here';
      const skills = 'add your default value for skills here';
      const project = 'add your default value for project here';
      const team = 'add your default value for team here';

    }

    const endpoint = 'http://localhost:5004/getFaq';
    const body = { url: this.url };

    this.http.get(endpoint).subscribe((response: any) => {

    });
    this._snackBar.open("Successfuly Uploaded","Dismiss");
    this.form.reset()
  }
  faq: string[];
  url: string;

  generateFAQ() {
    const endpoint = 'http://localhost:5004/getFaq';
    const body = { url: this.url };

    this.http.get(endpoint).subscribe((response: any) => {
    });
    this._snackBar.open("Successfuly Uploaded","Dismiss");

  }


  onFileSelected(event) {
    const file = event.target.files[0];
    // upload file to server
  }


}
