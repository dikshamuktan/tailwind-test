
import { Link } from "react-router-dom"

function Header(){

    return(
        <div >
            <ul>
                <li className="flex gap-4 justify-center items-center ">
                    <Link to={"/about/2"}>about</Link>
                    <Link to={"/"}>home</Link>
                </li>
            </ul>
        </div>
    )
}
export default Header;