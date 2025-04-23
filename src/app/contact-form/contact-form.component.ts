// suggestion-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  suggestionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.suggestionForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      category: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
      attachment: [null] // file placeholder
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.suggestionForm.patchValue({ attachment: file });
    }
  }

  // onSubmit() {
  //   return true;
  // }

  sendEmail() {
    if (this.suggestionForm.valid) {
      console.log(this.suggestionForm.value);
      const subject = encodeURIComponent(`Message from ${this.suggestionForm.value.name}`);
      const body = encodeURIComponent(
        `Name: ${this.suggestionForm.value.name}\nEmail: ${this.suggestionForm.value.email}\nMessage: ${this.suggestionForm.value.message}`
      );
      const mailtoLink = `mailto:krishnavalluri25@gmail.com.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      // alert('Suggestion submitted! Thank you 🎮');
      this.suggestionForm.reset();
    } else {
      alert('Please fill in all required fields.');
    }
  }

  sendWhatsApp() {
    if (this.suggestionForm.valid) {
      console.log(this.suggestionForm.value);
      const phoneNumber = '8500793033'; // Replace with the target phone number
      const encodedMessage = encodeURIComponent(
        `Name: ${this.suggestionForm.value.name}\nMessage: ${this.suggestionForm.value.message}`
      );
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      // alert('Suggestion submitted! Thank you 🎮');
      this.suggestionForm.reset();
    } else {
      alert('Please fill in all required fields.');
    }
  }
}

