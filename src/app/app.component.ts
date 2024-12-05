import { Component } from '@angular/core';
import { UserListPageComponent } from "./ManejoUsuarios/Components/user-list-page/user-list-page.component";
import { CreateUserPageComponent } from "./ManejoUsuarios/Components/create-user-page/create-user-page.component";

@Component({
  selector: 'app-root',
  imports: [ UserListPageComponent, CreateUserPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'catedraDos';
}
