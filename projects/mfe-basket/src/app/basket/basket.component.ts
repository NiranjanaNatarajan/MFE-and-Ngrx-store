import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BasketService } from '@shared';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styles: [
  ]
})
export class BasketComponent implements OnInit {

  @Output() emitData = new EventEmitter();
  maxDate = new Date().toJSON().split('T')[0];
  minDate = new Date('2000-12-30').toJSON().split('T')[0];
  data = {};
  submitted = false;
  addForm: FormGroup;

  constructor(public basketService: BasketService, private fb: FormBuilder, private router: Router) {
    this.addForm = this.fb.group({
      id: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(2)]],
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4)]],
      designation: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4)]],
      manager: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4)]],
      project: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4)]],
      empId: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(4)]],
    });
  }
  get f() { return this.addForm.controls; }

  addEmp(): void {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    if (this.basketService.selectedData) {
      this.basketService.updateEmployee(this.addForm.getRawValue());
    } else {
      this.basketService.createEmployee(this.addForm.getRawValue());
    }
    // this.emitData.emit(this.submitted);
    alert((this.basketService.selectedData ? 'Updated ' : 'Added ') + 'Successfully');
    this.router.navigateByUrl('/');
  }
  ngOnInit(): void {
    if (this.basketService.selectedData) {
      this.addForm.setValue(this.basketService.selectedData);
    }
  }
  ngOnDestroy() {
    this.basketService.selectedData = undefined;
  }
}
