import ganancias from "../assets/images/ganancias.png"

const Services = () => {
  return (
  <div 
     className="grid grid-cols-1 grid-rows-3 w-full h-[160vh] xs:h-[140vh] bg-[#F4DAAD] xxl:grid-cols-2 xxl:grid-rows-1 xxl:h-[80vh]"
     id="servicios"
     >
      <div className="grid justify-center items-start text-center w-full mt-[7rem] col-start-1 row-start-1  xxl:justify-start xxl:items-start xxl:mt-[5rem]  xxl:ml-[1.8rem]">
          <h3 className="xxl:col-start-1 xxl:row-start-1 xxl:text-[45px] font-montserrat text-[45px]  text-red-600 font-bold">Nuestros Servicios</h3>
      </div>
      <div className="grid m-1 mt-[19rem] xs:mb-[15px] col-start-1 row-start-1 justify-center items-end text-center xxl:col-start-1 xxl:row-start-1 xxl:items-start xxl:mt-[11rem] xxl:ml-[2rem]">
          <ul className="font-montserrat text-black text-[25px] font-semibold xxl:text-[30px] xxl:text-left">
              <li>Auditorías ante el SAT y el IMSS</li>
              <br />
              <li>Incorporación Fiscal y Honorarios</li>
              <br />
              <li>Firma y Facturas Electrónicas</li>
              <br />
              <li>Trámites y Asesoría ante el SAT</li>
              <br />
              <li>Manejo de impuestos, ISR,IEPS,IVA,DIOT e Impuestos Estatales</li>
          </ul>
      </div>
      <div className="grid col-start-1 row-start-3 mt-[4rem] xs:mb-[12rem] justify-center items-start xxl:col-start-2 xxl:row-start-1 xxl:items-center xxl:mt-[9rem]">
              <img 
                src={ganancias}
                alt="Ganacias Icono"
                className="xxl:w-[450px] xxl:h-[450px]"
                width={270}
                height={270}
              />
      </div>
  </div>
  )
}

export default Services