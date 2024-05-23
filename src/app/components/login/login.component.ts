import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DespesasService } from '../../services/despesas.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  user = this.despesasService.user;

  constructor(
    private fb: FormBuilder,
    private despesasService: DespesasService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const enteredUsername = this.loginForm.value.username;
      const enteredPassword = this.loginForm.value.password;

      if (
        enteredUsername === this.user.username &&
        enteredPassword === this.user.password
      ) {
        this.router.navigate(['/despesas']);
        Swal.fire({
          icon: 'success',
          title: 'Login bem-sucedido!',
          text: 'Você foi redirecionado para a página de despesas.',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Credenciais incorretas!',
          text: 'Por favor, verifique seu nome de usuário e senha e tente novamente.',
        });
      }
    }
  }
}
