import {Component, OnInit} from '@angular/core';
import {PersonServiceService} from "./person-service.service";
import {FormControl} from "@angular/forms";
import {tap} from "rxjs";
import {Person} from "./person";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  constructor(private personService: PersonServiceService) {
  }

  persons = this.personService.data;

  filterPerson=this.persons;

  searchControl:FormControl=new FormControl("");

  editingPerson:Person|null=null;


  submit(value:Person){
    this.personService.personUpdate(value);
  }


  deletePerson(id: number) {
    this.personService.deletePerson(id);
    this.filterPerson = this.personService.data;
  }

  editPerson(person:Person){
    this.editingPerson=person;
  }

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        tap(value=>{
          this.personService.searchPeronWithNameAndEmail(value);
          this.filterPerson=this.personService.filterPerson;
        })
      ).subscribe()
  }

}
