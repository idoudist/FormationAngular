import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/Services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  tempMess: string;

  constructor(public messageService: MessageService) { }

  ngOnInit() {
    this.tempMess = '';
  }

  add() {
    this.messageService.add(this.tempMess);
  }

  add2(message: string) {
    this.messageService.add(message);
  }

}
