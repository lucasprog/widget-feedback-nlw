import bugImageUrl from './assets/bug.svg';
import ideaImageUrl from './assets/idea.svg';
import thoughtImageUrl from './assets/thought.svg';

export const feedbackTypes = {
  BUG   : {
    title : 'Problema',
    image : {
      source : bugImageUrl,
      alt : 'Ícone de Problema'
    }
  },
  IDEA  : {
    title : 'Ideia',
    image : {
      source : ideaImageUrl,
      alt : 'Ícone de Ideia'
    }
  },
  OTHER : {
    title : 'Outro',
    image : {
      source : thoughtImageUrl,
      alt : 'Ícone de Outro'
    }
  },
}

export type FeedbackType = keyof typeof feedbackTypes;