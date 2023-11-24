import experiencia from "../assets/icons/experiencia.svg"
import calidad from "../assets/icons/calidad.svg"
import practico from "../assets/icons/practico.svg"

const ServicesCard = () => {
  return (
    <section className="grid grid-cols-3 grid-rows-3 w-full mt-[20rem] h-[120vh] xxl:grid-cols-3 xxl:grid-rows-1 xxl:h-[50vh]">
        <div className="grid col-start-2 row-start-1 items-center justify-center w-full h-[30vh] xxl:col-start-1 xxl:row-start-1 xxl:justify-center xxl:items-center">
            <div>
                  <div className= "w-[340px] h-[175px] bg-neutral-100 shadow-2xl rounded-xl py-4 px-4">
                          <div className= "w-[45px] h-[45px] flex justify-center items-center  bg-red-600 rounded-full">
                                  <img
                                      src={experiencia}
                                      width={35}
                                      height={35}
                                      className="ml-[.2rem]" 
                                  />
                          </div>
                          <div className="mt-3 font-montserrat text-[20px] font-bold text-red-600">Experiencia</div>
                          <h3 className="mt-1 font-montserrat text-[15px] font-semibold">Tranquilo, tenemos más de 25 años de experiencia</h3>
                  </div>
              </div>

        </div>
        <div className="grid col-start-2 row-start-2 items-center justify-center h-[30vh] xxl:col-start-2 xxl:row-start-1 xxl:justify-center xxl:items-center">
          <div>
              <div className="w-[340px] h-[175px] bg-neutral-100 shadow-2xl rounded-xl py-4 px-4">
                  <div className= "w-[45px] h-[45px] flex justify-center items-center bg-red-600 rounded-full">
                      <img
                            src={calidad}
                            width={35}
                            height={35} 
                      />
                  </div>
                  <div className="mt-3 font-montserrat text-[20px] font-bold text-red-600">Calidad</div>
                  <h3 className="mt-1 font-montserrat text-[15px] font-semibold">Tenemos una amplia cartera de clientes satisfechos</h3>                  
              </div>
          </div>
        </div>
        <div className="grid col-start-2 row-start-3 items-center justify-center h-[30vh] xxl:col-start-3 xxl:row-start-1">
          <div className="w-[340px] h-[175px] bg-neutral-100 shadow-2xl rounded-xl py-4 px-4">
              <div>
                              <div className= "w-[45px] h-[45px] flex justify-center items-center bg-red-600 rounded-full">
                                      <img
                                          src={practico}
                                          width={35}
                                          height={35} 
                                      />
                              </div>
                              <div className="mt-3 font-montserrat text-[20px] font-bold text-red-600">Prácticidad</div>
                              <h3 className="mt-1 font-montserrat text-[15px] font-semibold">¡Solo da click!, nosotros hacemos el resto</h3>   
              </div>
          </div>
        </div>
    </section>
  )
}

export default ServicesCard
