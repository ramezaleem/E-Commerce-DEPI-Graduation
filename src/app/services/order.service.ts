import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface OrderItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  total: number;
  status: 'Processing' | 'Delivered' | 'Cancelled' | 'Returned';
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders = new BehaviorSubject<Order[]>(this.loadOrders());
  orders$ = this.orders.asObservable();

  constructor() {}

  private loadOrders(): Order[] {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem('userOrders');
      if (stored) return JSON.parse(stored);
      
      // Initial placeholder data
      return [
        {
          id: '12345',
          date: '2026-04-15',
          total: 150,
          status: 'Delivered',
          items: [
            { id: 1, name: 'Havit HV-G92 Gamepad', price: 120, image: 'assets/images/products/g92.png', quantity: 1 },
            { id: 2, name: 'AK-900 Wired Keyboard', price: 30, image: 'assets/images/products/ak900.png', quantity: 1 }
          ]
        },
        {
          id: '12346',
          date: '2026-05-01',
          total: 85,
          status: 'Processing',
          items: [
            { id: 3, name: 'IPS LCD Gaming Monitor', price: 85, image: 'assets/images/products/monitor.png', quantity: 1 }
          ]
        }
      ];
    }
    return [];
  }

  private saveOrders(orders: Order[]) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('userOrders', JSON.stringify(orders));
      this.orders.next(orders);
    }
  }

  getOrders() {
    return this.orders.value;
  }

  cancelOrder(id: string) {
    const orders = this.getOrders().map(order => 
      order.id === id ? { ...order, status: 'Cancelled' as const } : order
    );
    this.saveOrders(orders);
  }

  returnOrder(id: string) {
    const orders = this.getOrders().map(order => 
      order.id === id ? { ...order, status: 'Returned' as const } : order
    );
    this.saveOrders(orders);
  }

  placeOrder(items: any[], total: number): Order {
    const newOrder: Order = {
      id: Math.random().toString(36).substr(2, 9).toUpperCase(),
      date: new Date().toISOString().split('T')[0],
      items: items.map(i => ({
        id: i.item.id,
        name: i.item.name,
        price: i.item.price,
        image: i.item.image,
        quantity: i.quantity
      })),
      total: total,
      status: 'Processing'
    };
    
    const orders = [newOrder, ...this.getOrders()];
    this.saveOrders(orders);
    return newOrder;
  }
}
