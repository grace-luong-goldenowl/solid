import { INotificationService } from "./INotificationService";

export class SmsService implements INotificationService {
  sendSms(message: string): void {
    console.log(`Sending SMS with message: ${message}`);
  }

  sendNotification(message: string): void {
    this.sendSms(message);
  }
}