import { Building2, Calendar, Car, Users } from "lucide-react";
import { STATS } from "@/lib/constants";

const statIcons = {
  building: Building2,
  calendar: Calendar,
  car: Car,
  users: Users,
} as const;

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {STATS.map((stat) => {
        const Icon = statIcons[stat.icon];
        return (
          <div
            key={stat.label}
            className="glass-subtle p-5 flex flex-col items-center text-center gap-3"
          >
            <Icon className="h-8 w-8 text-gold/80" strokeWidth={1.25} />
            <span className="type-h2 text-foreground tabular-nums">
              {stat.value}
            </span>
            <span className="text-xs text-muted-foreground">{stat.label}</span>
          </div>
        );
      })}
    </div>
  );
}
