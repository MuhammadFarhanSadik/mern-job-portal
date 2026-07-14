function Categories() {

  const categories = [
    "Software",
    "Marketing",
    "Finance",
    "Design",
    "HR",
    "Sales",
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Popular Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">

          {categories.map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-xl shadow text-center hover:bg-blue-600 hover:text-white cursor-pointer"
            >
              {item}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;