import Logo from '../assets/Logo.svg'

export default function Header(){
return(
    <>
    <header className="flex items-center justify-between px-6 py-4 bg-orange-500 text-white shadow">
    <img src={Logo} alt="Logo" className="h-10 fill-white" />
    <input
        type="text"
        placeholder="Search meals..."
        className="bg-white px-4 py-2 rounded-lg text-gray-800 w-64"
    />
    </header>
    </>
)
}