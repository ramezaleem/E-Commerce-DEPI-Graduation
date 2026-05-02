import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Address {
  id: number;
  type: string;
  address: string;
  phone: string;
}

export interface PaymentOption {
  id: number;
  type: string;
  cardNumber: string;
  expiry: string;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
  addresses?: Address[];
  paymentOptions?: PaymentOption[];
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private defaultProfile: UserProfile = {
    firstName: 'Md',
    lastName: 'Rimel',
    email: 'rimel1111@gmail.com',
    address: '123, Dhaka, Bangladesh',
    addresses: [
      { id: 1, type: 'Home', address: '123, Dhaka, Bangladesh', phone: '+880123456789' },
      { id: 2, type: 'Office', address: '456, Gulshan, Dhaka', phone: '+880987654321' }
    ],
    paymentOptions: [
      { id: 1, type: 'Visa', cardNumber: '**** **** **** 1234', expiry: '12/25' },
      { id: 2, type: 'MasterCard', cardNumber: '**** **** **** 5678', expiry: '10/24' }
    ]
  };

  private profile = new BehaviorSubject<UserProfile>(this.loadProfile());
  profile$ = this.profile.asObservable();

  constructor() {}

  private loadProfile(): UserProfile {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem('userProfile');
      return stored ? JSON.parse(stored) : this.defaultProfile;
    }
    return this.defaultProfile;
  }

  updateProfile(newProfile: UserProfile) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('userProfile', JSON.stringify(newProfile));
      this.profile.next(newProfile);
    }
  }

  getProfile(): UserProfile {
    return this.profile.value;
  }

  addAddress(address: Address) {
    const profile = this.getProfile();
    profile.addresses = profile.addresses || [];
    profile.addresses.push(address);
    this.updateProfile(profile);
  }

  removeAddress(id: number) {
    const profile = this.getProfile();
    if (profile.addresses) {
      profile.addresses = profile.addresses.filter(a => a.id !== id);
      this.updateProfile(profile);
    }
  }

  updateAddress(updatedAddress: Address) {
    const profile = this.getProfile();
    if (profile.addresses) {
      const index = profile.addresses.findIndex(a => a.id === updatedAddress.id);
      if (index !== -1) {
        profile.addresses[index] = updatedAddress;
        this.updateProfile(profile);
      }
    }
  }

  addPaymentOption(payment: PaymentOption) {
    const profile = this.getProfile();
    profile.paymentOptions = profile.paymentOptions || [];
    profile.paymentOptions.push(payment);
    this.updateProfile(profile);
  }

  removePaymentOption(id: number) {
    const profile = this.getProfile();
    if (profile.paymentOptions) {
      profile.paymentOptions = profile.paymentOptions.filter(p => p.id !== id);
      this.updateProfile(profile);
    }
  }

  updatePaymentOption(updatedPayment: PaymentOption) {
    const profile = this.getProfile();
    if (profile.paymentOptions) {
      const index = profile.paymentOptions.findIndex(p => p.id === updatedPayment.id);
      if (index !== -1) {
        profile.paymentOptions[index] = updatedPayment;
        this.updateProfile(profile);
      }
    }
  }
}
