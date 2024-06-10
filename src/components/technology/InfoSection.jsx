export default function InfoSection({ selectedTech, description }) {
    return (
      <section className='technology__info-section'>
        <h2 className='technology__sub-heading'> We are the experts to help you grow</h2>
        <h2 className='technology__name'>{selectedTech}</h2>
        <p className='technology__description'>{description}</p>
      </section>
    );
  }
  