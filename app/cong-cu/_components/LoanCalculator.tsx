'use client';

import { useMemo, useState } from 'react';

type LoanMethod = 'declining' | 'fixed';

export default function LoanCalculator() {
  const [loan, setLoan] = useState(1000000000);
  const [interest, setInterest] = useState(8);
  const [months, setMonths] = useState(240);
  const [method, setMethod] = useState<LoanMethod>('declining');

  const result = useMemo(() => {
    const monthlyRate = interest / 100 / 12;

    if (method === 'fixed') {
      const monthlyPayment =
        (loan * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -months));

      const total = monthlyPayment * months;
      const totalInterest = total - loan;

      return {
        firstMonth: monthlyPayment,
        totalInterest,
        total,
      };
    }

    const principal = loan / months;
    const firstMonth = principal + loan * monthlyRate;
    const totalInterest =
      ((loan + principal) / 2) * monthlyRate * months;

    return {
      firstMonth,
      totalInterest,
      total: loan + totalInterest,
    };
  }, [loan, interest, months, method]);

  const formatMoney = (value: number) =>
    new Intl.NumberFormat('vi-VN').format(Math.round(value)) + ' VNĐ';

  return (
    <div className="w-full min-h-screen bg-slate-100 py-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* LEFT */}
        <div className="p-10 space-y-10">

          {/* Loan */}
          <div>
            <label className="text-lg font-semibold">Số tiền vay</label>
            <div className="text-3xl font-bold text-slate-800 my-3">
              {formatMoney(loan)}
            </div>
            <input
              type="range"
              min={1000000}
              max={5000000000}
              step={1000000}
              value={loan}
              onChange={(e) => setLoan(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
          </div>

          {/* Interest */}
          <div>
            <label className="text-lg font-semibold">Lãi suất (%)</label>
            <div className="text-3xl font-bold text-slate-800 my-3">
              {interest}%
            </div>
            <input
              type="range"
              min={1}
              max={20}
              step={0.1}
              value={interest}
              onChange={(e) => setInterest(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
          </div>

          {/* Months */}
          <div>
            <label className="text-lg font-semibold">Thời gian vay</label>
            <div className="text-3xl font-bold text-slate-800 my-3">
              {months} tháng
            </div>
            <input
              type="range"
              min={1}
              max={360}
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
          </div>

          {/* Method */}
          <div>
            <label className="text-lg font-semibold block mb-4">
              Phương pháp tính
            </label>

            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => setMethod('declining')}
                className={`px-5 py-3 rounded-2xl ${
                  method === 'declining'
                    ? 'bg-blue-900 text-white'
                    : 'bg-slate-100'
                }`}
              >
                Gốc cố định, lãi giảm dần
              </button>

              <button
                onClick={() => setMethod('fixed')}
                className={`px-5 py-3 rounded-2xl ${
                  method === 'fixed'
                    ? 'bg-blue-900 text-white'
                    : 'bg-slate-100'
                }`}
              >
                Gốc + lãi chia đều
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-slate-50 p-10 flex flex-col justify-center space-y-10 border-l">

          <div>
            <p className="text-slate-500 text-lg">Số tiền trả tháng đầu</p>
            <h2 className="text-4xl font-bold text-amber-600">
              {formatMoney(result.firstMonth)}
            </h2>
          </div>

          <div>
            <p className="text-slate-500 text-lg">Tổng lãi phải trả</p>
            <h2 className="text-4xl font-bold text-amber-600">
              {formatMoney(result.totalInterest)}
            </h2>
          </div>

          <div>
            <p className="text-slate-500 text-lg">Tổng gốc + lãi</p>
            <h2 className="text-4xl font-bold text-amber-600">
              {formatMoney(result.total)}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
