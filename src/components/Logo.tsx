import { Car } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-gray-800 via-gray-600 to-gray-400 rounded-lg flex items-center justify-center shadow-lg">
          <Car className="h-6 w-6 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full"></div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
          Quaresma Motors
        </h1>
        <p className="text-xs text-muted-foreground -mt-1">Dashboard Gerencial</p>
      </div>
    </div>
  );
}