import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";

interface Vehicle {
  id: string;
  tipo: "Carro" | "Moto";
  marca: string;
  modelo: string;
  ano: number;
  valorCompra: number;
  valorVenda: number;
  status: "Disponível" | "Vendido" | "Em Negociação";
}

const vehicleStock: Vehicle[] = [
  {
    id: "1",
    tipo: "Carro",
    marca: "Honda",
    modelo: "Civic",
    ano: 2020,
    valorCompra: 85000,
    valorVenda: 95000,
    status: "Disponível"
  },
  {
    id: "2", 
    tipo: "Moto",
    marca: "Yamaha",
    modelo: "YZF-R3",
    ano: 2021,
    valorCompra: 25000,
    valorVenda: 28000,
    status: "Em Negociação"
  },
  {
    id: "3",
    tipo: "Carro",
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2019,
    valorCompra: 70000,
    valorVenda: 78000,
    status: "Vendido"
  },
  {
    id: "4",
    tipo: "Moto", 
    marca: "Honda",
    modelo: "CB 600F",
    ano: 2018,
    valorCompra: 22000,
    valorVenda: 26000,
    status: "Disponível"
  },
  {
    id: "5",
    tipo: "Carro",
    marca: "Volkswagen",
    modelo: "Golf",
    ano: 2022,
    valorCompra: 120000,
    valorVenda: 130000,
    status: "Disponível"
  },
  {
    id: "6",
    tipo: "Moto",
    marca: "Kawasaki",
    modelo: "Ninja 400",
    ano: 2020,
    valorCompra: 30000,
    valorVenda: 33000,
    status: "Em Negociação"
  }
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

const getStatusBadge = (status: Vehicle['status']) => {
  switch (status) {
    case "Disponível":
      return <Badge variant="default" className="bg-gray-100 text-gray-800 border-gray-300">Disponível</Badge>;
    case "Vendido":
      return <Badge variant="secondary" className="bg-gray-700 text-white">Vendido</Badge>;
    case "Em Negociação":
      return <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-400">Em Negociação</Badge>;
  }
};

export function StockTable() {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Estoque de Veículos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tipo</TableHead>
                <TableHead>Veículo</TableHead>
                <TableHead>Ano</TableHead>
                <TableHead>Valor Compra</TableHead>
                <TableHead>Valor Venda</TableHead>
                <TableHead>Margem</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vehicleStock.map((vehicle) => {
                const margin = vehicle.valorVenda - vehicle.valorCompra;
                const marginPercent = ((margin / vehicle.valorCompra) * 100).toFixed(1);
                
                return (
                  <TableRow key={vehicle.id}>
                    <TableCell>
                      <Badge variant={vehicle.tipo === "Carro" ? "default" : "secondary"} 
                             className={vehicle.tipo === "Carro" ? "bg-gray-800 text-white" : "bg-gray-400 text-white"}>
                        {vehicle.tipo}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{vehicle.marca} {vehicle.modelo}</div>
                      </div>
                    </TableCell>
                    <TableCell>{vehicle.ano}</TableCell>
                    <TableCell>{formatCurrency(vehicle.valorCompra)}</TableCell>
                    <TableCell>{formatCurrency(vehicle.valorVenda)}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className={margin > 0 ? "text-gray-700 font-medium" : "text-red-600 font-medium"}>
                          {formatCurrency(margin)}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          ({marginPercent}%)
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(vehicle.status)}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}