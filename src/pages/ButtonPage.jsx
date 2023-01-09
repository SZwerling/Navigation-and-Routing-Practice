import Button from "../components/Button";
import { FaBeer, FaRegGem } from 'react-icons/fa';

function ButtonPage() {
   const onClick = () => {console.log('clicked')}
   const oneClick = () => console.log('oneoneclickclick')
   
   return (
      <div>
         <div>
            <Button primary className={'mb-5 hover:bg-sky-700'} onClick={onClick}><FaBeer />Beer</Button>
         </div>
         <div>
            <Button secondary rounded onClick={oneClick}><FaRegGem/>Diamonds</Button>
         </div>
         <div>
            <Button warning>Exit</Button>
         </div>
         <div>
            <Button success outline>Free</Button>
         </div>
         <div>
            <Button danger>Love</Button>
         </div>
         <div>
            <Button outline primary rounded>Explore</Button>
         </div>
      </div>
   );
}

export default ButtonPage;
