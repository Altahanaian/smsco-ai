'use client';
import { useEffect, useState } from 'react';

// 1) عرّف واجهة تمثّل سجلّ البريد
interface EmailRecord {
  email: string;
  createdAt: string; // أو Date لو كنت تحولها قبل التخزين
}

export default function EmailsPage() {
  // 2) اعطِ الـ useState النوع EmailRecord[]
  const [emails, setEmails] = useState<EmailRecord[]>([]);
  const [filtered, setFiltered] = useState<EmailRecord[]>([]);

  useEffect(() => {
    fetch('/api/emails')
      .then((res) => res.json())
      // 3) أخبر TS أنّ data متوافقة مع EmailRecord[]
      .then((data: EmailRecord[]) => {
        setEmails(data);
        setFiltered(data);
      });
  }, []);

  const exportCSV = () => {
    const header = '#,Email,Date\n';
    const body = filtered
      .map(
        (e, i) =>
          `${i + 1},${e.email},${new Date(
            e.createdAt
          ).toLocaleString()}`
      )
      .join('\n');
    const blob = new Blob([header + body], {
      type: 'text/csv;charset=utf-8;',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'emails.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Emails</h1>
      <button
        onClick={exportCSV}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Export to CSV
      </button>
    </div>
  );
}
