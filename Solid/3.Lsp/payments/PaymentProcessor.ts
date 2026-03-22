export abstract class PaymentProcessor {
  abstract processPayment(amount: number): void;
}