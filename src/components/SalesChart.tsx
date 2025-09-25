import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const salesData = [
  { month: "Jan", carros: 15, motos: 8 },
  { month: "Fev", carros: 18, motos: 12 },
  { month: "Mar", carros: 22, motos: 15 },
  { month: "Abr", carros: 19, motos: 10 },
  { month: "Mai", carros: 25, motos: 18 },
  { month: "Jun", carros: 28, motos: 22 },
  { month: "Jul", carros: 24, motos: 16 },
  { month: "Ago", carros: 30, motos: 25 },
  { month: "Set", carros: 27, motos: 20 },
];

const chartConfig = {
  carros: {
    label: "Carros",
    color: "hsl(var(--chart-1))",
  },
  motos: {
    label: "Motos", 
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function SalesChart() {
  return (
    <Card className="col-span-full lg:col-span-2">
      <CardHeader>
        <CardTitle>Vendas Mensais</CardTitle>
        <CardDescription>
          Comparativo de vendas de carros e motos nos últimos 9 meses
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="fillCarros" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-carros)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-carros)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillMotos" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-motos)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-motos)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Area
                dataKey="motos"
                type="monotone"
                fill="url(#fillMotos)"
                fillOpacity={0.4}
                stroke="var(--color-motos)"
                stackId="a"
              />
              <Area
                dataKey="carros"
                type="monotone"  
                fill="url(#fillCarros)"
                fillOpacity={0.4}
                stroke="var(--color-carros)"
                stackId="a"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}