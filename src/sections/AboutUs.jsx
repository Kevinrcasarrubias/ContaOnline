
const AboutUs = () => {
  return (
    <section 
        className="grid grid-cols-1 grid-rows-4 w-full h-screen mt-[4rem]"
        id="nosotros"
        > 
        <div className=" col-start-1 row-start-1 w-full">
            <h1 className="grid h-full font-montserrat font-bold text-[30px] items-center justify-center xs:text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[55px] 2xl:text-[60px] 3xl:text-[70px]" > 
                ¿Quienes Somos?
            </h1>
        </div>
        <div className="grid col-start-1 row-start-2  justify-center items-center w-full h-fit">
            <h1 className="grid font-palanquin text-[30px] font-semibold text-center justify-center m-[1rem] xs:text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px] 2xl:text-[55px]">
                    Somos un equipo de contadores especializados<br />en diversos 
                    sectores administrativos,<br /> mercantiles y gubernamentales.
            </h1>
        </div>
        <div className="grid col-start-1 row-start-3 items-center justify-center w-full h-fit mt-[12rem]">
             <a
                 className="grid font-montserrat text-[20px] sm:text-[25px] w-[200px] h-[70px] sm:w-[250px] sm:h-[82px] justify-center items-center  bg-red-600 hover:bg-red-800 rounded-xl text-white"
                 href="#contactanos"
             >
                  Contáctanos
              </a> 
        </div>
        <div className="grid col-start-1 row-start-4 items-center justify-center w-full h-full mt-[12rem]">
                <h1 className="font-montserrat font-bold text-[30px] xs:text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px] 2xl:text-[55px]  3xl:text-[70px] text-center">
                        Acéptalo, la Contabilidad
                        <br />
                        <span className="text-red-600">
                          No es lo Tuyo,
                        </span>
                        <br />
                        Déjala en Nuestras Manos
                </h1>
          </div>

    </section>
  )
}

export default AboutUs