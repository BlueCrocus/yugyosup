import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: '유교숲 | 유치원 교사 전용 익명 자료 공유 숲',
  description:
    '유교숲(yugyosup)은 재직 인증을 거친 유치원 교사만 이용할 수 있는 100% 익명 자료 공유 커뮤니티입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-neutral-50 text-neutral-900">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
