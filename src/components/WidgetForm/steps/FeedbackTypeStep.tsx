import { useState } from 'react';
import { feedbackTypes, FeedbackType } from '../../../FeedbackTypes'
import { CloseButton } from '../../CloseButton';

interface FeedbackTypeStepProps{
  onFeedbackTYpeChanged : (type: FeedbackType) => void
}

export function FeedbackTypeStep({ onFeedbackTYpeChanged} : FeedbackTypeStepProps){

  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <section className="flex py-8 gap-2 w-full">
        { Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none justify-center"
              type="button"
              onClick={() => onFeedbackTYpeChanged(key as FeedbackType)}
            >
              <img className="m-0-auto" src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        }) }
      </section>
    </>
  );
}