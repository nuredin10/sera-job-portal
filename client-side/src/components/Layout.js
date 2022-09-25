import { EmployerHeader } from "./EmployerHeader"
import { EmployeeHeader } from "./EmployeeHeader"

const Layout =({children})=>{
    return(
        <>
            <EmployerHeader/>
            {/* <EmployeeHeader/> */}
            {children}
            
        </>
    )
}

export default Layout;