import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {publicRoutes} from './routes/index.js'
import DefaultLayout from "./components/Layout/DefaultLayout/index.js";
import { Fragment } from "react";
function App() {
  return (
    <Router>
      <div>
      <Routes>
       {publicRoutes.map((item,index) => {
        const Page = item.component
        let Layout = DefaultLayout
        if(item.layout){
          Layout = item.layout
        }else if(item.layout === null){
          Layout = Fragment
        }
        return <Route key={index} path={item.path} element={
          <Layout><Page /></Layout>
        }/>
       })}
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
