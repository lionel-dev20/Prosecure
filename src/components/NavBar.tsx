import { Content } from "@prismicio/client"
import { LogoHeader } from "./logos/LogoHeader"
import { PrismicLink } from "@prismicio/react"
import { Navigation } from "./ui/Navigation"
import ButtonLink from "./ButtonLink"
import Link from "next/link"

type NavBarProps = {
    settings: Content.SettingsDocument
}


const NavBar = ({settings}: NavBarProps) => {
  return (
    <div>
    <div className="mx-auto max-w-7xl flex items-center py-2 justify-between">
    <Link href="/">
    <LogoHeader />
    </Link>
     <Navigation />
   
        <>
        { settings.data.navigation.map((item) => {
                if( item.cta_button){
                    return(
                        <div key={item.label}>
                        <ButtonLink  field={item.link}>
                        {item.label}
                    </ButtonLink >
                    </div>
                    )    
                }

                // return(
                //     <li key={item.label}>
                //       <PrismicLink field={item.link} >
                //         {item.label}
                //         </PrismicLink>
                //     </li>
                // )
            })
        }
     </>
    </div>
    </div>
  )
}

export default NavBar