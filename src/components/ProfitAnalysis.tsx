import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const profitData = [
  {
    veiculo: "Honda Civic",
    lucro: 10000,
    tipo: "Carro",
  },
  {
    veiculo: "Yamaha R3", 
    lucro: 3000,
    tipo: "Moto",
  },
  {
    veiculo: "Toyota Corolla",
    lucro: 8000,
    tipo: "Carro",
  },
  {
    veiculo: "Honda CB600",
    lucro: 4000,
    tipo: "Moto",
  },
  {
    veiculo: "VW Golf",
    lucro: -2000,
    tipo: "Carro",
  },
  {
    veiculo: "Kawasaki Ninja",
    lucro: 3000,
    tipo: "Moto",
  },
];

const chartConfig = {
  lucro: {
    label: "Lucro",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export function ProfitAnalysis() {
  const totalProfit = profitData.reduce((sum, item) => sum + item.lucro, 0);
  const losses = profitData.filter(item => item.lucro < 0).length;
  const gains = profitData.filter(item => item.lucro > 0).length;

  return (
    <div className="col-span-full lg:col-span-1 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Análise de Lucros</CardTitle>
          <CardDescription>
            Perdas e ganhos por veículo vendido
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={profitData} layout="horizontal">
                <XAxis type="number" />
                <YAxis dataKey="veiculo" type="category" width={100} fontSize={12} />
                <ChartTooltip 
                  content={<ChartTooltipContent />}
                  formatter={(value: number) => [formatCurrency(value), "Lucro"]}
                />
                <Bar 
                  dataKey="lucro" 
                  fill={(entry) => entry.lucro > 0 ? "hsl(var(--chart-1))" : "hsl(var(--chart-5))"}
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="shadow-sm">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">
                {formatCurrency(totalProfit)}
              </div>
              <div className="text-sm text-muted-foreground">Lucro Total</div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-700">{gains}</div>
              <div className="text-sm text-muted-foreground">Ganhos</div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{losses}</div>
              <div className="text-sm text-muted-foreground">Perdas</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}