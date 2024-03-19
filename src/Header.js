import { useState } from "react"

const Header = () => {

    const [btnName, setBtnName] = useState("Login")


    return(
        <div className="flex justify-between bg-blue-300  shadow-lg">
            <div className="logo-container">
                <img className="w-20 h-20 m-7" src="https://img.freepik.com/premium-vector/print_171487-162.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1707955200&semt=ais" />
            </div>
            <div className="items-center">
                <ul className="flex p-4 m-10">
                    <li className="px-4">Home</li>
                    <li className="px-4">About Us</li>
                    <li className="px-4">Contact Us</li>
                    <li className="px-4">Cart</li>
                    <button className="login-button" onClick={() => {btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header