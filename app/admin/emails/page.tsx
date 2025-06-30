'use client';
import { useEffect, useState } from 'react';

export default function EmailsPage() {
  const [emails, setEmails] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    // استدعاء بيانات البريد الإلكتروني من API
    fetch('/api/emails')
      .then((res) => res.json())
      .then((data) => {
        setEmails(data);
        setFiltered(data);
      });
  }, []);

  const exportCSV = () => {
    const csv = filtered
      .map(
        (e, i) =>
          `${i + 1},${e.email},${new Date(e.createdAt).toLocaleString()}`
      )
      .join('\n');
    const header = `#,Email,Date\n`;
    const blob = new Blob([header + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'emails.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h1>Emails</h1>
      <button onClick={exportCSV}>Export to CSV</button>
    </div>
  );
}
