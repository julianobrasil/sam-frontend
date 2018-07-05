import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';

import {Observable, ReplaySubject, Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';
import {Task} from '../../../../model/entity';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskFormComponent implements AfterViewInit, OnDestroy {
  /** emits when user submit the form */
  @Output() taskToBeSaved: EventEmitter<Task> = new EventEmitter<Task>();

  private _inputTask: Task;
  @Input()
  get inputTask(): Task {
    return this._inputTask;
  }
  set inputTask(t: Task) {
    this._inputTask = t;

    this._inputTask$.next(t);
  }
  /** emits when a task is received. this gives time so the form is ready to receive it */
  _inputTask$: ReplaySubject<Task> = new ReplaySubject<Task>(1);

  /** form group directive so we can reset the form validation */
  @ViewChild(FormGroupDirective) _formGroupDirective: FormGroupDirective;

  /** form control */
  _form: FormGroup;

  /** controls whether the component is presented in a small device */
  _isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.Tablet])
    .pipe(map((result: BreakpointState) => result.matches));

  private _destroy$: Subject<void> = new Subject<void>();

  constructor(private breakpointObserver: BreakpointObserver, private _fb: FormBuilder) {
    this._form = this._fb.group({
      description: ['', Validators.required],
      suggestedDeadline: null,
    });
  }

  ngAfterViewInit() {
    this._inputTask$.pipe(takeUntil(this._destroy$)).subscribe((t: Task) => {
      if (t) {
        this._form.patchValue(t);
      } else {
        this._formGroupDirective.resetForm();
      }
    });
  }

  ngOnDestroy() {
    if (this._destroy$ && !this._destroy$.closed) {
      this._destroy$.next();
      this._destroy$.complete();
    }

    if (this._inputTask$ && !this._inputTask$.closed) {
      this._inputTask$.complete();
    }
  }

  /**
   * prepare and emits the task being altered/created
   *
   * @returns
   * @memberof TaskFormComponent
   */
  _submitForm() {
    if (!this.inputTask) {
      this.inputTask = new Task();
    }

    this.inputTask = {
      ...this.inputTask,
      ...this._form.value,
    };

    this.taskToBeSaved.emit(this.inputTask);
  }
}
