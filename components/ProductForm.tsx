"use client";

import type { FormEvent } from "react";

type ProductFormProps = {
  onAdd: (name: string, description: string, price: number) => void;
};

export function ProductForm({ onAdd }: ProductFormProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const description = String(fd.get("description") ?? "").trim();
    const priceRaw = String(fd.get("price") ?? "").trim();

    if (!name || !description || !priceRaw) return;

    const price = Number.parseFloat(priceRaw.replace(",", "."));
    if (Number.isNaN(price) || price < 0) return;

    onAdd(name, description, price);
    form.reset();
  }

  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-lg backdrop-blur-sm">
      <h2 className="mb-5 text-lg font-semibold text-slate-800">
        Alta de producto
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">
            Nombre del producto
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="off"
            placeholder="Ej. Mochila escolar"
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition-shadow placeholder:text-slate-400 focus:border-transparent focus:shadow-focus-rose"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="description"
            className="text-sm font-medium text-slate-700"
          >
            Detalle o descripción
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            placeholder="Describe el producto…"
            className="resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition-shadow placeholder:text-slate-400 focus:border-transparent focus:shadow-focus-mint"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="price" className="text-sm font-medium text-slate-700">
            Valor o precio
          </label>
          <input
            id="price"
            name="price"
            type="number"
            inputMode="decimal"
            min={0}
            step="0.01"
            required
            placeholder="0.00"
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition-shadow placeholder:text-slate-400 focus:border-transparent focus:shadow-focus-sky"
          />
        </div>
        <button
          type="submit"
          className="mt-1 rounded-xl bg-[#C9A7EB] px-5 py-3 text-center text-sm font-semibold text-slate-900 shadow-md transition hover:brightness-105 active:scale-[0.99]"
        >
          Agregar producto
        </button>
      </form>
    </section>
  );
}
