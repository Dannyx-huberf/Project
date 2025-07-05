import Hero from "../components/Hero";
import Update from '../components/Update';
import Email from "../components/Email";
import '../styles/global.css'
export default function MainShit(){
  return(
  <>
<section className="flex justify-center items-center p-4 lg:h-fit lg:flex-row flex-col w-full lg:my-10">
  <div className="lg:flex lg:flex-row-reverse lg:gap-1.5 lg:justify-between items-center lg:mx-10">
    <div className=" lg:w-1/2">
      <Hero />
    </div>
    <div className="lg:w-1/2 mx-5 lg:mx-10">
      <Update />
      <Email />
    </div>
  </div>
</section>
  <div class="attribution text-[11px] text-blue-300 text-center">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/Dannyx-huberf">Nwachukwu Daniel</a>.
  </div>
  </>
  )
}