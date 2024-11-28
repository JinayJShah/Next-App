"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../interface/productInterface";
import { RootState } from "../../store";
import {
  addProduct,
  deleteProduct,
  setProducts,
  updateProduct,
} from "../../store/productSlice";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";

const ProductPage = () => {
  const [loading, setLoading] = useState(false);
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  const [editingProduct, setEditingProduct] = useState<Product | null>();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
        const data = await res.json();

        dispatch(setProducts(data.products));
      } catch (err) {
        console.log(err, "err");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
  };

  const handleDelete = async (id: number) => {
    dispatch(deleteProduct(id));
  };

  const handleSubmit = async (product: Product) => {
    if (editingProduct) {
      dispatch(updateProduct(product));
    } else {
      dispatch(addProduct(product));
    }

    setEditingProduct(null);
  };

  return (
    <div className="p-4">
      <ProductForm onSubmit={handleSubmit} initialProduct={editingProduct} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-4 gap-4 ">
          {products.slice(0, 10).map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
