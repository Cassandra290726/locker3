import type { Product } from "@/types/product";

type ProductListProps = {
  products: Product[];
};

const money = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
});

export function ProductList({ products }: ProductListProps) {
  return (
    <section className="flex min-h-[320px] flex-col rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-lg backdrop-blur-sm">
      <h2 className="mb-4 text-lg font-semibold text-slate-800">
        Productos dados de alta
      </h2>
      {products.length === 0 ? (
        <p className="flex flex-1 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/80 px-4 py-12 text-center text-sm text-slate-500">
          Aún no hay productos. Completa el formulario y pulsa «Agregar
          producto».
        </p>
      ) : (
        <ul className="flex flex-col gap-3 overflow-y-auto pr-1">
          {products.map((p) => (
            <li
              key={p.id}
              className="rounded-xl border border-slate-100 bg-gradient-to-br from-white to-slate-50/90 p-4 shadow-sm"
            >
              <p className="font-semibold text-slate-900">{p.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                {p.description}
              </p>
              <p className="mt-2 text-base font-medium text-[#C9A7EB]">
                {money.format(p.price)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
