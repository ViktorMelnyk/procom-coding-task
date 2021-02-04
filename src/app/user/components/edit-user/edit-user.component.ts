import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserApiService} from '../../services/api/user-api.service';
import {Subject} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {User} from '../../models/User.model';
import {EditAddressComponent} from '../edit-address/edit-address.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, OnDestroy {

  @ViewChild(EditAddressComponent)
  private editAddressComponent: EditAddressComponent;
  loading: boolean;

  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: [''],
    addresses: [null],
  });
  addressValid: boolean;

  submitSink = new Subject<User>();

  saveUser$ = this.submitSink.pipe(
    switchMap(user => this.userApiService.create(user))
  );

  saveUserSubscription = this.saveUser$.subscribe(() => this.loading = false);

  constructor(private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private userApiService: UserApiService) {
  }

  ngOnInit(): void {
    this.form.valueChanges
      .subscribe(v => console.log(v));
  }

  ngOnDestroy(): void {
    this.saveUserSubscription.unsubscribe();
  }

  addressStatusChanged(valid: boolean): void {
    this.addressValid = valid;
  }

  submit(): void {
    this.form.markAllAsTouched();
    this.editAddressComponent.markAsTouched();
    if (this.form.valid && this.addressValid) {
      this.loading = true;
      this.submitSink.next(this.form.value);
    }
  }

}
