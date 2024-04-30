import { Injectable } from '@angular/core';
interface User {
  name: string;
  subject: string;
  contact: string;
  freeSlot: string;

}
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  users: User[] = [
    { name: 'Teacher1',subject:'OS,Python', contact: 'abc@amity.edu',freeSlot:'MON 9-10AM\nTUE 1PM-2PM' },
    { name: 'Teacher2',subject:'Java,Python', contact: 'xyz@amity.edu',freeSlot:'MON 10-11AM\nTUE 4PM-5PM' },
    { name: 'Teacher3',subject:'Java,C++', contact: 'lmn@amity.edu',freeSlot:'MON,TUE,THURS 12-1PM' },
    { name: 'Teacher4',subject:'OS,C++', contact: 'pqr@amity.edu',freeSlot:'WED,FRI 1PM-2PM' },
  ];
  constructor() { }
  addUser(user: User): void {
    this.users.push(user);
  }

  userExists(name: string): boolean {
    return this.users.some(user => user.name === name);
  }

  addPoints(name: string, points: number): void {
    
  }

  getUsers(): User[] {
    return this.users;
  }
}
