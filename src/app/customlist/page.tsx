import { Custom } from "../../interface/customInterface";

const CustomListPage = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/customlist`,
    {
      cache: "no-store", // SSR
      // cache: "force-cache", // SSG
      // next: { revalidate: 10 }, // ISR
    }
  );

  const data = await response.json();

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {data?.map((item: Custom) => {
        return (
          <div
            key={item.id}
            className="border p-4 mt-4 rounded shadow-sm bg-white"
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-700">{item.brand}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CustomListPage;
