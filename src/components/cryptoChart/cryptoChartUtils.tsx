// Função para buscar o preço do Bitcoin
export const fetchBitcoinPrice = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
  );
  const data = await res.json();
  return {
    price: data.bitcoin.usd,
    time: new Date().toLocaleTimeString(),
  };
};

// Função para buscar o preço do Ethereum
export const fetchEthereumPrice = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
  );
  const data = await res.json();
  return {
    price: data.ethereum.usd,
    time: new Date().toLocaleTimeString(),
  };
};

// Configuração do eixo Y para o gráfico do Bitcoin
export const bitcoinOptions = {
  scales: {
    y: {
      min: 0,
      max: 100000,
      ticks: {
        stepSize: 10000,
        callback: function (this: void, tickValue: string | number) {
          return typeof tickValue === "number" ? `$${tickValue}` : tickValue;
        },
      },
    },
  },
};

// Configuração do eixo Y para o gráfico do Ethereum
export const ethereumOptions = {
  scales: {
    y: {
      min: 0,
      max: 5000,
      ticks: {
        stepSize: 500,
        callback: function (this: void, tickValue: string | number) {
          return typeof tickValue === "number" ? `$${tickValue}` : tickValue;
        },
      },
    },
  },
};
