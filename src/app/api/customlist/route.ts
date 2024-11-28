import { NextResponse } from "next/server";

const customList = [
  { id: 1, title: "Mobile", brand: "Apple" },
  { id: 2, title: "Tv", brand: "Sony" },
  { id: 3, title: "AC", brand: "Hitachi" },
  { id: 4, title: "Fridge", brand: "LG" },
  { id: 5, title: "Laptop", brand: "Hp" },
];

export async function GET() {
  console.log("Get Custom API");
  try {
    return NextResponse.json(customList);
  } catch (err) {
    return NextResponse.json({ message: "Error", err });
  }
}
