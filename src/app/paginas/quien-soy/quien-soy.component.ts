import { Component, OnInit } from '@angular/core';
import { UserGithub } from 'src/app/interfaces/user-github';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  constructor(private http: HttpClient) { }

  data: UserGithub = {
    name: '',
    login: '',
    location: '',
    avatar_url: '',
  };
  srcFoto = '';

  ngOnInit(): void {
    this.http.get('https://api.github.com/users/silvia-rus')
             .subscribe((rsp: any) => {
      this.data = rsp;
      this.srcFoto = rsp.avatar_url;
      console.log(rsp);
    });
  }

}


