import {api} from '../../../libs/api';
import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "../../../FeedbackTypes";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../../ScreenshotButton";
import { FormEvent, useState } from "react";
import { Loading } from '../../Loading';

interface FeedbackContentStepProps{
  feedbackType : FeedbackType,
  onFeedbackRestartRequested : () => void,
  onFeedbackSent: () => void
}

export function FeedbackContentStep({
  feedbackType, 
  onFeedbackRestartRequested,
  onFeedbackSent} : FeedbackContentStepProps){
  
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment ] = useState('')
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleSubmitFeedback(event: FormEvent){

    event.preventDefault();

    setIsSendingFeedback(true);

    const formToSend = {
      type: feedbackType,
      screenshot,
      comment
    }

    await api.post('/feedbacks',formToSend);
    setIsSendingFeedback(false);

    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button 
          type="button"
          onClick={onFeedbackRestartRequested}
          className="w-4 h-4 top-5 left-5 absolute textzinc-400 hover:text-zinc-100">
          <ArrowLeft 
          weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">{feedbackTypeInfo.title}</span>
        <CloseButton />
      </header>

      <section className="flex py-2 gap-2 w-full">
        <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
          <textarea   
            placeholder="Conte com detalhes o que esta acontecendo..."
            onChange={event => setComment(event.target.value)}/>

          <footer className="flex gap-2 mt-2">

            <ScreenshotButton 
              screenshot={screenshot}
              onScreenshotTook={setScreenshot} />

            <button
              disabled={comment.length === 0 || isSendingFeedback }
              type="submit"
              className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-orange-900 transition-colors disabled:opacity-50 disabled:bg-brand-500"
            >
              { isSendingFeedback ? <Loading /> : 'Enviar Feedback'  }
            </button>
          </footer>
        </form>  
      </section>
    </>  
  );
}