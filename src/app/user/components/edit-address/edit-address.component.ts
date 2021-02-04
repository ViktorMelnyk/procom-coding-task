import {Component, EventEmitter, forwardRef, OnDestroy, Output} from '@angular/core';
import {ControlValueAccessor, FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {Address} from '../../models/User.model';

export const EDIT_ADDRESS_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EditAddressComponent),
  multi: true
};

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss'],
  providers: [EDIT_ADDRESS_ACCESSOR]
})
export class EditAddressComponent implements ControlValueAccessor, OnDestroy {

  @Output() statusChanged = new EventEmitter<boolean>();
  form = this.fb.group({
    addresses: this.fb.array([])
  });

  onChange;
  onTouched;

  valueChangeSubscription = this.form.valueChanges
    .subscribe(value => {
      if (this.onChange) {
        this.onChange(value.addresses);
      }
    });

  statusChangeSubscription = this.form.statusChanges
    .subscribe(status => this.statusChanged.emit(status === 'VALID'));

  constructor(private fb: FormBuilder) {
  }

  ngOnDestroy(): void {
    this.valueChangeSubscription.unsubscribe();
    this.statusChangeSubscription.unsubscribe();
  }

  addAddress(): void {
    this.addressesFC.push(this.getEmptyControl());
  }

  removeLastAddress(): void {
    this.addressesFC.removeAt(this.addressesFC.controls.length - 1);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(address: Address[]): void {
    this.addressesFC.push(this.getEmptyControl());

  }

  getEmptyControl(): FormGroup {
    return this.fb.group(
      {
        streetName: ['', Validators.required],
        postalCode: ['', Validators.required],
        apartmentNumber: [null],
        state: ['', Validators.required],
        country: ['', Validators.required]
      }
    );
  }

  get addressesFC(): FormArray {
    return this.form.get('addresses') as FormArray;
  }

  markAsTouched(): void {
    this.form.markAllAsTouched();
  }
}
