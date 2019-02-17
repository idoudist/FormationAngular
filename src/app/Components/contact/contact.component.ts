import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Models/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  listContact: Contact[];

  constructor() { }

  ngOnInit() {
    this.listContact = [  {'firstName': 'fadi', 'lastName': 'idoudi', 'numero': 20},
    {'firstName': 'houda', 'lastName': 'atallah', 'numero': 20}];
  }

}
