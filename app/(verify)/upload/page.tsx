import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function VerifyUploadPage() {
  return (
    <div className="mx-auto mt-10 max-w-md">
      <Card>
        <h1 className="text-xl font-bold">재직 인증</h1>
        <p className="mt-1 text-sm text-neutral-600">
          유교숲은 실제 유치원 교사만 이용할 수 있어요.
        </p>

        <div className="mt-6 space-y-4 text-sm text-neutral-700">
          <ul className="list-disc space-y-1 pl-5">
            <li>근로계약서</li>
            <li>재직증명서</li>
            <li>급여명세서</li>
          </ul>

          <p className="text-amber-700">⚠️ 이름, 주민번호 등 민감 정보는 반드시 가려주세요.</p>

          <div className="rounded-md border border-dashed border-neutral-300 p-4 text-center">
            <p className="text-neutral-500">파일을 여기에 업로드하세요</p>
          </div>

          <label className="flex items-start gap-2 text-xs text-neutral-600">
            <input type="checkbox" className="mt-1" />
            <span>인증 목적 외 사용하지 않으며, 승인 후 파일은 즉시 삭제됩니다.</span>
          </label>

          <Button className="w-full">인증 요청</Button>
        </div>
      </Card>
    </div>
  );
}
