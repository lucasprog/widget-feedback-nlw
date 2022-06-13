export const feedbackTypes = {
  BUG   : {
    title : 'Problema',
    icon : ""
  },
  IDEA  : {
    title : 'Ideia',
    icon : ""
  },
  OTHER : {
    title : 'Outro',
    icon : ""
  },
}

export type FeedbackType = keyof typeof feedbackTypes;