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

  onSubmit() {
    if (this.suggestionForm.valid) {
      console.log(this.suggestionForm.value);
      alert('Suggestion submitted! Thank you 🎮');
      this.suggestionForm.reset();
    } else {
      alert('Please fill in all required fields.');
    }
  }
}

