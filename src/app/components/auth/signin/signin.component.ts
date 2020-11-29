import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SeoMetatagsService } from 'src/app/services/seo-metatags.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService,
              private seoMetatagsService: SeoMetatagsService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.initSeoMeta();
  }

  errorMessage: string;
  isSubmitted: boolean;
  signInForm: FormGroup = this.formBuilder.group({
    /* email: ['', [Validators.required, Validators.email]], // Find out that this method doesn't prevent if user type 'username@emailcom' */
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

  // Firebase method
  onLogin() {
    this.isSubmitted = true;
    if(this.signInForm.valid) {
      const email = this.signInForm.get('email').value;
      const password = this.signInForm.get('password').value;
      this.authService.signInUser(email, password).then(
        () => {
          this.router.navigate(['/auth/logged']);
        },
        (error) => {
          if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
            this.errorMessage = 'Zadané údaje nejsou správné, zkuste to prosím znovu.';
          } else {
            this.errorMessage = 'Došlo k chybě. Zkuste se prosím znovu přihlásit.';
          } 
        }
      )
    }
  }

  // REST api method
  /* onLogin() {
    this.authService.signInUser(this.email.value, this.password.value)
    .subscribe(res => {
      this.errorMessage = '';
      if(Array.isArray(res)) {
        this.errorMessage += res[0];
      } 
      if(!this.errorMessage)
        this.router.navigate(['/auth/logged']);
    }, error => {
      this.errorMessage = "Zadané údaje nejsou správné...";
    } );
  } */

  initSeoMeta() {
    this.seoMetatagsService.setSeoMeta('Přihlásit se | Webkomplet', 'Barevný přihlašovací formulář vytvořený pomocí Angular')
  } 

}
