import { useSelector } from "react-redux";

const Sidebar=()=>{

   const showNav = useSelector((store)=>store.nav.showNav);
   if(!showNav) return null;

   return(
    <div className="shadow-xl pt-3 pl-1 px-4 ">
      <ul className="pt-1">
         <li className="font-bold"><span className="pr-1">🏠</span>HOME</li>
         <li className="font-bold"><span className="pr-1">🎞</span>SHORTS</li>
         <li className="font-bold"><span className="pr-1">🕹</span>SUBSCRIPTIONS</li>
      </ul>
      <br/>
      <h1 className="font-bold">YOU</h1>
      <ul>
         <li>Profile</li>
         <li>Liked Videos</li>
         <li>Downloads</li>
         <li>History</li>
         <li>Search History</li>
         <li>Favourites</li>
      </ul>
      <br/>
      <h1 className="font-bold">SUBSCRIPTIONS</h1>
      <ul>
         <li>Aajtak</li>
         <li>Code with harry</li>
         <li>Aditya Vlogs</li>
         <li>Indian railway fan club</li>
         <li>Harry Vlogs</li>
         <li>Tseries</li>
      </ul>
      <br/>
      <h1 className="font-bold">TRENDING</h1>
      <ul>
         <li>Movies</li>
         <li>Music</li>
         <li>Videos</li>
         <li>Comedy</li>
         <li>Horror</li>
      </ul>
    </div>
   );
};

export default Sidebar;