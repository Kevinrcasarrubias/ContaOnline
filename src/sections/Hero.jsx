import hero from "../assets/images/calculator.jpg";


const Hero = () => {
  return (
    <div
        className="grid grid-cols-2 grid-rows-1">
          <div className="w-screen h-cover">
          <img
              src={hero}
              alt="hero image"
              className=""
          />
          </div>  
          <div className="">  
              <h1 className=" font-montserrat text-[18px] m-[1rem] mt-[4rem] xxs:mt-[6rem] sm:mt-[7rem] md:mt-[9rem] lg:mt-[14rem] xl:mt-[17rem] xxl:mt-[19rem] 2xl:mt-[22rem] 2xxl:mt-[25rem] 3xl:mt-[28rem] text-center font-bold xs:mr-[2rem] xs:text-[22px] sm:text-[28px] md:text-[34px] lg:text-[42px] xl:text-[45px] xxl:text-[50px] 2xl:text-[54px] 2xxl:text-[58px] 3xl:text-[80px]">La
                 <br /> 
                 <span 
                 className="text-red-600"
                 >
                 Contabilidad
                 </span>
                 <br />
                 Que Se 
                 <span className="text-red-600"> Adapta
                 </span>
                 <br />
                 A Ti
              </h1>
          </div>
    </div>

  );
};

export default Hero