import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        ¿Tienes algún proyecto en mente? <br className='sm:block hidden' />
        Construyamos algo juntos!
      </p>
      <Link to='/contact' className='btn'>
        Contacto
      </Link>
    </section>
  );
};

export default CTA;