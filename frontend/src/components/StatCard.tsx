import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type StatCardColor = "blue" | "emerald" | "purple" | "amber" | "rose" | "default";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  Icon?: React.ComponentType<{ className?: string }>;
  className?: string;
  colorScheme?: StatCardColor;
}

const colorStyles: Record<
  StatCardColor,
  {
    card: string;
    iconBg: string;
    iconText: string;
  }
> = {
  default: {
    card: "hover:border-primary/40",
    iconBg: "bg-muted",
    iconText: "text-muted-foreground",
  },
  blue: {
    card: "border-blue-500/25 bg-gradient-to-br from-blue-500/10 via-card to-card hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10",
    iconBg: "bg-blue-500/15",
    iconText: "text-blue-600 dark:text-blue-400",
  },
  emerald: {
    card: "border-emerald-500/25 bg-gradient-to-br from-emerald-500/10 via-card to-card hover:border-emerald-500/50 hover:shadow-md hover:shadow-emerald-500/10",
    iconBg: "bg-emerald-500/15",
    iconText: "text-emerald-600 dark:text-emerald-400",
  },
  purple: {
    card: "border-purple-500/25 bg-gradient-to-br from-purple-500/10 via-card to-card hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10",
    iconBg: "bg-purple-500/15",
    iconText: "text-purple-600 dark:text-purple-400",
  },
  amber: {
    card: "border-amber-500/25 bg-gradient-to-br from-amber-500/10 via-card to-card hover:border-amber-500/50 hover:shadow-md hover:shadow-amber-500/10",
    iconBg: "bg-amber-500/15",
    iconText: "text-amber-600 dark:text-amber-400",
  },
  rose: {
    card: "border-rose-500/25 bg-gradient-to-br from-rose-500/10 via-card to-card hover:border-rose-500/50 hover:shadow-md hover:shadow-rose-500/10",
    iconBg: "bg-rose-500/15",
    iconText: "text-rose-600 dark:text-rose-400",
  },
};

export function StatCard({
  title,
  value,
  description,
  Icon,
  className,
  colorScheme = "default",
}: StatCardProps) {
  const styles = colorStyles[colorScheme] ?? colorStyles.default;

  return (
    <Card
      className={cn(
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        styles.card,
        className
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>

        {Icon && (
          <div className={cn("rounded-lg p-2 transition-colors", styles.iconBg)}>
            <Icon className={cn("h-4 w-4", styles.iconText)} />
          </div>
        )}
      </CardHeader>

      <CardContent>
        <div className="text-2xl font-bold tracking-tight">
          {value}
        </div>

        {description && (
          <p className="text-xs text-muted-foreground mt-1">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}