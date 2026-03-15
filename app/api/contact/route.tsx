import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { name, phone, email, message } = body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'Khách hàng mới từ website Fenica',
            html: `
                    <div style="font-family: Arial, sans-serif; background:#f8fafc; padding:40px;">
                    <div style="max-width:600px; margin:auto; background:white; border-radius:20px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.08);">

                        <div style="background:linear-gradient(135deg,#c98266,#00a690); padding:30px; text-align:center;">
                        <h1 style="color:white; margin:0; font-size:28px;">
                            Khách hàng mới từ website Fenica
                        </h1>
                        <p style="color:white; opacity:0.9; margin-top:8px;">
                            Có một yêu cầu tư vấn mới vừa được gửi
                        </p>
                        </div>

                        <div style="padding:35px;">

                        <div style="margin-bottom:20px;">
                            <p style="font-size:14px; color:#94a3b8; margin-bottom:6px;">Họ và tên</p>
                            <p style="font-size:18px; font-weight:bold; color:#0f172a;">${name}</p>
                        </div>

                        <div style="margin-bottom:20px;">
                            <p style="font-size:14px; color:#94a3b8; margin-bottom:6px;">Số điện thoại</p>
                            <p style="font-size:18px; font-weight:bold; color:#0f172a;">${phone}</p>
                        </div>

                        <div style="margin-bottom:20px;">
                            <p style="font-size:14px; color:#94a3b8; margin-bottom:6px;">Email</p>
                            <p style="font-size:18px; font-weight:bold; color:#0f172a;">${email}</p>
                        </div>

                        <div style="margin-bottom:20px;">
                            <p style="font-size:14px; color:#94a3b8; margin-bottom:6px;">Lời nhắn</p>
                            <div style="background:#f8fafc; padding:20px; border-radius:14px; color:#334155; line-height:1.6;">
                            ${message}
                            </div>
                        </div>

                        <div style="margin-top:30px; text-align:center;">
                            <a href="tel:${phone}" style="display:inline-block; padding:14px 28px; background:#c98266; color:white; text-decoration:none; border-radius:12px; font-weight:bold;">
                            Gọi ngay cho khách hàng
                            </a>
                        </div>

                        </div>

                        <div style="padding:20px; text-align:center; font-size:13px; color:#94a3b8; background:#f8fafc;">
                        Email tự động từ website Fenica
                        </div>

                    </div>
                    </div>
                    `,
        });

        return NextResponse.json({
            success: true,
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            error,
        });
    }
}
