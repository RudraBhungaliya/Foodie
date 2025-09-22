export default function Footer(){
return(
    <>
    <footer className="bg-orange-500 text-white py-6 text-center">
    <p>© {new Date().getFullYear()} Foodie. All rights reserved.</p>
    <p className="text-sm">Made with ❤️ for food lovers</p>
    </footer>
    </>
)
}