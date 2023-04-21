import { COUNTRIES } from '../data/countries';

interface IFullName {
  title: string;
  first: string;
  last: string;
}

export interface IUser {
  gender: string;
  name: IFullName;
  email: string;
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string|null;
  },
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  },
  nat: string;
}


export class UserModel {
  constructor(
    public gender: string,
    public name: IFullName,
    public email: string,
    public phone: string,
    public cell: string,
    public id: {
      name: string,
      value: string|null,
    },
    public picture: {
      large: string,
      medium: string,
      thumbnail: string,
    },
    public nat: string
  ) { }

  public static fromJSON(user: IUser): UserModel
  {
    return new UserModel(
      user.gender,
      user.name,
      user.email,
      user.phone,
      user.cell,
      user.id,
      user.picture,
      user.nat
    );
  }

  get fullName(): string
  {
    return `${this.name.title}. ${this.name.first} ${this.name.last}`;
  }

  get nationality(): string
  {
    const country = COUNTRIES.find(country => country.code === this.nat);

    return country ? country.name : this.nat;
  }
}
