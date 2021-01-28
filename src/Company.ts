import faker from "faker";
import { Mappabble } from "./CustomMap";

//look at classes as objects with keys and values

//this tells typescript that every instance of
//class user satisfies the mappabble interface
//(i.e it should have all the properties requested by the mappable interface)
//this is a best practice to allow us to detect errors quickly
//when the class doestn satify the interface
export class Company implements Mappabble {
  //FIELDS
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };

    this.color = "red";
  }

  //FIELDS
  markerContent(): string {
    return `
    <div>
        <h1>Company Name: ${this.companyName}</h1>
        <h3>Catch Phrase: ${this.catchPhrase}</h3>
    </div>`;
  }
}
