import { createBrowserRouter } from "react-router-dom";
import News from "./components/News";


const router= createBrowserRouter([
{
path:"/",
element:<News  key="general" pageSize={6} country="in" category="general"  />
},
{
path:"/business",
element:<News key="business" pageSize={6} country="in" category="business"  />
},
{
path:"/sports",
element:<News key="sports" pageSize={6} country="in" category="sports"  />
},
{
path:"/health",
element:<News key="health" pageSize={6} country="in" category="health"  />
},
{
path:"/science",
element:<News key="science" pageSize={6} country="in" category="science"  />
},
{
path:"/technology",
element:<News key="technology" pageSize={6} country="in" category="technology"  />
},
{
path:"/entertainment",
element:<News key="entertainment" pageSize={20} country="in" category="entertainment"  />
},
]);
export default router;