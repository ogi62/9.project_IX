import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageInterface, NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {

  messages$: Observable<MessageInterface[]>

  constructor(private notificationsService: NotificationsService) {
    this.messages$ = this.notificationsService.messagesOutput;
   }

  ngOnInit(): void {
  }

  clearMessage(id: number) {
    this.notificationsService.clearMessage(id);
  }

}
