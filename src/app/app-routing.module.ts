import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePersonComponent } from './persons/create-person/create-person.component';
import { PersonsComponent } from './persons/persons.component';
import { UpdateComponent } from './persons/update/update.component';

const routes: Routes = [
  { path: 'persons', component: PersonsComponent },
  { path: 'persons/create', component: CreatePersonComponent },
  { path: 'persons/:id', component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
