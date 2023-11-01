import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {tap} from "rxjs";
import {Person} from "../person";

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit, OnChanges {

  @Input() editingPerson: Person | null = null;

  @Output() submit = new EventEmitter<Person>();

  form: FormGroup = new FormGroup({})
  address:FormGroup=this.fb.group({
    county:[''],
    city:[''],
    district:[''],
    flat:['']
  })
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstname: ['', Validators.minLength(2)],
      lastname: ['', Validators.minLength(2)],
      age: ['', Validators.min(21)],
      email: this.fb.control("",Validators.email),
      address:this.address
    })
  }

  ngOnInit(): void {

  }

  submitClick() {
    if (this.form.valid) {
      this.submit.emit({id: this.editingPerson?.id, ...this.form.value});
    }
  }

  cancel() {
    this.form.reset();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //@ts-ignore
    if (changes.editingPerson && changes.editingPerson.currentValue) {
      //@ts-ignore
      this.form.patchValue(this.editingPerson);
    }
  }


}
