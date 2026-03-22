import { CreditCardPayment, PayPalPayment, CashPayment } from '../../Solid/3.Lsp/payments';

describe('PaymentProcessor', () => {
  test('should process credit card payment correctly', () => {
    const creditCardPayment = new CreditCardPayment();
    const consoleSpy = jest.spyOn(console, 'log');

    creditCardPayment.processPayment(100);

    expect(consoleSpy).toHaveBeenCalledWith(
      'Processing credit card payment of $100'
    );
    expect(consoleSpy).toHaveBeenCalledWith('Validating credit card details...');
    expect(consoleSpy).toHaveBeenCalledWith('Charging the credit card...');

    consoleSpy.mockRestore();
  });

  test('should process PayPal payment correctly', () => {
    const payPalPayment = new PayPalPayment();
    const consoleSpy = jest.spyOn(console, 'log');

    payPalPayment.processPayment(200);

    expect(consoleSpy).toHaveBeenCalledWith(
      'Processing PayPal payment of $200'
    );
    expect(consoleSpy).toHaveBeenCalledWith('Redirecting to PayPal...');
    expect(consoleSpy).toHaveBeenCalledWith('Completing PayPal transaction...');

    consoleSpy.mockRestore();
  });

  test('should process cash payment correctly', () => {
    const cashPayment = new CashPayment();
    const consoleSpy = jest.spyOn(console, 'log');

    cashPayment.processPayment(50);

    expect(consoleSpy).toHaveBeenCalledWith('Processing cash payment of $50');
    expect(consoleSpy).toHaveBeenCalledWith('Received from customer');

    consoleSpy.mockRestore();
  });
});
