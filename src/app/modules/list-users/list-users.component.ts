import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/interfaces/user.interface';
import { LoadUsersService } from 'src/app/services/load-users.service';
import { loadUsers, loadedUsers } from 'src/app/state/actions/users.action';
import { selectLoading } from 'src/app/state/selectors/users.selector';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  loading$: Observable<boolean> = new Observable()
  constructor(private store: Store<any>, private service: LoadUsersService) { }
  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading)
    this.store.dispatch(loadUsers())
    
    this.service.loadUsers().subscribe
      ((response: UserModel[]) => {
        this.store.dispatch(loadedUsers(
          { users: response }
        )
        );
      })
  }
}
