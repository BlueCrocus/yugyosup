import Link from 'next/link';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function LoginPage() {
  return (
    <div className="mx-auto mt-10 max-w-md">
      <Card>
        <h1 className="text-xl font-bold">로그인</h1>
        <p className="mt-1 text-sm text-neutral-600">유교숲은 재직 인증 후 이용할 수 있어요.</p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium">이메일</label>
            <div className="mt-2">
              <Input type="email" placeholder="you@example.com" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">비밀번호</label>
            <div className="mt-2">
              <Input type="password" placeholder="••••••••" />
            </div>
          </div>

          <Button className="w-full">로그인</Button>

          <p className="text-center text-sm text-neutral-600">
            계정이 없나요?{' '}
            <Link href="/signup" className="font-medium text-emerald-700 hover:underline">
              회원가입
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
