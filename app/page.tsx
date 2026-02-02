export default function Home() {
  return (
    <section className="flex flex-col items-center gap-6 py-20 text-center">
      <h1 className="text-3xl font-bold md:text-4xl">유교숲 🌿</h1>
      <p className="text-neutral-600">유치원 교사 전용 익명 자료 공유 숲</p>

      <div className="flex gap-3">
        <a
          href="/signup"
          className="rounded-md bg-emerald-600 px-5 py-2 text-white hover:bg-emerald-700"
        >
          회원가입
        </a>
        <a href="/login" className="rounded-md border px-5 py-2 hover:bg-neutral-100">
          로그인
        </a>
      </div>
    </section>
  );
}
