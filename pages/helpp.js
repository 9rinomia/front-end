import { useState } from "react";

const classmates = [
  { id: 1, name: "Minori", height: 190, age: 17, favoriteColor: "Blue", image: "/Unknown-66.jpg" },
  { id: 2, name: "Tsolmon", height: 130, age: 17, favoriteColor: "Black", image: "/Unknown-65.jpg" },
  { id: 3, name: "Khantushig", height: 150, age: 16, favoriteColor: "Blue", image: "/Unknown-60.jpg" },
  { id: 4, name: "PurevBat", height: 130, age: 17, favoriteColor: "Black", image: "/Unknown-61.jpg" },
  { id: 5, name: "NaranErdene", height: 160, age: 16, favoriteColor: "Blue", image: "/Unknown-62.jpg" },
  { id: 6, name: "Aiden", height: 170, age: 16, favoriteColor: "Black", image: "/Unknown-63.jpg" },
  { id: 7, name: "Chinguun", height: 150, age: 16, favoriteColor: "Blue", image: "/Unknown-60.jpg" },
  { id: 8, name: "Anar", height: 130, age: 17, favoriteColor: "Black", image: "/Unknown-61.jpg" },
  { id: 9, name: "Gunsan", height: 160, age: 16, favoriteColor: "Blue", image: "/Unknown-62.jpg" },
  { id: 10, name: "Anduul", height: 170, age: 16, favoriteColor: "Black", image: "/Unknown-63.jpg" },
];

const Card = ({ data }) => {
  return (
    <div className="border p-4 rounded shadow w-48">
      <img src={data.image} alt={data.name} className="w-full h-32 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{data.name}</h2>
      <p className="text-sm">Height: {data.height}cm</p>
      <p className="text-sm">Age: {data.age}</p>
      <p className="text-sm">Favorite Color: {data.favoriteColor}</p>
    </div>
  );
};

const App = () => {
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("");
  const [isColumn, setIsColumn] = useState(false);

  return (
    <div className="p-4 mx-auto max-w-full">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          className="border p-2 rounded w-40"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="text"
          placeholder="Search by height..."
          className="border p-2 rounded w-40"
          value={search2}
          onChange={(e) => setSearch2(e.target.value)}
        />

        <button 
          className="border p-2 rounded bg-white-200" 
          onClick={() => setIsColumn(!isColumn)}
        >
          Layout
        </button>
      </div>

      <div className={isColumn ? "flex flex-col gap-4 items-center" : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"}>
        {classmates
          .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
          .filter((item) => item.height.toString().includes(search2))
          .map((item) => (
            <Card key={item.id} data={item} />
          ))}
      </div>
    </div>
  );
};

export default App;
