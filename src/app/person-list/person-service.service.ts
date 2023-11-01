import {Injectable} from '@angular/core';
import {Person} from "./person";

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {
  data: Person[] = [
    {
      id: 1,
      firstname: "Jon",
      lastname: "Wick",
      age: 45,
      email: "JonWick@Kill.com",
      address:{
        county:"Georgia",
        city:"Tbilisi",
        district:"Saburtalo",
        flat:40
      }
    },
    {
      id: 2,
      firstname: "Jon",
      lastname: "Brown",
      age: 25,
      email: "JonBwron@cook.com",
      address:{
        county:"Georgia",
        city:"Rustavi",
        district:"Todria",
        flat:13
      }
    },
    {
      id: 3,
      firstname: "Emanuel",
      lastname: "Untold",
      age: 36,
      email: "JonWick@Kill.com",
      address:{
        county:"Georgia",
        city:"Wskaltubo",
        district:"Tabidze",
        flat:2
      }
    }
  ]

  filterPerson = this.data;

  deletePerson(id: number) {
    this.data = this.data.filter(p => p.id != id);
  }


  searchPeronWithNameAndEmail(valueText: string) {
    this.filterPerson = this.data.filter(p =>
      p.firstname.toLowerCase().includes(valueText.toLowerCase()) ||
      p.email.toLowerCase().includes(valueText.toLowerCase())
    )
  }

  constructor() {
  }

  personUpdate(value: Person) {
    const personToChange =
      this.data.find(person => person.id === value.id);
    if(personToChange){
      personToChange.firstname = value.firstname;
      personToChange.lastname =value.lastname;
      personToChange.age = value.age;
      personToChange.email = value.email;
    }
  }
}
