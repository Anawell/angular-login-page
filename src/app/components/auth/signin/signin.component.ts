import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router,
              private title: Title,
              private meta: Meta) { }

  ngOnInit(): void {
    this.initSeoMeta();
  }

  isSubmitted: boolean;
  signInForm: FormGroup = this.formBuilder.group({
    /* email: ['', [Validators.required, Validators.email]], */
    email: ['', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  isInputValid(field: string) {
    return (
      this.signInForm.get(field).errors && this.signInForm.get(field).touched ||
      this.signInForm.get(field).untouched &&
      this.isSubmitted && this.signInForm.get(field).errors
    );
  }

  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }

  onLogin() {
    this.isSubmitted = true;
    if(this.signInForm.valid) {
      const email = this.email.value;
      const password = this.password.value;
      this.router.navigate(['/auth/logged']); // redirect here as the API doesn't exist :)
      this.authService.signInUser(email, password).then(
        () => {
            console.log('success');
            this.router.navigate(['/auth/logged']);
        }
      ).catch(
        (error) => {
          console.log(error.message);
        }
      );
    }
  }

  initSeoMeta() {
    this.meta.addTags([
      { name: 'description', content: 'Barevný přihlašovací formulář vytvořený pomocí Angular' }
    ])
    this.title.setTitle('Přihlásit se | Webkomplet');
  }

}
