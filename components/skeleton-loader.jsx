import { cn } from '@/lib/utils';

export default function SkeletonLoader({ className, children }) {
  const classes = cn('bg-gray-200  animate-pulse w-full rounded-xl p-4', className);

  return (
    <div>
      <div className={classes}>{children}</div>
    </div>
  );
}
