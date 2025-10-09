import React from 'react';
import Navber from '../Header/Navber';
// import { Outlet,} from 'react-router';
import Footer from '../Footer/Footer';
import Errorpages from '../Pages/Errorpages/Errorpages';
import { Outlet } from 'react-router';
import PageLoader from '../PageLoader/PageLoader';
// import { Outlet, useRouteError } from 'react-router-dom';

const Root = () => {
    //   const error = useRouteError();
      
    return (
        <div>
            {/* <PageLoader></PageLoader> */}
             <Navber></Navber>
             
             {/* {
                error ? (<Errorpages error={error} />) : (<Outlet />)
             } */}
              
           <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Root;