import { INotificationService } from "./INotificationService";

export class SendNotification {
  private notificationService: INotificationService;

  constructor(notificationService: INotificationService) {
    this.notificationService = notificationService;
  }

  sendNotification(message: string): void {
    this.notificationService.sendNotification(message);
  }
}