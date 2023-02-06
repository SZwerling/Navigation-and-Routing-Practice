import ReactDOM from "react-dom";

function Modal({onClose}) {
   return ReactDOM.createPortal(
      <div>
         <div onClick={onClose} className="absolute inset-0 bg-gray-300 opacity-80"></div>
         <div className="absolute inset-40 p-10 bg-white">I'm a modal</div>
      </div>,
      document.querySelector('.modal-container')
   );
}

export default Modal;


// create portal takes two arguments, the jsx, and where we want to put is in the index.html
// we added a div at the end of the index.html with class of modal-container
// We need to do this for the modal becuase if any parent container has position other than static, it will be 
// contained within that parent container and not take up the entire screen