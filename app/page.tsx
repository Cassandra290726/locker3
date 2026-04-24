"use client";

import { useCallback, useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductForm } from "@/components/ProductForm";
import { ProductList } from "@/components/ProductList";
import type { Product } from "@/types/product";

function newId() {
  return crypto.randomUUID();
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  const handleAdd = useCallback(
    (name: string, description: string, price: number) => {
      setProducts((prev) => [
        ...prev,
        { id: newId(), name, description, price },
      ]);
    },
    []
  );

  return (
    <div className="flex min-h-screen flex-col bg-slate-100/90">
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:items-start lg:gap-10 lg:px-8">
        <div className="w-full shrink-0 lg:max-w-md lg:flex-1">
          <ProductForm onAdd={handleAdd} />
        </div>
        <div className="w-full flex-1 lg:min-w-0">
          <ProductList products={products} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
