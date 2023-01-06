import Button from "./Button";
import { FaBeer, FaRegGem } from 'react-icons/fa';

function App() {
   return (
      <div>
         <div>
            <Button primary><FaBeer />Beer</Button>
         </div>
         <div>
            <Button secondary rounded><FaRegGem/>Diamonds</Button>
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

export default App;
