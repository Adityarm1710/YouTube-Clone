import './App.css';
import Header from "./Components/Header"
import Body from "./Components/Body"
import { Provider } from 'react-redux';
import store from "./Utilities/Store";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';

function App() {

  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Body/>,
      children:[
        {
          path:'/',
          element:<MainContainer/>
        },
        {
          path:'/watch',
          element:<WatchPage/>
        }
      ]
    }
  ]);
  return (
    <Provider store={store}>
    <div>
       <Header/>
       <RouterProvider router={appRouter}></RouterProvider>
    </div>
    </Provider>
  );
}

export default App;
