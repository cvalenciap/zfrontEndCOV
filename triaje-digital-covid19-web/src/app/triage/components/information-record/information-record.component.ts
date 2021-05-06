import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-information-record',
  templateUrl: './information-record.component.html',
  styleUrls: ['./information-record.component.scss']
})
export class InformationRecordComponent implements OnInit {

  form: FormGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),
    docType: new FormControl('', Validators.required),
    docNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    birthday: new FormControl('', Validators.required),
    gender: new FormControl('1'),
    phone: new FormControl('', [Validators.required, Validators.minLength(7)]),
    address: new FormControl('', Validators.required),
    latitud: new FormControl('', Validators.required),
    longitud: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    province: new FormControl('', Validators.required),
    district: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onClear(): void {
    
  }
}
