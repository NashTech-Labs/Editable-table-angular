import { Component } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'table-form-array';

  displayedColumns: string[] = ['name', 'age', 'food', 'action'];
  dataSource = new MatTableDataSource();
  form!: FormGroup;
  data!: FormArray;
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // Create form
    this.form = this.fb.group({
      data: this.fb.array([])
    });
    //add default data
    this.dateFormArray.push(this.fb.group({ name: ['John'], age: [34], food: ['pizza-1'] }));
    this.dataSource.data = this.dateFormArray.controls;

  }

// Casting AbstractControl as FormArray
  get dateFormArray():FormArray {
    return this.form.get('data') as FormArray;
  }


  addLine(): void {
    const row = this.fb.group({ name: [], age: [], food: [] });
    // Add new form in FormArray
    this.dateFormArray.push(row);
    // Update table
    this.dataSource.data = this.dateFormArray.controls;
  }

  //remove row from table
  removeLine(index:number){
    this.dateFormArray.removeAt(index)
    this.dataSource.data = this.dateFormArray.controls;
  }
}
