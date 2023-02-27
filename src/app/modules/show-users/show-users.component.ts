import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadUsers } from 'src/app/state/actions/users.action';
import { selectLoading } from 'src/app/state/selectors/users.selector';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit{
  constructor(private store:Store<any>){}

    ngOnInit(): void {
        this.store.dispatch(loadUsers())
    }
}
