"use client";

import { useEffect, useState } from "react";
import { Product } from "../../interface/productInterface";

interface ProductFormProps {
  initialProduct?: Product | null;
  onSubmit: (product: Product) => void;
}

const ProductForm = ({ initialProduct, onSubmit }: ProductFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle(initialProduct ? initialProduct?.title : "");
    setDescription(initialProduct ? initialProduct?.description : "");
  }, [initialProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      id: initialProduct?.id || Date.now(),
      title,
      description,
    };

    if (!title) return alert("Title is required");
    if (!description) return alert("Description is required");

    onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 w-full border rounded focus:outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 w-full border rounded focus:outline-none "
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 self-start"
      >
        {initialProduct ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default ProductForm;
