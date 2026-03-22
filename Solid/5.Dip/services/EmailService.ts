import { INotificationService } from "./INotificationService";

export class EmailService implements INotificationService {
  sendEmail(message: string): void {
    console.log(`Sending email with message: ${message}`);
  }

  sendNotification(message: string): void {
    this.sendEmail(message);
  }
}