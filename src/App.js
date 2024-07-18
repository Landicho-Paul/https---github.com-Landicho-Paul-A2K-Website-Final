// import Routes from './routes'
// import Navbar from './Components/Pages/Navbar'
// import { useLocation } from 'react-router-dom';

// function App() {
//   const location = useLocation();
//   const showNavbar = !location.pathname.includes('/logintry') && !location.pathname.includes('/logSignup')
//   && !location.pathname.includes('/dashboard')
//   && !location.pathname.includes('/adminAccount')
//   && !location.pathname.includes('/CoverPhoto')
//   && !location.pathname.includes('/companyinfo')
//   && !location.pathname.includes('/index')
//   && !location.pathname.includes('/specialize')
//   && !location.pathname.includes('/newsPage');
  

//   return (
//     <div className="App">
//       {/* <Dashboard /> */}
//      {showNavbar && <Navbar />}
//       <Routes /> 
//     </div>
//   );
// }

// export default App;



import Routes from './routes'
import Navbar from './Components/Pages/Navbar'
import { useLocation } from 'react-router-dom';

import About from './Components/About/About';
function App() {
  const location = useLocation();
  const showNavbar = !location.pathname.includes('/logintry') && !location.pathname.includes('/logSignup')
  && !location.pathname.includes('/dashboard')
  && !location.pathname.includes('/adminAccount')
  && !location.pathname.includes('/CoverPhoto')
  && !location.pathname.includes('/companyinfo')
  && !location.pathname.includes('/index')
  && !location.pathname.includes('/specialize')
  && !location.pathname.includes('/newsPage');
  

    return (
    <div className="App">
      {/* <Dashboard /> */}
     
      <Routes /> 
    </div>
  );


}

export default App;
