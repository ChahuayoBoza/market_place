import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./Components/Security/Login";
// import MenuAppBar from "./Components/Navigation/MenuAppBar";
import './App.css'
// import './assets/fonts/DINNextRoundedLTPro-Regular/style.css';
// import './assets/fonts/DINNextRoundedLTPro-Bold/style.css';
// import './assets/fonts/DINNextRoundedLTPro-Regular/style.css';
import Products from "./components/Screens/products/index";
// import ProductForm from "./components/Screens/admin/product/product-form";
import { AuthProvider } from "./context/auth/Auth.context";
import LoginPage from "./components/Security/Login";
import ProductAdd from "./components/Screens/admin/product/product-add";
import NavBar from "./components/Screens/nav-bar";
import ProductDetail from "./components/Screens/products/product-detail";
import Footer from "./components/Screens/footer";
// import LoginPage from "./Components/Security/Login";


const App = () => {

  // const [ {sesionUser}, dispatch ] = useStateValue();

  // const [serviceResponse, setServiceResponse] = useState(false);

  // useEffect( async () => {

  //   console.log("SESION-------->", sesionUser);
  //   // let shoppingCartId = window.localStorage.getItem('cart');
      
  //   // if(!shoppingCartId){
  //   //   shoppingCartId = uuidv4();
  //   //   window.localStorage.setItem('cart', shoppingCartId);
  //   // }    
  //   if(!serviceResponse){
  //     // await getUser(dispatch); ---esto estaba antyes de remodificar
  //     await getUser(dispatch).then(response => {
  //       setServiceResponse(true);
  //       console.log('estado sesion del servidor', response);
  //     });
  //     // await getShoppingCart(dispatch, shoppingCartId);
      
  //     // setServiceResponse(true);
      
  //   }
  // },[serviceResponse]);

  return (
    <>
      <AuthProvider>
        <Router>        
          <NavBar></NavBar>          
          <Routes>
            <Route path="/" element={<Products/>}></Route>
            {/* //<Route path="/products/create" element={<ProductForm/>}></Route> */}
            <Route path="/products" element={<Products/>}></Route>   
            <Route path="/products/:id" element={<ProductDetail/>}></Route>   
            <Route path="/login" element={<LoginPage/>}></Route>  
            <Route path="/product-add" element={<ProductAdd/>}></Route>     
          </Routes>  
          <Footer></Footer>    
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
