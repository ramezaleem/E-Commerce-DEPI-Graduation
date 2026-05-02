import { Component, OnInit } from '@angular/core';
import { ProfileService, UserProfile } from '../../services/profile.service';
import { OrderService, Order } from '../../services/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit {
  activeTab: string = 'profile';
  
  userProfile: UserProfile = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    addresses: [],
    paymentOptions: []
  };

  successMessage: string = '';

  // Form properties
  newAddress = { id: 0, type: 'Home', address: '', phone: '' };
  newPayment = { id: 0, type: 'Visa', cardNumber: '', expiry: '' };
  showAddressForm = false;
  showPaymentForm = false;
  isAddressEdit = false;
  isPaymentEdit = false;

  // Order properties
  allOrders: Order[] = [];
  selectedOrder: Order | null = null;

  constructor(
    private profileService: ProfileService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.profileService.profile$.subscribe((profile: UserProfile) => {
      this.userProfile = { ...profile };
    });

    this.orderService.orders$.subscribe(orders => {
      this.allOrders = orders;
    });
  }

  setTab(tab: string) {
    this.activeTab = tab;
    this.showAddressForm = false;
    this.showPaymentForm = false;
    this.isAddressEdit = false;
    this.isPaymentEdit = false;
    this.selectedOrder = null;
  }

  saveChanges() {
    this.profileService.updateProfile(this.userProfile);
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Profile updated successfully!',
      timer: 2000,
      showConfirmButton: false
    });
  }

  cancel() {
    this.userProfile = { ...this.profileService.getProfile() };
    this.showAddressForm = false;
    this.showPaymentForm = false;
    this.isAddressEdit = false;
    this.isPaymentEdit = false;
    this.newAddress = { id: 0, type: 'Home', address: '', phone: '' };
    this.newPayment = { id: 0, type: 'Visa', cardNumber: '', expiry: '' };
    this.selectedOrder = null;
  }

  // Address methods
  openAddressForm(address?: any) {
    if (address) {
      this.newAddress = { ...address };
      this.isAddressEdit = true;
    } else {
      this.newAddress = { id: 0, type: 'Home', address: '', phone: '' };
      this.isAddressEdit = false;
    }
    this.showAddressForm = true;
  }

  saveAddress() {
    if (this.newAddress.address && this.newAddress.phone) {
      if (this.isAddressEdit) {
        this.profileService.updateAddress(this.newAddress as any);
      } else {
        const address = {
          ...this.newAddress,
          id: Date.now()
        };
        this.profileService.addAddress(address);
      }
      this.newAddress = { id: 0, type: 'Home', address: '', phone: '' };
      this.showAddressForm = false;
      this.isAddressEdit = false;
      Swal.fire({
        icon: 'success',
        title: 'Saved',
        text: 'Address saved successfully',
        timer: 1500,
        showConfirmButton: false
      });
    }
  }

  deleteAddress(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DB4444',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.profileService.removeAddress(id);
        Swal.fire('Deleted!', 'Address has been deleted.', 'success');
      }
    });
  }

  // Payment methods
  openPaymentForm(payment?: any) {
    if (payment) {
      this.newPayment = { ...payment };
      this.isPaymentEdit = true;
    } else {
      this.newPayment = { id: 0, type: 'Visa', cardNumber: '', expiry: '' };
      this.isPaymentEdit = false;
    }
    this.showPaymentForm = true;
  }

  savePayment() {
    if (this.newPayment.cardNumber && this.newPayment.expiry) {
      if (this.isPaymentEdit) {
        this.profileService.updatePaymentOption(this.newPayment as any);
      } else {
        const payment = {
          ...this.newPayment,
          id: Date.now()
        };
        this.profileService.addPaymentOption(payment);
      }
      this.newPayment = { id: 0, type: 'Visa', cardNumber: '', expiry: '' };
      this.showPaymentForm = false;
      this.isPaymentEdit = false;
      Swal.fire({
        icon: 'success',
        title: 'Saved',
        text: 'Payment option saved successfully',
        timer: 1500,
        showConfirmButton: false
      });
    }
  }

  deletePayment(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DB4444',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.profileService.removePaymentOption(id);
        Swal.fire('Deleted!', 'Payment method has been deleted.', 'success');
      }
    });
  }

  // Order methods
  get ordersList() {
    return this.allOrders;
  }

  get returnsList() {
    return this.allOrders.filter(o => o.status === 'Returned');
  }

  get cancellationsList() {
    return this.allOrders.filter(o => o.status === 'Cancelled');
  }

  viewOrderDetails(order: Order) {
    this.selectedOrder = order;
  }

  cancelMyOrder(id: string) {
    Swal.fire({
      title: 'Cancel Order?',
      text: "Do you really want to cancel this order?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#DB4444',
      confirmButtonText: 'Yes, cancel it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.orderService.cancelOrder(id);
        Swal.fire('Cancelled', 'Your order has been cancelled.', 'success');
      }
    });
  }

  returnMyOrder(id: string) {
    Swal.fire({
      title: 'Return Order?',
      text: "Apply for returning items in this order?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#DB4444',
      confirmButtonText: 'Apply Return'
    }).then((result) => {
      if (result.isConfirmed) {
        this.orderService.returnOrder(id);
        Swal.fire('Submitted', 'Return request has been submitted.', 'success');
      }
    });
  }
}
