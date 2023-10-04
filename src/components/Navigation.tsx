import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
            <span className="font-bold">React 2023</span>
            <span>
                <Link to="/">Products</Link>
                <Link to="/about" className="ml-2">About</Link>
            </span>
        </nav>
    )
}