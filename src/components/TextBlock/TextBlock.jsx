import './TextBlock.css';

const TextBlock = (props) => {

  let hidden = props.positionY >= 3800 ? 'textBlock_hidden' : ''

  return (
    <section className={`textBlock ${hidden}`}>
      <h2 className='textBlock__title'>Lorem, ipsum.</h2>
      <p className='textBlock__subtitle'>
        Lorem ipsum dolor sit amet, conctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco labouris nisi ut aliquip ex ea Commodo Conquat. Duis a volute dolore dolor conquat. velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, conctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco labouris nisi ut aliquip ex ea Commodo Conquat. Duis a volute dolore dolor conquat. velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, conctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco labouris nisi ut aliquip ex ea Commodo Conquat. Duis a volute dolore dolor conquat. velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </section>
  )
}

export default TextBlock;