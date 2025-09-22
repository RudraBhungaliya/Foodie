export default function Navbar(){
return(
    <>
    <nav className="bg-orange-100 text-orange-700 shadow-sm">
    <ul className="flex justify-center space-x-6 py-3 font-medium">
        <li className="hover:text-orange-500 cursor-pointer">Home</li>
        <li className="hover:text-orange-500 cursor-pointer">Menu</li>
        <li className="hover:text-orange-500 cursor-pointer">Orders</li>
        <li className="hover:text-orange-500 cursor-pointer">Cart</li>
    </ul>
    </nav>
    </>
)
}