import './Description.css'
import picture from '../../images/description.png'


const Description = () => {

  const data = [
    {
      id: 1,
      title: 'полный проект',
      price: '1000р',
      img: picture
    },
    {
      id: 2,
      title: 'полный проект',
      price: '1000р',
      img: picture
    },
    {
      id: 3,
      title: 'полный проект',
      price: '1000р',
      img: picture
    },
    {
      id: 4,
      title: 'полный проект',
      price: '1000р',
      img: picture
    },
    {
      id: 5,
      title: 'полный проект',
      price: '1000р',
      img: picture
    },
    {
      id: 6,
      title: 'полный проект',
      price: '1000р',
      img: picture
    },
  ]

  const descriptionText = [
    {
      id: 1,
      text: '- Мониторинг цен для выявления лучшего сочетания цена/качество/сроки по выбранным позициям;'
    },
    {
      id: 2,
      text: '- Итоговая подборка с указанием цен и компаний-поставщиков по каждому виду материалов и оборудования;'
    },
    {
      id: 3,
      text: '- Предложение нескольких вариантов позиций заказываемых материалов, освещения, сантехники для принятия решения Заказчиком о покупке;'
    },
    {
      id: 4,
      text: '- Поиск изготовителей индивидуальных заказных позиций поиск и замена снятых с производства позиций, без нарушения концепции дизайн проекта;'
    },
    {
      id: 5,
      text: '- Консультирование изготовителей индивидуальных заказных позиций;'
    },
    {
      id: 6,
      text: '- Подборка коммерческих предложений;'
    },
    {
      id: 7,
      text: '- Составление и контроль предполагаемого графика закупок/поставок/ платежей по договорам/установок;'
    },
    {
      id: 8,
      text: '- Осуществление помощи в процессах оплаты, замен и возвратов;'
    },
    {
      id: 9,
      text: '- Ежемесячный отчет по результатам работы и подписание актов принятых работ заказчиком.'
    },
    {
      id: 10,
      text: '+ все что входит в пакет «Авторский надзор»'
    },
  ]

  return (
    <section className='description'>
      <div className='description__container'>
        <div className='description__nav'></div>
        <div className='description__main'>
          <div className='description__placeCards'>
            {
              data.map((item) =>
                <div key={item.id} className='description__card'>
                  <img src={item.img} alt='pic'/>
                  <div className='description__title'>{item.title}</div>
                  <div className='description__subtitle'>{item.price}</div>
                </div>
              )
            }
          </div>
          <div className='description__equipment'>
            <p className='description__equipment__title'>Комплектация</p>
            <p className='description__equipment__price'>1400₽/м2</p>
              {descriptionText.map((item) => <p key={item.id} className='description__equipment__subtitle'>{item.text}</p>)}
          </div>
        </div>
        <div className='description__void'></div>
      </div>
    </section>
  )
}

export default Description;