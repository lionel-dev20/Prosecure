import { createClient } from "@/prismicio"
import NavBar from "./NavBar";


const Header = async () => {
const client = createClient();
const settings = await client.getSingle("settings")
  return (
    <header className="top-0 sticky z-40 bg-[#fff] shadow-md">
        <NavBar settings = {settings}   />
    </header>
  )
}

export default Header