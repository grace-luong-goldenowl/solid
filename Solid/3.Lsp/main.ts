import { PaymentProcessor } from './payments/PaymentProcessor';
import { CreditCardPayment } from './payments/CreditCardPayment';
import { PayPalPayment } from './payments/PayPalPayment';
import { CashPayment } from './payments/CashPayment';

function handlePayment(
  paymentProcessor: PaymentProcessor,
  amount: number,
): void {
  paymentProcessor.processPayment(amount);
}

const creditCardPayment = new CreditCardPayment();
handlePayment(creditCardPayment, 100);

const payPalPayment = new PayPalPayment();
handlePayment(payPalPayment, 200);

const cashPayment = new CashPayment();
handlePayment(cashPayment, 50);
