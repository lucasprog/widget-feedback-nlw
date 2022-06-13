import { CheckSquare } from "phosphor-react";
import { CloseButton } from "../../CloseButton";
import successImageUrl from "../../../assets/success.svg";

interface FeedbackSuccessStepProps{ 
  onFeedbackRestartRequested : () => void
}

export function FeedbackSuccessStep({onFeedbackRestartRequested} : FeedbackSuccessStepProps){
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <section className="flex flex-col items-center py-10">
        <img src={successImageUrl} alt="Ícone de Sucesso" />
        <span className="text-xl mt-2">
          Agradecemos o feedback!
        </span>
        <button 
          type="button"
          onClick={onFeedbackRestartRequested}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-orange-900 transition-colors disabled:opacity-50 disabled:bg-brand-500">
            Quero enviar outro
        </button>
      </section>
    </>
  )
}