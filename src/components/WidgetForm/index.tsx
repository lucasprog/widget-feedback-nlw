import { CloseButton } from '../CloseButton'
import { FeedbackType } from '../../FeedbackTypes'
import { useState } from 'react';
import { FeedbackTypeStep } from './steps/FeedbackTypeStep';
import { FeedbackContentStep } from './steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './steps/FeedbackSuccessStep';

export function WidgetForm(){

  const [_feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback(){
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
     
     { feedbackSent ? (
      <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
     ) : (
      <>
       {!_feedbackType ? (
          <FeedbackTypeStep onFeedbackTYpeChanged={setFeedbackType} />
        ) : (
          <FeedbackContentStep 
            feedbackType={_feedbackType}
            onFeedbackRestartRequested={handleRestartFeedback}
            onFeedbackSent={()=> setFeedbackSent(true)}/>
        )}
      </>
     )}

      <footer className="text-xs text-neutral-400">
        <span>Feito com ♥ por <a className="underline underline-offset-2" href="https://devblack.com.br">DevBlack</a></span>
      </footer>
    </div>
  );
}