"use client";

import { Product } from "@/types";
import { PreOrderSheet } from "./pre-order-sheet";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
  index: number;
  isToCenter: boolean;
};

export function ProductCard({ product, isToCenter, index }: ProductCardProps) {
  return (
    <div
      key={`product-${product.product_id}`}
      className={`relative flex flex-col p-6 rounded-xl ${
        product.best_choice
          ? "bg-white shadow-xl scale-105 border-2 border-emerald-500"
          : "bg-gray-50 shadow-md"
      } ${isToCenter ? "order-2" : `order-${index + 2}`}`}
    >
      {product.best_choice && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Melhor Escolha
          </span>
        </div>
      )}

      <div className="relative h-48 mb-4 items-center flex justify-center">
      <Image
          src={product.image_url}
          alt={product.name}
          width={400}
          height={400}
          className="h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex items-center gap-2 mb-2">
        <h3 className="font-semibold text-lg">{product.name}</h3>
      </div>

      {product.freight === "Frete grátis" && (
        <div className="flex items-center gap-2 text-green-600 mb-3">
          <span className="text-sm font-medium">Frete Grátis</span>
        </div>
      )}

      <div className="mt-auto">
        <div className="text-2xl font-bold text-gray-900 mb-3">
          {new Intl.NumberFormat("pt-BR", {
            currency: "BRL",
            style: "currency",
          }).format(product.price)}
        </div>
        <PreOrderSheet product_id={product.product_id} />
      </div>
    </div>
  );
}