'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

const schema = z.object({
    name: z.string().min(2, 'Vui lòng nhập họ tên'),
    phone: z
        .string()
        .regex(/^0\d{9,10}$/, 'Số điện thoại không hợp lệ'),
    email: z
        .string()
        .email('Email không hợp lệ')
        .optional()
        .or(z.literal('')),
    message: z.string().min(5, 'Vui lòng nhập lời nhắn'),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        setLoading(true);

        const res = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(data),
        });

        const result = await res.json();

        setLoading(false);

        if (result.success) {
            toast.success('Yêu cầu đã được gửi thành công 🎉', {
                description: 'Chúng tôi sẽ liên hệ với bạn sớm nhất.',
            });

            reset();
        } else {
            toast.error('Gửi thất bại', {
                description: 'Vui lòng thử lại sau.',
            });
        }
    };

    const inputStyle =
        'w-full bg-slate-50 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#c98266e6]';

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
            {/* NAME */}
            <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">
                    Họ và tên
                </label>
                <input
                    {...register('name')}
                    placeholder="Nguyễn Văn A"
                    className={inputStyle}
                />
                {errors.name && (
                    <p className="text-red-500 text-sm pl-2">
                        {errors.name.message}
                    </p>
                )}
            </div>

            {/* PHONE */}
            <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">
                    Số điện thoại *
                </label>
                <input
                    {...register('phone')}
                    placeholder="090..."
                    className={inputStyle}
                />
                {errors.phone && (
                    <p className="text-red-500 text-sm pl-2">
                        {errors.phone.message}
                    </p>
                )}
            </div>

            {/* EMAIL */}
            <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">
                    Email của bạn
                </label>
                <input
                    {...register('email')}
                    placeholder="example@gmail.com"
                    className={inputStyle}
                />
                {errors.email && (
                    <p className="text-red-500 text-sm pl-2">
                        {errors.email.message}
                    </p>
                )}
            </div>

            {/* MESSAGE */}
            <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">
                    Lời nhắn của bạn
                </label>
                <textarea
                    {...register('message')}
                    rows={4}
                    className={inputStyle}
                />
                {errors.message && (
                    <p className="text-red-500 text-sm pl-2">
                        {errors.message.message}
                    </p>
                )}
            </div>

            {/* BUTTON */}
            <button
                type="submit"
                disabled={loading}
                className="md:col-span-2 bg-[#c98266e6] text-white py-5 rounded-2xl font-bold hover:bg-[#00a690] transition-all shadow-xl"
            >
                {loading ? 'Đang gửi...' : 'Gửi yêu cầu ngay'}
            </button>
        </form>
    );
}
