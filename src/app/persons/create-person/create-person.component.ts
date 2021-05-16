import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css'],
})
export class CreatePersonComponent implements OnInit {
  request: RequestCreate = {
    name: '',
    phoneNumber: '',
    phoneNumberType: '',
  };

  response!: ResponseCreate;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {}

  save() {
    this.personService.createPerson(this.request).subscribe((res) => {
      this.response = res;
    });
  }
}
