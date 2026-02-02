import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-emerald-700">
          유교숲
        </Link>

        {/* Right actions */}
        <nav className="flex items-center gap-3 text-sm">
          <Link
            href="/login"
            className="rounded-md px-3 py-1.5 text-neutral-600 hover:bg-neutral-100"
          >
            로그인
          </Link>
          <Link
            href="/signup"
            className="rounded-md bg-emerald-600 px-3 py-1.5 text-white hover:bg-emerald-700"
          >
            회원가입
          </Link>
        </nav>
      </div>
    </header>
  );
}
