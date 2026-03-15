'use client';

import { useEffect, useState } from 'react';

const currencies = [
  'USD',
  'VND',
  'EUR',
  'JPY',
  'GBP',
  'AUD',
  'CAD',
  'CHF',
  'CNY',
  'SGD',
  'KRW',
  'THB',
  'HKD',
  'INR',
  'MYR',
];

export default function CurrencyConverter() {
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('VND');
  const [amount, setAmount] = useState(1);
  const [rate, setRate] = useState(0);

  useEffect(() => {
    fetch(`https://api.exchangerate.host/convert?access_key=1a4107447c309bd0c815615056796333&from=${from}&to=${to}&amount=${amount}`)
      .then((res) => res.json())
      .then((data) => {        
        setRate(data.result);
      });
  }, [from, to]);

  const swapCurrencies = () => {
    setFrom(to);
    setTo(from);
  };

  const converted = amount * rate;

  return (
    <div className="min-h-screen bg-slate-100 py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 border">

        <h1 className="text-4xl font-bold mb-3">
          Chuyển đổi tiền tệ
        </h1>

        <p className="text-slate-500 text-lg mb-10">
          Quy đổi ngoại tệ nhanh chóng và chính xác
        </p>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-end">

          {/* FROM */}
          <div>
            <label className="block mb-3 font-semibold">Từ</label>

            <div className="flex border rounded-2xl overflow-hidden">
              <select
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="px-4 py-4 bg-slate-50 font-bold outline-none"
              >
                {currencies.map((currency) => (
                  <option key={currency}>{currency}</option>
                ))}
              </select>

              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full px-4 text-xl outline-none"
              />
            </div>
          </div>

          {/* SWAP */}
          <button
            onClick={swapCurrencies}
            className="h-14 w-14 rounded-full bg-blue-900 text-white text-2xl shadow-lg hover:scale-110 transition"
          >
            ⇄
          </button>

          {/* TO */}
          <div>
            <label className="block mb-3 font-semibold">Sang</label>

            <div className="flex border rounded-2xl overflow-hidden">
              <select
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="px-4 py-4 bg-slate-50 font-bold outline-none"
              >
                {currencies.map((currency) => (
                  <option key={currency}>{currency}</option>
                ))}
              </select>

              <div className="w-full px-4 py-4 text-xl font-semibold">
                {converted.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </div>
            </div>
          </div>
        </div>

        {/* RATE */}
        <div className="mt-10 text-xl text-slate-700">
          Tỷ giá:
          <span className="font-bold ml-2">
            1 {from} = {rate.toLocaleString()} {to}
          </span>
        </div>

        {/* INFO */}
        <div className="mt-6 text-slate-500">
          Dữ liệu tỷ giá cập nhật theo thời gian thực 🌍
        </div>
      </div>
    </div>
  );
}
