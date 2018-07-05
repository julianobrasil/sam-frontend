import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-employee-alocation-form',
  templateUrl: './employee-alocation-form.component.html',
  styleUrls: ['./employee-alocation-form.component.scss'],
})
export class EmployeeAlocationFormComponent implements OnInit {
  _form: FormGroup;

  _isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.Tablet])
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(private breakpointObserver: BreakpointObserver, private _fb: FormBuilder) {
    this._form = this._fb.group({
      colaborador: ['', Validators.required],
    });
  }

  ngOnInit() {}

  _submitForm(f: FormGroupDirective) {
    return;
  }
}
