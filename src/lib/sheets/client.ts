import { google, type sheets_v4 } from "googleapis";

let sheetClientInstance: sheets_v4.Sheets | null = null;
let envWarningLogged = false;

export function getSheetClient(): sheets_v4.Sheets | null {
  if (sheetClientInstance) return sheetClientInstance;

  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!email || !key) {
    if (!envWarningLogged) {
      console.error(
        "[sheets/client] Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY. " +
          "/preview/[slug] requests will return 404. Set in Vercel Project Settings.",
      );
      envWarningLogged = true;
    }
    return null;
  }

  const auth = new google.auth.GoogleAuth({
    credentials: { client_email: email, private_key: key },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  sheetClientInstance = google.sheets({ version: "v4", auth });
  return sheetClientInstance;
}
