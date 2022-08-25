import { Injectable } from '@angular/core';
import { Subject,scan, Observable } from 'rxjs';

export interface MessageInterface {
  id: number;
  type: 'success' | 'error' | 'clear';
  text?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  messagesInput: Subject<MessageInterface>;
  messagesOutput: Observable<MessageInterface[]>;

  constructor() {
    this.messagesInput = new Subject<MessageInterface>();
    this.messagesOutput = this.messagesInput.pipe(
      scan((acc:MessageInterface[], val:MessageInterface) => {
        if(val.type === 'clear') {
          return acc.filter(message => message.id !== val.id);
        } else {
          return [...acc, val];
        }
      }, [])
    );
   }


  addSuccess(message: string) {
    const id = this.randomId();
    this.messagesInput.next({
      id,
      text: message,
      type: 'success'
    });

    setTimeout(()=> {
      this.clearMessage(id);
    }, 10000)
  }

  addError(message: string) {
    const id = this.randomId();
    this.messagesInput.next({
      id,
      text: message,
      type: 'error'
    });

    setTimeout(()=> {
      this.clearMessage(id);
    }, 5000)
  }

  clearMessage(id: number) {
    this.messagesInput.next({
      id,
      type: 'clear'
    });
  }

  private randomId() {
    return Math.round(Math.random() * 100000 );
  }


}
