"use client";

import React, { useEffect, useState } from "react";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { Product } from "../../../interface/productInterface";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductDetails = ({ params }: any) => {
  const [productData, setProductData] = useState<Product>();
  const products = useSelector((state: RootState) => state.products.products);

  const getSlug = async () => {
    const { id } = await params;
    const data = products.find((item) => item.id === Number(id));
    if (data) {
      setProductData(data);
    }
  };

  useEffect(() => {
    getSlug();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 md:text-4xl mb-4">
        Product details
      </h1>
      <div className="text-2xl font-semibold text-gray-700 mb-2">
        Title : {productData?.title}
      </div>
      <p className="text-base text-gray-600 md:text-lg">
        Description : {productData?.description}
      </p>
    </div>
  );
};

export default ProductDetails;
