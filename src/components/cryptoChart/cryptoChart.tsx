"use client";

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import type { ChartData } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  fetchBitcoinPrice,
  fetchEthereumPrice,
  bitcoinOptions,
  ethereumOptions,
} from "./cryptoChartUtils";

// Registra os componentes necessários do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type DataPoint = {
  time: string;
  price: number;
};

const CryptoCharts: React.FC = () => {
  const [bitcoinData, setBitcoinData] = useState<DataPoint[]>([]);
  const [ethereumData, setEthereumData] = useState<DataPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Busca inicial e atualização a cada 1 minuto
  useEffect(() => {
    const fetchData = async () => {
      try {
        const bitcoin = await fetchBitcoinPrice();
        const ethereum = await fetchEthereumPrice();
        setBitcoinData((prev) => [...prev, bitcoin]);
        setEthereumData((prev) => [...prev, ethereum]);
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  // Dados para o gráfico do Bitcoin
  const bitcoinChartData: ChartData<"line"> = {
    labels: bitcoinData.map((point) => point.time),
    datasets: [
      {
        label: "Preço do Bitcoin (USD)",
        data: bitcoinData.map((point) => point.price),
        fill: false,
        borderColor: "rgba(34, 211, 238, 1)",
        tension: 0.1,
      },
    ],
  };

  // Dados para o gráfico do Ethereum
  const ethereumChartData: ChartData<"line"> = {
    labels: ethereumData.map((point) => point.time),
    datasets: [
      {
        label: "Preço do Ethereum (USD)",
        data: ethereumData.map((point) => point.price),
        fill: false,
        borderColor: "rgba(235, 64, 52, 1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="w-full flex flex-col items-center relative z-10 mb-10">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Criptomoedas em Tempo Real
      </h2>
      {isLoading ? (
        <p className="text-center">Carregando dados...</p>
      ) : (
        <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-8">
          {/* Gráfico do Bitcoin */}
          <div className="w-[90vw] h-[30vh] lg:w-[40vw] lg:h-[40vh] flex flex-col px-4 py-12 bg-gray-50 rounded-lg shadow-2xl justify-center items-center">
            <h3 className="text-xl font-bold mb-4 text-center">
              Preço do Bitcoin (USD)
            </h3>
            <Line data={bitcoinChartData} options={bitcoinOptions} />
          </div>
          {/* Gráfico do Ethereum */}
          <div className="w-[90vw] h-[30vh] lg:w-[40vw] lg:h-[40vh] flex flex-col py-12 bg-gray-50 rounded-lg shadow-2xl justify-center items-center">
            <h3 className="text-xl font-bold mb-4 text-center">
              Preço do Ethereum (USD)
            </h3>
            <Line data={ethereumChartData} options={ethereumOptions} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CryptoCharts;
