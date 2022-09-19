import { EmployerHeader } from "./EmployerHeader"

const Layout =({children})=>{
    return(
        <>
            <EmployerHeader/>
            {children}
        </>
    )
}

export default Layout;