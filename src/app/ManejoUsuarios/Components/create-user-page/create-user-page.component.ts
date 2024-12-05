import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../Services/user-services.service';
import { User } from '../../Interfaces/user';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user-page',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-user-page.component.html',
  styleUrl: './create-user-page.component.css'
})
export class CreateUserPageComponent implements OnInit {
  private fb: FormBuilder = inject(FormBuilder);
  private userService: UserService = inject(UserService);

  userForm: FormGroup = new FormGroup({});
  apiResponse: string | null = null;

  ngOnInit(): void {
    this.userForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      correo: ['', [Validators.required, Validators.email]],
      fechaNacimiento: ['', [Validators.required]],
      genero: ['', [Validators.required]]
    });
  }

  createUser(): void {
    if (this.userForm.invalid) {
      this.apiResponse = 'Formulario inválido. Verifique los campos.';
      return;
    }

    const newUser: User = this.userForm.value;
    this.userService.createUser(newUser).subscribe(
      (response) => {
        this.apiResponse = 'Usuario creado exitosamente.';
        this.userForm.reset();
      },
      (error) => {
        this.apiResponse = 'Error al crear usuario. Intente nuevamente.';
        console.error(error);
      }
    );
  }
}
