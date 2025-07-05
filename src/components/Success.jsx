import { imagesList,sucessProps } from "../constants/properties";
import '../styles/global.css';
import { useNavigate } from "react-router-dom";
function Success(){
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate('/');
  }
  let imageToShow = imagesList[2];
 return (
  <section className="flex justify-center items-center p-4 w-full h-svh lg:h-dvh ">
    <div className=" flex flex-col h-full w-full max-w-[900px] my-15">
      <img
        src={imageToShow}
        alt=""
        className="w-[85px] my-10 lg:w-[100px] md:mb-15"
      />
      <h1 className="text-4xl lg:text-8xl md:mb-10 lg:font-[700] font-roboto font-[800] sm:text-5xl mb-6">
        {sucessProps.heading}
      </h1>
      <p className="text-[19px] sm:text-4xl lg:mb-10">
        {sucessProps.messsage}
      </p>

      {/* Spacer pushes button down */}
      <div className="flex-grow lg:flex-none" />

      <button onClick={handleSubmit} className="w-full cursor-pointer text-center sm:text-3xl md:mb-10 px-2 py-3.5 bg-dBlue rounded-[5px] text-white font-[700] font-roboto sm:px-3.5 sm:py-5.5 mb-5">
        {sucessProps.btnTxt}
      </button>
    </div>
  </section>
);

}
export default Success;