import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change: number;
  changeType: "increase" | "decrease";
  description: string;
}

export function MetricCard({ title, value, change, changeType, description }: MetricCardProps) {
  const isPositive = changeType === "increase";
  
  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-700">{title}</CardTitle>
        {isPositive ? (
          <TrendingUp className="h-4 w-4 text-gray-600" />
        ) : (
          <TrendingDown className="h-4 w-4 text-gray-600" />
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
          <Badge 
            variant={isPositive ? "default" : "destructive"} 
            className={`px-1 py-0 ${isPositive ? "bg-gray-700 text-white" : "bg-red-600 text-white"}`}
          >
            {isPositive ? "+" : ""}{change}%
          </Badge>
          <span>{description}</span>
        </div>
      </CardContent>
    </Card>
  );
}