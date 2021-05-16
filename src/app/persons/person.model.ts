// Model for getPersons
export interface Person {
  id: string;
  name: string;
  phoneNumber: string;
  phoneNumberType: string;
}

export interface ResponsePersons {
  data: Person[];
}

// Model for create
export interface RequestCreate {
  name: string;
  phoneNumber: string;
  phoneNumberType: string;
}

export interface ResponseCreate {
  id: string;
  name: string;
  phoneNumber: string;
  phoneNumberType: string;
}

// Model for getPerson
export interface ResponsePerson {
  data: Person[];
}

// Model for update
export interface RequestUpdate {
  name: string;
  phoneNumber: string;
  phoneNumberType: string;
}

export interface ResponseUpdate {
  id: string;
  name: string;
  phoneNumber: string;
  phoneNumberType: string;
}
