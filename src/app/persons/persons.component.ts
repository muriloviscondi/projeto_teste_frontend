import { Component, OnInit } from '@angular/core';
import { ResponsePersons } from './person.model';
import { PersonService } from './person.service';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent implements OnInit {
  responsePersons!: ResponsePersons;
  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService
      .getPersons()
      .subscribe((res) => (this.responsePersons = res));
  }

  delete(id: string) {
    this.personService.deletePerson(id).subscribe((res) => {
      alert('Pessoa removida com suceso!');
    });
  }
}
