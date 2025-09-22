export default function Content(){
    const meals = [
        { id: 1, name: "Margherita Pizza", price: "$12", image: "https://source.unsplash.com/400x300/?pizza" },
        { id: 2, name: "Veggie Burger", price: "$10", image: "https://source.unsplash.com/400x300/?burger" },
        { id: 3, name: "Pasta Alfredo", price: "$14", image: "https://source.unsplash.com/400x300/?pasta" },
        { id: 4, name: "Sushi Platter", price: "$20", image: "https://source.unsplash.com/400x300/?sushi" },
    ];


    return(
        <>
        <main className="px-6 py-8 bg-white text-gray-800 min-h-screen">
        <h2 className="text-3xl font-bold text-orange-500 mb-6">Our Specials</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {meals.map(meal => (
            <div
                key={meal.id}
                className="bg-orange-50 rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
                <img src={meal.image} alt={meal.name} className="w-full h-48 object-cover" />
                <div className="p-4 flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-gray-900">{meal.name}</h3>
                <p className="text-orange-600 font-bold mt-2">{meal.price}</p>
                <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                    Add to Cart
                </button>
                </div>
            </div>
            ))}
        </div>
        </main>
        </>
    )
}