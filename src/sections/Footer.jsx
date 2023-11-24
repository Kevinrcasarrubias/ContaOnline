import  footerLogo  from "../assets/icons/footer-logo.svg";
import facebook from '../assets/icons/facebook.svg';
import whatsapp from '../assets/icons/whatsapp.svg'

const Footer = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-7 w-full h-[60vh] bg-[#F4DAAD] xl:grid-cols-4 xl:grid-rows-3 xl:h-[50vh]">
         <a 
             className="grid col-start-1 row-start-1 justify-center items-center xl:col-start-1 xxl:row-start-1 xl:items-end xl:mt-[4.3rem]"
                 
         >
            <img
               src={footerLogo}
               alt="logo"
               className="w-[200px] h-[100px]"
               href="/"
            />
         </a>
         <div className="grid col-start-1 row-start-2 justify-center items-center  xl:col-start-2 xl:row-start-1 xl:items-end">
            <a 
               className="font-montserrat font-semibold text-[20px] hover:text-red-600"
               href="#nosotros"   
            >
              ¿Quienes Somos?
            </a>
         </div>
         <div className="grid col-start-1 row-start-3 justify-center items-center  xl:col-start-3 xl:row-start-1 xl:items-end">
            <a 
               className="font-montserrat font-semibold text-[20px] hover:text-red-600"
               href="#servicios"
            >
               Servicios
            </a>
         </div>
         <div className="grid col-start-1 row-start-4 justify-center items-center xl:col-start-4 xl:row-start-1 xl:items-end xl:mt-[7rem]">
            <p className="font-montserrat font-semibold text-[20px] text-center">
               ¡Llámanos!<br />
               (+52) 55-1585-4006<br />
               (+52) 55-2622-5094

            </p>
         </div>
         <div className="grid col-start-1 row-start-5 justify-center items-center xl:col-start-3 xl:row-start-2 xl:justify-center xl:items-end xl:mr-[28rem] xl:mb-[2rem]">
            <div className=" w-[70vw] h-[.2vh] bg-black">
            </div>
         </div>
         <div className="grid col-start-1 row-start-6 justify-center items-start mr-[8rem] xl:col-start-2 xl:row-start-3 xl:justify-center xl:items-start">
            <a 
               className="grid justify-center items-center rounded-full bg-red-600 w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] hover:bg-slate-800"
               href="https://facebook.com/contaOnlineparatunegocio"   
            >
                  <img
                  src={facebook}
                  alt="facebook"
                  width={25}
                  height={25}
                  className="hover:pointer"
                  />
            </a>
         </div>
         <div className="grid col-start-1 row-start-6 justify-center items-start ml-[8rem] xl:col-start-3 xl:row-start-3 xl:justify-center xl:items-start">
            <a 
               className="grid justify-center items-center rounded-full bg-red-600 w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] hover:bg-slate-800"
               href="https://api.whatsapp.com/send/?phone=5215515854006&text=Hola+%2AContaOnline%2A.+Necesito+m%C3%A1s+informaci%C3%B3n&type=phone_number&app_absent=0"   
            >
                  <img
                  src={whatsapp}
                  alt="WhatsApp"
                  width={25}
                  height={25}
                  className="hover:pointer"

                  />
            </a>
         </div>
         <div className="grid col-start-1 row-start-7 items-end justify-end mr-[1rem] xl:col-start-4 xl:row-start-3 xl:mr-[2rem]">
            <p className="font-montserrat font-semibold text-[15px] xl:text-[20px]">
               Derechos Reservados
            </p>
         </div>
    </div>
  )
}

export default Footer