import Link from 'next/link';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function SignupPage() {
  return (
    <div className="mx-auto mt-10 max-w-md">
      <Card>
        <h1 className="text-xl font-bold">회원가입</h1>
        <p className="mt-1 text-sm text-neutral-600">
          가입 후 재직 인증을 완료하면 100% 익명으로 이용할 수 있어요.
        </p>

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
              <Input type="password" placeholder="8자 이상" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">비밀번호 확인</label>
            <div className="mt-2">
              <Input type="password" placeholder="한 번 더 입력" />
            </div>
          </div>

          <label className="flex cursor-pointer items-start gap-2 text-sm text-neutral-700">
            <input type="checkbox" className="mt-1" />
            <span>
              <span className="font-medium">개인정보 처리방침</span> 및{' '}
              <span className="font-medium">이용약관</span>에 동의합니다.
            </span>
          </label>

          <Button className="w-full">회원가입</Button>

          <p className="text-center text-sm text-neutral-600">
            이미 계정이 있나요?{' '}
            <Link href="/login" className="font-medium text-emerald-700 hover:underline">
              로그인
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
