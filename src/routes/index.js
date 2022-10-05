import Home from "../pages/Home"
import Following from "../pages/Following"
import Upload from "../pages/Upload"
import HeaderOnly from "../components/Layout/HeaderOnly"
import Message from "../pages/Message"
import Search from "../pages/Search"
import User from "../pages/User"
const publicRoutes = [
{path:'/' , component: Home},
{path:'/following' , component: Following},
{path:'/upload' , component: Upload , layout : HeaderOnly},
{path:'/message' , component: Message , layout : HeaderOnly},
{path:'/search:search' , component: Search },
{path:'/:name' , component: User },

]
const privateRoutes = [ 

]
 
export {privateRoutes,publicRoutes}