import papeles from "../assets/images/papeles.jpg"

const WhyUs = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-5 w-full h-[120vh] text-center mt-[4rem] xxl:grid-cols-2 xxl:grid-rows-5">
       <div className="grid items-center justify-center col-start-1 row-start-1 xxl:col-start-2 xxl:row-start-2">
          <h2 className="font-montserrat text-[40px] text-red-600 font-bold xxl:text-[50px]">¿Porqué Elegirnos?</h2>
       </div>
       <div className="grid m-[1rem] items-center justify-center col-start-1 row-start-2 font-semibold xxl:col-start-2 xxl:row-start-3">
          <p className="font-montserrat text-[20px] xxl:text-[30px]">¡Estamos siempre actualizados!, por lo que siempre tendremos una respuesta para ti</p>
       </div>
       <div className="grid m-[1rem] items-center justify-center col-start-1 row-start-3 font-semibold xxl:col-start-2 xxl:row-start-4">
          <p className="font-montserrat text-[20px] xxl:text-[30px]">Nos adaptamos al presupuesto y necesidades de nuestros clientes</p>
       </div>
       <div className="grid m-[1rem] items-center justify-center col-start-1 row-start-4 font-semibold xxl:col-start-2 xxl:row-start-5">
          <p className="font-montserrat text-[20px] xxl:text-[30px]">¡Nunca ha sido tan fácil!, con un solo click tu contabilidad estará resuelta</p>
       </div>
       <div className="grid col-start-1 row-start-5 justify-center items-center mt-[4rem] m-[1rem] xxl:col-start-1 xxl:row-start-2">      
       <img 
          src={papeles}
          width={300}
          heigh={400}
          className="rounded-lg xxl:w-[500px] xxl:h-[800px]"
       />
      </div>

    </div>
  )
}

export default WhyUs