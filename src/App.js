import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/index.js";
import DefaultLayout from "./components/Layout/DefaultLayout/index.js";
import { Fragment } from "react";
import { createStore } from "redux";
// function counterReducer(state = {value : 0},action){
//   switch(action.type){
//     case 'increase':  
//     return {value : state => state +1}
//     case 'decsrease':
//       return {value : state => state -1}
//       default: return state
//   }
// }
// let store = createStore(counterReducer);
// store.subscribe(() => console.log(store.getState()))
// store.dispatch({ type: 'increase' })
// // {value: 1}
// store.dispatch({ type: 'increase' })
// // {value: 2}
// store.dispatch({ type: 'decsrease' })
document.body.style.overflow = "hidden";
 function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((item, index) => {
            const Page = item.component;
            let Layout = DefaultLayout;
            if (item.layout) {
              Layout = item.layout;
            } else if (item.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={item.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );}
//   return(
// <></>
//   )


export default App;
