/**
 * Google Apps Script for Koding Keliling Notification System.
 * This script serves as a simple email gateway for AI error reports and customer notifications.
 * Deploy as a Web App: "Project Settings" -> "Deploy" -> "New Deployment" -> "Web App".
 */

const API_KEY = "aX9pQwL7zRb5MnP4t2VkYj3Hs8NcBd6Uf0GqR1TwXeZsCv4";

/**
 * Handles incoming POST requests from the Next.js API.
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Authorization: Verify simple API Token
    if (data.token !== API_KEY) {
      return createJsonResponse({ status: "error", message: "Unauthorized" });
    }

    const recipient = data.email;
    const subject = data.subject || "No Subject (Koding Keliling)";
    
    if (!recipient) {
      throw new Error("Missing recipient address");
    }

    const name = data.name || "User";
    const message = data.message || "";
    const title = data.title || "Koding Keliling Notification";
    const actionLink = data.actionLink || data.registrationLink || null;

    let finalHtmlBody = data.htmlBody;

    // Use a clean HTML template if none is provided in the payload
    if (!finalHtmlBody) {
      finalHtmlBody = generateEmailTemplate(title, name, message, actionLink);
    }

    MailApp.sendEmail({
      to: recipient,
      subject: subject,
      body: message,
      htmlBody: finalHtmlBody
    });

    return createJsonResponse({
      status: "success",
      message: "Notification sent successfully to " + recipient
    });

  } catch (error) {
    return createJsonResponse({
      status: "error",
      message: error.toString()
    });
  }
}

/**
 * Generates a clean, branded HTML email template.
 */
function generateEmailTemplate(title, name, message, actionLink) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .container { font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #101828; }
        .header { background-color: #075E54; color: #ffffff; padding: 24px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { padding: 32px; border: 1px solid #eaecf0; border-top: none; border-radius: 0 0 8px 8px; }
        .message-box { background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 24px 0; border-left: 4px solid #075E54; line-height: 1.5; white-space: pre-wrap; }
        .footer { text-align: center; margin-top: 32px; font-size: 12px; color: #667085; }
        .btn { display: inline-block; background-color: #075E54; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-top: 16px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0; font-size: 20px;">${title}</h1>
        </div>
        <div class="content">
          <h2 style="font-size: 18px; margin-top: 0;">Halo, ${name}!</h2>
          <div class="message-box">
            ${message}
          </div>
          ${actionLink ? `<div style="text-align: center;"><a href="${actionLink}" class="btn">Lihat Detail</a></div>` : ""}
          <p style="margin-top: 32px; font-style: italic; color: #667085; font-size: 14px;">
            Sistem otomatis Koding Keliling.
          </p>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} Koding Keliling. All rights reserved.
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Helper to create JSON response for Google Apps Script.
 */
function createJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Test function to verify script behavior locally in GAS editor.
 */
function testDeployment() {
  const adminEmail = Session.getActiveUser().getEmail();
  console.log("Sending test email to: " + adminEmail);
  
  const dummyPayload = {
    token: API_KEY,
    email: adminEmail,
    subject: "Test - Koding Keliling Notification",
    name: "Developer",
    message: "Ini adalah pesan percobaan dari sistem notifikasi Koding Keliling.",
    title: "Test Notification"
  };
  
  const response = doPost({ postData: { contents: JSON.stringify(dummyPayload) } });
  console.log(response.getContent());
}
