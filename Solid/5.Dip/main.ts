/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

interface INotificationService {
  sendNotification(message: string): void;
}
class EmailService implements INotificationService {
  sendEmail(message: string): void {
    console.log(`Sending email with message: ${message}`);
  }
  sendNotification(message: string): void {
    this.sendEmail(message);
  }
}

class SmsService implements INotificationService {
  sendSms(message: string): void {
    console.log(`Sending SMS with message: ${message}`);
  }
  sendNotification(message: string): void {
    this.sendSms(message);
  }
}

class SendNotification {
  private notificationService: INotificationService;

  constructor(notificationService: INotificationService) {
    this.notificationService = notificationService;
  }

  sendNotification(message: string): void {
    this.notificationService.sendNotification(message);
  }
}

const notification = new SendNotification(new EmailService());
notification.sendNotification("Hello, this is an email notification!");

const smsNotification = new SendNotification(new SmsService());
smsNotification.sendNotification("Hello, this is a sms notification!");
