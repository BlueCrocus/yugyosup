import Card from '@/components/ui/Card';

export default function VerifyPendingPage() {
  return (
    <div className="mx-auto mt-20 max-w-md text-center">
      <Card>
        <h1 className="text-xl font-bold">인증 대기 중 ⏳</h1>
        <p className="mt-3 text-sm text-neutral-600">제출하신 서류를 관리자가 확인하고 있어요.</p>
        <p className="mt-1 text-sm text-neutral-600">
          승인되면 자동으로 유교숲을 이용할 수 있어요.
        </p>
      </Card>
    </div>
  );
}
