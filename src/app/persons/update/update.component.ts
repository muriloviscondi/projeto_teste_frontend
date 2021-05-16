import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestUpdate } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  id!: string;
  request!: RequestUpdate;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));

    this.personService.getPerson(this.id).subscribe((res) => {
      this.request = {
        name: `${res.name}`,
        phoneNumber: `${res.phoneNumber}`,
        phoneNumberType: `${res.phoneNumberType}`,
      };
    });
  }

  update() {
    this.personService.updatePerson(this.id, this.request).subscribe((res) => {
      alert(`Atualizar ${res.name}`);
    });
  }
}
