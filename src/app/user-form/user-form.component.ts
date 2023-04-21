import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IUser } from '../models/user.model';
import { COUNTRIES } from '../data/countries';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styles: []
})
export class UserFormComponent {
  @Input() addUser!: (user: IUser) => void;
  public userForm: FormGroup;
  public countryList = COUNTRIES;
  public genderList = [
    { code: 'male', name: 'Male' },
    { code: 'female', name: 'Female' }
  ];

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      first: this.fb.control(''),
      last: this.fb.control(''),
      title: this.fb.control('Mr'),
      email: this.fb.control('', [Validators.required, Validators.email]),
      phone: this.fb.control(''),
      cell: this.fb.control(''),
      nat: this.fb.control(this.countryList[0].code),
      gender: this.fb.control('male')
    });
  }

  public randomImage(): number {
    return Math.round(99 * Math.random());
  }

  public onSubmit(): void {
    if (this.userForm.invalid) return;

    const { first, last, title, email, phone, cell, nat, gender } = this.userForm.getRawValue();

    const pictureRandom = this.randomImage();

    const userFormat: IUser = {
      gender,
      name: { title, first, last },
      email,
      phone,
      cell,
      id: {
        name: Math.random().toString().slice(2),
        value: null,
      },
      picture: {
        large: `https://randomuser.me/api/portraits/men/${ pictureRandom }.jpg`,
        medium: `https://randomuser.me/api/portraits/men/${ pictureRandom }.jpg`,
        thumbnail: `https://randomuser.me/api/portraits/men/${ pictureRandom }.jpg`,
      },
      nat
    };

    this.addUser(userFormat);
    this.userForm.reset();
  }
}
