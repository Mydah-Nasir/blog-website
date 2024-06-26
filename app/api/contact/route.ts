import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";

export async function GET() {
  return NextResponse.json({ characters: "hello" });
}

export async function POST(req: Request) {
  const body = await req.json();

  console.log(body);
  const message = `
    <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f5f5f8;" leftmargin="0">
        <!--100% body table-->
        <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
            style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif; background-color: #f5f5f8">
            <tr>
                <td>
                    <table style="background-color: #f5f5f8; max-width:680px;  margin:0 auto; font-family:'Rubik',sans-serif; padding: 30px margin-bottom: 5px" width="100%" border="0"
                        align="center" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="height:40px;">&nbsp;</td>
                        </tr>

                        <tr>
                            <td style="text-align:center; padding: 0 40px;">
                              <a href="javascript:void(0)" title="logo" target="_blank">
                              </a>
                            </td>
                        </tr>
                        <tr>
                            <td style="height:20px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td>
                                <table width="600px" border="0" align="center" cellpadding="0" cellspacing="0"
                                    style="max-width:600px;background:#fff; border-radius:0px; text-align:left; padding: 20px">
                                    <tr>
                                        <td style="height:30px;">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: center; padding: 0 30px; margin: 0 0 10px 0; font-size: 18px">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="height:7px;">&nbsp;</td>
                                    </tr>
                                    <tr>
                                      <td style="padding:0 30px;">
                                        <p style="font-size:18px;line-height:24px; margin:10px 0 0 0; font-weight:bold; font-family:'Rubik',sans-serif; margin: 0 0 15px 14px; letter-spacing: -0.01em; color: black;">
                                          Dear ${body.name} !      
                                        </p>        
                                        <p style=" font-size:15px;line-height:24px; margin:0 0 0 0; line-height: 32px;">
                                          <p style= "line-height:24px; margin:0; padding: 15px; color: black;">
                                          Thank you for reaching out to our support team with your query</p>                                            
                                        </p>
                                        <p style="font-size:15px;line-height:24px; margin:10px 0 0 0; font-weight:bold; font-family:'Rubik',sans-serif; margin: 0 0 15px 14px; letter-spacing: -0.01em; color: black;">
                                          Message: ${body.message}     
                                        </p> 
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="padding:0 30px;">
                                        <p style= "line-height:24px; margin:0; padding: 15px;color: black; margin-top:0px; margin-bottom:0px;">
                                          Our support team will get back soon to you in respond to your query
                                        </p>
                                        <p style= "line-height:24px; margin:0; padding: 3px; margin-left: 10px; color: black;">Best regards,</p>
                                        <p style= "line-height:24px; margin:0; padding: 3px; margin-left: 10px;color: black;">Team Sunday RainDay</p>
                                      </td>
                                    </tr>
                                    
                                    <tr>
                                      <td style="text-align:center;">
                                      </td>
                                    </tr>

                                    <tr>
                                        <td style="height:24px;">&nbsp;</td>

                                    </tr>
                                    <tr>
                                      <td style="padding:0 30px;">
                                        <p line-height:24px; margin:0; padding: 15px; ">
                                        </p>
                                      </td>
                                    </tr>

                                    <tr>
                                      <td style="text-align:left; padding: 10px 30px; ">
                                        <hr style="width: 100%; height: 0.01rem; margin-bottom: 15px; background-color:#0000001a;"></hr>
                                          <p style="color:#999999; font-size:14px;line-height:24px; margin:0 0 15px 0;">Need help? Contact our support team at <a href="mailto:alina11nasir@gmail.com">alina11nasir@gmail.com</a
                                          >. .Want to give us feedback? Let us know what you think on our feedback site.</p>

                                          <p style="color:#999999; font-size:14px;line-height:24px; margin:0;">Copyright © 2024</p>

                                      </td>
                                    </tr>
                                    <tr>
                                        <td style="height:20px;">&nbsp;</td>
                                    </tr>
                                </table>
                            </td>
                        </table>
                    </td>
                </tr>
                <tr>
                  <td style="height:40px;">&nbsp;</td>
                </tr>
            </table>
        </body>
    `;
  try {
    await sendEmail(body.subject, message, body.send_to);
    return NextResponse.json({
      status: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    return NextResponse.json({
      status: false,
      message: "Cannot send mail",
    });
  }
}
async function sendEmail(subject: string, message: string, send_to: string) {
  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const options = {
    from: process.env.EMAIL_USER,
    to: send_to,
    subject: subject,
    html: message,
  };
  try {
    // @ts-ignore
    await transporter.sendMail(options);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
