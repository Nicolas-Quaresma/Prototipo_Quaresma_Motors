import { MetricCard } from "./components/MetricCard";
import { SalesChart } from "./components/SalesChart";
import { StockTable } from "./components/StockTable";
import { ProfitAnalysis } from "./components/ProfitAnalysis";
import { Logo } from "./components/Logo";
import { Car, Bike, TrendingUp, DollarSign } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-background p-4 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <Logo />
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Período de Análise</p>
            <p className="font-medium">Setembro 2024</p>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Car className="h-5 w-5" />
            <Bike className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Vendas Totais"
          value="183"
          change={12.5}
          changeType="increase"
          description="últimos 30 dias"
        />
        <MetricCard
          title="Carros Vendidos"
          value="108"
          change={8.2}
          changeType="increase"
          description="últimos 30 dias"
        />
        <MetricCard
          title="Motos Vendidas"
          value="75"
          change={18.7}
          changeType="increase"
          description="últimos 30 dias"
        />
        <MetricCard
          title="Receita Total"
          value="R$ 2.4M"
          change={-3.1}
          changeType="decrease"
          description="últimos 30 dias"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SalesChart />
        <ProfitAnalysis />
      </div>

      {/* Stock Table */}
      <StockTable />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg border p-4 shadow-sm">
          <div className="flex items-center space-x-2">
            <Car className="h-5 w-5 text-gray-600" />
            <span className="font-medium">Carros em Estoque</span>
          </div>
          <div className="text-2xl font-bold mt-2">23</div>
          <div className="text-sm text-muted-foreground">3 em negociação</div>
        </div>

        <div className="bg-card rounded-lg border p-4 shadow-sm">
          <div className="flex items-center space-x-2">
            <Bike className="h-5 w-5 text-gray-600" />
            <span className="font-medium">Motos em Estoque</span>
          </div>
          <div className="text-2xl font-bold mt-2">18</div>
          <div className="text-sm text-muted-foreground">2 em negociação</div>
        </div>

        <div className="bg-card rounded-lg border p-4 shadow-sm">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-gray-600" />
            <span className="font-medium">Margem Média</span>
          </div>
          <div className="text-2xl font-bold mt-2">12.8%</div>
          <div className="text-sm text-muted-foreground">todas as vendas</div>
        </div>

        <div className="bg-card rounded-lg border p-4 shadow-sm">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-5 w-5 text-gray-600" />
            <span className="font-medium">Ticket Médio</span>
          </div>
          <div className="text-2xl font-bold mt-2">R$ 78k</div>
          <div className="text-sm text-muted-foreground">por venda</div>
        </div>
      </div>
    </div>
  );
}