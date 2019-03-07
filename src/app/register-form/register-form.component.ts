import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'bm-register-form',
  templateUrl: './register-form.component.html',
  styles: []
})

export class RegisterFormComponent {
  register(value: any) {
    console.log(value);
  }
  constructor() { }

  ngOnInit() {
  }

}
