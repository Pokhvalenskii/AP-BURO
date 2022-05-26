import './Triggers.css';
import image from '../../images/paint-roller.svg'
const Triggers = (props) => {

  let hidden = props.positionY >= 2500 ? 'triggers_hidden' : ''
  let showing = props.positionY >= 1300 && props.positionY <= 2500 ? 'triggers_showing' : ''

  const triggerData = [
    {
      id: 1,
      title: 'LOREM IPSUM',
      subtitle: 'Lorem ipsum dolor sit amet, conctetur adipiscing elit.',
      image: image
    },
    {
      id: 2,
      title: 'LOREM IPSUM',
      subtitle: 'Lorem ipsum dolor sit amet, conctetur adipiscing elit.',
      image: image
    },
    {
      id: 3,
      title: 'LOREM IPSUM',
      subtitle: 'Lorem ipsum dolor sit amet, conctetur adipiscing elit.',
      image: image
    }
  ]

  return (
    <section className={`triggers ${hidden} ${showing}`} id='slide-3'>
      {
        triggerData.map((item) =>
          <div key={item.id} className='triggers__item'>
            <div className='triggers__img-wrapper'>
              <img src={item.image} alt={item.title} />
            </div>
            <div className='triggers__wrapper'>
              <div className='triggers__title'>{item.title}</div>
              <div className='triggers__subtitle'>{item.subtitle}</div>
            </div>
          </div>
        )
      }
    </section>
  )
}

export default Triggers;