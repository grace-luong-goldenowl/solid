import { SendNotification } from "./services/SendNotification";
import { EmailService } from "./services/EmailService";
import { SmsService } from "./services/SmsService";

const notification = new SendNotification(new EmailService());
notification.sendNotification("Hello, this is an email notification!");

const smsNotification = new SendNotification(new SmsService());
smsNotification.sendNotification("Hello, this is a sms notification!");
