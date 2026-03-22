import { PaymentProcessor } from './PaymentProcessor';

export class CashPayment extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing cash payment of $${amount}`);
    console.log('Received from customer');
  }
}