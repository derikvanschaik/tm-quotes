import { useEffect, useRef , useState} from 'react';
import Quote from '../components/quote';

export default function QuoteModal({ modalQuote, background, isOpen, onClose}){
    const modal = useRef(null);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(()=>{
        setShowBackground(false);

        if(!modal && !modal.current){
            return;
        }
        if(isOpen){
            modal.current.showModal();
        }else{
            modal.current.close();
        }
    }, [isOpen])

    return (
        <dialog ref={modal}>
        <button onClick={() => setShowBackground(!showBackground)}>{showBackground? 'Hide' : 'Include'} background image</button>
        { 
        modalQuote &&
        <Quote 
          quote={modalQuote.quote} 
          author={modalQuote.author}
          background={showBackground? background: null}
          />
        }
        <button onClick={onClose}>Dismiss</button>
    </dialog>
    )
}