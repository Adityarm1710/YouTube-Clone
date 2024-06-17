const Button = ({buttonName})=>{
  return(
    <div className="pt-3 ">
       <button className="border border-solid border-black py-1 px-2 mx-1 bg-gray-100 rounded-md">{buttonName}</button>
    </div>
  );
};

export default Button;