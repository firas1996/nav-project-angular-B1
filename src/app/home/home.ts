import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
};

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  users = signal<User[] | undefined>([]);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    const subscribe = this.httpClient.get('http://localhost:1234/user').subscribe({
      next: (res: any) => {
        this.users.set(res.data);
        console.log(this.users());
      },
    });
    this.destroyRef.onDestroy(() => {
      subscribe.unsubscribe();
    });
  }
}
