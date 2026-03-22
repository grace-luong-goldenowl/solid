import { EmailService, SmsService, SendNotification } from "../../Solid/5.Dip/services";

describe("SendNotification", () => {
  test("should send an email notification", () => {
    const emailService = new EmailService();
    const sendNotification = new SendNotification(emailService);
    const consoleSpy = jest.spyOn(console, "log");

    sendNotification.sendNotification("Test Email Message");

    expect(consoleSpy).toHaveBeenCalledWith(
      "Sending email with message: Test Email Message"
    );

    consoleSpy.mockRestore();
  });

  test("should send an SMS notification", () => {
    const smsService = new SmsService();
    const sendNotification = new SendNotification(smsService);
    const consoleSpy = jest.spyOn(console, "log");

    sendNotification.sendNotification("Test SMS Message");

    expect(consoleSpy).toHaveBeenCalledWith(
      "Sending SMS with message: Test SMS Message"
    );

    consoleSpy.mockRestore();
  });

  test("should call sendNotification on the provided service", () => {
    const mockService = { sendNotification: jest.fn() };
    const sendNotification = new SendNotification(mockService);

    sendNotification.sendNotification("Mocked Message");

    expect(mockService.sendNotification).toHaveBeenCalledWith("Mocked Message");
  });

  test("should send multiple notifications in a row", () => {
    const emailService = new EmailService();
    const sendNotification = new SendNotification(emailService);
    const consoleSpy = jest.spyOn(console, "log");

    sendNotification.sendNotification("First Message");
    sendNotification.sendNotification("Second Message");

    expect(consoleSpy).toHaveBeenCalledWith("Sending email with message: First Message");
    expect(consoleSpy).toHaveBeenCalledWith("Sending email with message: Second Message");

    consoleSpy.mockRestore();
  });
});
