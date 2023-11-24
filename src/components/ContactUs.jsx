import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lzzgi4c', 'template_gosq9xj', form.current, 'y_ZogPNLA7PThos-u')
      .then((result) => {
          console.log(result.text);
          alert("Mensaje Enviado")
          e.target.reset();
          
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <form 
         className="grid grid-cols-1 grid-rows-6 w-full h-[130vh] mt-[20rem] space-y-1 xxl:grid-cols-2 xxl:grid-rows-4 xxl:h-[80vh] xxl:mt-[6rem] xxl:mb-[5rem]"
         id="contactanos"
         ref={form}
         onSubmit={sendEmail}
         >
       <h2 className="grid m-[1rem] mt-[6rem] col-start-1 row-start-1 font-montserrat text-[40px] justify-center items-center font-bold text-red-600 xxl:col-start-1 xxl:col-span-2 xxl:justify-center xxl:text-[60px]">¡Contáctanos!</h2>
       <div className="grid col-start-1 row-start-2 items-start justify-center xxl:col-start-1 xxl:grid-start-2">
           <label  className="font-montserrat text-[15px] font-semibold mt-[4rem] justify-center text-red-600 xxl:text-[25px]">Nombre Completo</label>
           <input
               name="user_name"
               type="text"
               id="nombre"
               required
               className="text-black border border-[#33353f] font-montserrat rounded-lg w-[300px] h-[35px] xxl:w-[400px] text-[15px] mb-[4rem] p-2.5"
           >
           </input>
       </div>
       <div className="grid col-start-1 row-start-3 items-center justify-center xxl:col-start-1 xxl:row-start-3">
           <label className="font-montserrat text-[15px] font-semibold mt-[4rem] justify-center text-red-600 xxl:text-[25px]">Email</label>
           <input
             name="user_email"
             type="email"
             id="email"
             required
             className="text-black border border-[#33353f] font-montserrat rounded-lg w-[300px] h-[35px] xxl:w-[400px]  text-[15px] mb-[4rem] p-2.5"
            >           
            </input>
       </div>
       <div className="grid col-start-1 row-start-4 items-center justify-center xxl:col-start-2 xxl:row-start-2">
           <label className="font-montserrat text-[15px] font-semibold mt-[4rem] justify-center text-red-600 xxl:text-[25px]">Teléfono</label>
           <input
              name="user_phone"
              type="tel"
              id="telefono"
              required
              className="text-black border border-[#33353f] font-montserrat rounded-lg w-[300px] h-[35px] xxl:w-[400px]  text-[15px] mb-[4rem] p-2.5"
           >
           </input>
       </div>
       <div className="grid col-start-1 row-start-5 items-center justify-center xxl:col-start-2 xxl:row-start-3">
           <label className="font-montserrat text-[15px] font-semibold mt-[4rem] justify-center text-red-600 xxl:text-[25px]">Ecríbenos un mensaje</label>
           <textarea
              name="message"
              id="mensaje"
              className="text-black border border-[#33353f] font-montserrat rounded-lg w-[300px] h-[120px] xxl:w-[400px]  xxl:h-[100px] text-[15px] mb-[4rem] p-2.5"
           />
       </div>
       <div className="grid col-start-1 row-start-6 items-center justify-center  xxl:col-start-1 xxl:col-span-2 xxl:row-start-4 xxl:items-center">
          <button 
                 className="font-montserrat text-[20px] w-[140px] h-[50px] mt-[3rem] mb-[2rem] xxl:w-[240px] xxl:h-[70px] xxl:text-[25px] xxl:mt-[7rem] text-white rounded-lg bg-red-600 hover:bg-red-800 hover:pointer"
                 type="submit"
          >
           Enviar
          </button>
       </div>
      
    </form>
  )
}

export default ContactUs