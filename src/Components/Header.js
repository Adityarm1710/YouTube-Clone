import { useDispatch } from "react-redux";
import { HAMBURGER_LOGO_URL, YOUTUBE_LOGO_URL, YOUTUBE_USER_LOGO, YOUTUBE_NOTI_LOGO} from "../Utilities/Constants"
import { toggleshowNav } from "../Utilities/navSlice";

const Header=()=>{

   const dispatch = useDispatch();
   const handleNavClick=()=>{
      dispatch(toggleshowNav());
   };

   return(
   <div className="shadow-md grid grid-flow-col justify-between ">
     <div className="flex p-1 m-1 ml-2">
     <img className=" h-7 pr-3 cursor-pointer" alt="Hamburger Logo" src= {HAMBURGER_LOGO_URL} onClick={()=>handleNavClick()}/>
      <img className="h-7" alt="Youtube Logo" src= {YOUTUBE_LOGO_URL} />
     </div>
     <div className="p-1 m-1">
        <input className="border border-black border-solid rounded-l-2xl py-1 px-20"type="text"/>
        <button className=" border border-black border_solid rounded-r-2xl py-1 px-4 bg-gray-300">🔎</button>
     </div>
     <div className="p-1 m-1 mr-2 flex">
      <img className="h-8 pr-3"alt="Profile Logo" src={YOUTUBE_NOTI_LOGO}/>
      <img className="h-8 "alt="Profile Logo" src={YOUTUBE_USER_LOGO}/>
     </div>
   </div>
   );
};

export default Header;