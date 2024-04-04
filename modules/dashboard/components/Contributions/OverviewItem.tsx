import AnimateCounter from '@/common/components/elements/AnimateCounter';
import Card from '@/common/components/elements/Card';

interface OverviewItemProps {
  label: string;
  value: number;
  unit?: string;
}

export default function OverviewItem({ label, value, unit = '' }: OverviewItemProps) {
  return (
    <Card className="flex flex-col self-center rounded-xl bg-neutral-200 py-3 px-4 dark:bg-[#4949492e]  border border-neutral-200 dark:border-neutral-800">
      <span className="text-sm dark:text-neutral-300">{label}</span>
      <div>
        <AnimateCounter className="text-xl lg:text-2xl font-medium dark:text-green-500 text-green-700" total={value} />
        {unit && <span className="text-sm dark:text-neutral-400"> {unit}</span>}
      </div>
    </Card>
  );
}
