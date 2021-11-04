export interface Choice {
    statement: string;
    isAnswer: boolean;
  }
  
  export interface Quiz {
    questions: string[];
    choices: Choice[]
    explanation: string;
  };

export const QUIZ_DATA: Quiz[] = [
    {
      questions: [
          'メールで連絡が来た際',
          '返信する時間帯はいつでしょう?'
      ],
      choices: [
        {
          statement: '選択肢1',
          isAnswer: false
        },
        {
          statement: '選択肢2(答え)',
          isAnswer: true
        },
        {
          statement: '選択肢3',
          isAnswer: false
        },
        {
          statement: '選択肢4',
          isAnswer: false
        }
      ],
      explanation: '説明文'
    },
];