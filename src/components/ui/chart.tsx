import * as React from 'react';
import * as RechartsPrimitive from 'recharts';

import { cn } from '@/lib/utils';

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & {
    config: Record<string, unknown>;
    children: React.ReactNode;
  }
>(({ className, children, config, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'flex aspect-video justify-center text-xs',
        className
      )}
      {...props}
    >
      <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
    </div>
  );
});
ChartContainer.displayName = 'Chart';

export { ChartContainer };
