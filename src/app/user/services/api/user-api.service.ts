import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/User.model';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) {
  }

  create(user: User): Observable<User> {
    return of(undefined).pipe(delay(2000));
    // return this.http.post<User>('https://procom-interview-employee-test.azurewebsites.net/Employee', user);
  }
}
