import { Routes } from "react-router-dom"
import AuthRoutes from "./Auth";

const RootRouter = () => {
    return <Routes>
        {AuthRoutes}
    </Routes>
}


export default RootRouter;