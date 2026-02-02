export default function Footer() {
  return (
    <footer className="border-t bg-white text-sm text-neutral-500">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} yugyosup · 유교숲</p>
        <div className="flex gap-4">
          <span>개인정보 처리방침</span>
          <span>이용약관</span>
        </div>
      </div>
    </footer>
  );
}
