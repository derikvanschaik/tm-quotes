import { useEffect, useRef , useState} from 'react';
import Quote from '../components/quote';
import backgrounds from '../utils/backgroundImages';

import Background from './background';

export default function QuoteModal({ modalQuote, isOpen, onClose}){
    const modal = useRef(null);
    const [showBackground, setShowBackground] = useState(false);
    const [activeBackground, setActiveBackground] = useState(0);
    
    useEffect(()=>{
        setShowBackground(false);
        setActiveBackground(0);

        if(!modal || !modal.current){
            return;
        }
        if(isOpen){
            modal.current.showModal();
        }else{
            modal.current.close();
        }
    }, [isOpen])

    return (
    isOpen ?
    <dialog ref={modal}>
        <a onClick={() => setShowBackground(!showBackground)}>Select Background</a>
        <Background 
            open={ showBackground } 
            activeIdx = {activeBackground}
            backgrounds = {backgrounds.map(b => b.name)}
            handleSetBackground= {setActiveBackground}/>
        { 
        modalQuote &&
        <Quote 
          quote={modalQuote.quote} 
          author={modalQuote.author}
          background={backgrounds[activeBackground].image}
          />
        }
        <button onClick={onClose}>Dismiss</button>
        <style jsx>{`
            dialog {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        `}
        </style>
    </dialog>
    :
    null
    )
}