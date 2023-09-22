// import { NextResponse, NextRequest } from 'next/server'
// export default function (req, res) {
//   require('dotenv').config()

//   let nodemailer = require('nodemailer')
//   const transporter = nodemailer.createTransport({
//     port: 465,
//     host: "smtp.gmail.com",
//     auth: {
//       user: 'abdo.errafaiy@gmail.com',
//       pass: process.env.password,
//     },
//     secure: true,
//   })
//   const mailData = {
//     from: 'abdo.errafaiy@gmail.com',
//     to: 'abdo.errafaiy@gmail.com',
//     subject: `Mi7fadti`,
//     text: " Commande de : " + req.body.first_name,
//     html: `<div>Nom & Prenom : ${req.body.first_name} ${req.body.last_name} <br/> Tel :${req.body.phone} <br/> Email : ${req.body.email} <br/> Adress : ${req.body.adress} <br/> Liste : ${req.body.list}`
//   }
//   transporter.sendMail(mailData);

// }
import { NextResponse, NextRequest } from "next/server";
import { google } from "googleapis";

export default async function handler(req, res) {
  
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:F1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[req.body.first_name, req.body.last_name, req.body.phone, req.body.email, req.body.adress, req.body.list]],
      },
    });

    return res.status(201).json({
      rep: 'ok'
    });
  } catch (e) {
    return res.status(e.code).send({ message: e.message });
  }
}
