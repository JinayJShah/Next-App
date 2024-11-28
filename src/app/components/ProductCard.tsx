"use client";
import React from "react";
import { Product } from "../../interface/productInterface";
import Link from "next/link";

type Props = {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
};

const ProductCard = ({ product, onEdit, onDelete }: Props) => {
  return (
    <div
      key={product.id}
      className="border p-4 mt-4 rounded shadow-sm bg-white"
    >
      <Link href={`/products/${product.id}`}>
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-gray-700">{product.description}</p>
      </Link>
      <div className="mt-4 flex justify-end gap-2">
        <button
          onClick={() => onEdit(product)}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
