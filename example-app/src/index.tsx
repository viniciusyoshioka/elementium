import { useKeepAwakeOnDev } from "@hooks"
import { Router } from "@router"


export function App() {


    useKeepAwakeOnDev()


    return (
        <Router />
    )
}
