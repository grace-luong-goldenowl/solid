/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

class PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing payment of $${amount}`);
  }
}

class OnlinePayment extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log("Connecting to payment service...");
  }
}

class CreditCardPayment extends OnlinePayment {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of $${amount}`);
    console.log("Validating credit card details...");
    console.log("Charging the credit card...");
  }
}

class PayPalPayment extends OnlinePayment {
  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of $${amount}`);
    console.log("Redirecting to PayPal...");
    console.log("Completing PayPal transaction...");
  }
}
class CashPayment extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing cash payment of $${amount}`);
    console.log("Received from customer");
  }
}

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
