/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const twilio = require("twilio");
const dotenv = require("dotenv");

dotenv.config();

admin.initializeApp();

const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const notificationPhoneNumber = process.env.NOTIFICATION_PHONE_NUMBER;

// Initialize Twilio Client
const twilioClient = twilio(twilioAccountSid, twilioAuthToken);

exports.sendWaitlistNotification = functions.https.onCall(
  async (data, context) => {
    try {
      const email = data.email;

      if (!email) {
        throw new Error("No email provided");
      }
    } catch (error) {
      console.log("Error when trying to send SMS message");
    }
  }
);

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
