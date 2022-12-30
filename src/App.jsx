import Button from "./Button";

function App() {
   return (
      <div>
         <div>
            <Button primary>Buy Now!</Button>
         </div>
         <div>
            <Button secondary rounded>Save</Button>
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
