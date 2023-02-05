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
  data = {};
  submitted = false;
  addForm: FormGroup;

  constructor(public basketService: BasketService, private fb: FormBuilder, private router: Router) {
    this.addForm = this.fb.group({
      id: [null, [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(2)]],
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
      this.basketService.updateUser(this.addForm.getRawValue()).subscribe(data1 => {
      });
    } else {
      this.basketService.addUser(this.addForm.getRawValue()).subscribe(data1 => {
      });
      ;
    }
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
