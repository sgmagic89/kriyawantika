import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  contactForm: FormGroup;
  submitted = false;
  private apiUrl = 'https://mailthis.to/contact@kriyawantika.com'
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['',  [Validators.required]],
      email: ['',  [Validators.required,Validators.email]],
      message: ['',  [Validators.required]]
    }); 
   }

   onSubmit() {
     this.submitted = true;
     if(this.contactForm.valid) {
      this.http.post(this.apiUrl,{
        email: this.contactForm.value.email,
        _subject: 'Query from '+this.contactForm.value.name,
        message: this.contactForm.value.message
      }).subscribe((response) => {
        console.log(response)
      });
     }
   }

   get form() { return this.contactForm.controls; }

   clear() {
     this.submitted = false;
   }

}
