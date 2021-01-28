import faker from "faker";
import { Mappabble } from "./CustomMap";

//this tells typescript that every instance of
//class user satisfies the mappabble interface
//(i.e it should have all the properties requested by the mappable interface)
//this is a best practice to allow us to detect errors quickly
//when the class doestn satify the interface
export class User implements Mappabble {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;
  //constructirs hust show the initial values like state.
  constructor() {
    this.name = faker.name.firstName();
    //the type declaration documentation states that long and
    //lat return strings but we know thats not true so we
    //convert the string returned to a number ourselces with parseFloat
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.latitude()),
    };
    this.color = "red";
  }

  markerContent(): string {
    return `<h3>User Name: ${this.name}</h3>`;
  }
}
