// src/app/layout.js
import './globals.css';

export const metadata = {
  title: 'Shahidur Rahman Dip Portfolio',
  description: 'Portfolio of Shahidur Rahman Dip: Educator & Programmer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
