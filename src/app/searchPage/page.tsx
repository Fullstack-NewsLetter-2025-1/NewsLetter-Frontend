"use client";
import { useSearchParams } from "next/navigation";

interface NewsItem {
  id: number;
  title: string;
  category: string;
  content: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Bitcoin atinge novo recorde",
    category: "Cripto",
    content:
      "O Bitcoin atingiu um novo recorde de preço hoje, ultrapassando os $60.000.",
  },

  {
    id: 2,
    title: "Ethereum em alta",
    category: "Cripto",
    content:
      "O Ethereum segue em alta, com um aumento de 10% nas últimas 24 horas.",
  },
  {
    id: 3,
    title: "Notícias sobre tecnologia",
    category: "Tecnologia",
    content: "Novos avanços em IA estão revolucionando o mercado.",
  },
  {
    id: 4,
    title: "Notícias gerais",
    category: "Geral",
    content: "Confira as últimas notícias do mundo.",
  },
  {
    id: 5,
    title: "Bitcoin atinge novo recorde",
    category: "Cripto",
    content:
      "O Bitcoin atingiu um novo recorde de preço hoje, ultrapassando os $60.000.",
  },
  {
    id: 6,
    title: "Bitcoin atinge novo recorde",
    category: "Cripto",
    content:
      "O Bitcoin atingiu um novo recorde de preço hoje, ultrapassando os $60.000.",
  },
  {
    id: 7,
    title: "Bitcoin atinge novo recorde",
    category: "Cripto",
    content:
      "O Bitcoin atingiu um novo recorde de preço hoje, ultrapassando os $60.000.",
  },
  {
    id: 8,
    title: "Bitcoin atinge novo recorde",
    category: "Cripto",
    content:
      "O Bitcoin atingiu um novo recorde de preço hoje, ultrapassando os $60.000.",
  },
];

// SearchPage.tsx
export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  const filteredNews = newsData.filter(
    (news) =>
      news.title.toLowerCase().includes(query) ||
      news.category.toLowerCase().includes(query)
  );

  return (
    <div className=" p-8 bg-gray-50 relative z-30 mt-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-8 text-gray-800 text-center">
          Resultados para: {query}
        </h1>

        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((news) => (
              <div
                key={news.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  {news.title}
                </h2>
                <p className="text-sm text-blue-600 mb-4">{news.category}</p>
                <p className="text-gray-600">{news.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-red-500 text-lg">
              Nenhum resultado encontrado para {query}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
