export interface Choice {
  statement: string;
  isAnswer: boolean;
}

export interface Quiz {
  questions: string[];
  choices: Choice[];
  explanation: string;
}

export const QUIZ_DATA: Quiz[] = [
  {
    questions: ['メールで連絡が来た際', '返信する時間帯はいつでしょう?'],
    choices: [
      {
        statement: 'その企業の就業時間前',
        isAnswer: false,
      },
      {
        statement: 'その企業の就業時間中',
        isAnswer: true,
      },
      {
        statement: 'その企業の就業時間後',
        isAnswer: false,
      },
      {
        statement: 'お昼時',
        isAnswer: false,
      },
    ],
    explanation:
      '返信する時間帯は、応募企業の就業時間内に送信するのがベター。在職中に転職活動をしていたり、就活中でも授業があるなど「平日の日中にはなかなか返信できない」という人もいるかもしれませんが、あまり遅い時間にメールを送ると好ましく思わない採用担当者がいたり、「生活リズムが不規則な人なのだろうか」と、いらぬ憶測を呼び兼ねません。メールの確認が深夜になってしまった場合は時間を指定して送信する「予約機能」などを使って、翌日の午前中に返信すると良いでしょう。',
  },
  {
    questions: ['面接室に入室する際', '正しいノックの仕方はどれでしょう?'],
    choices: [
      {
        statement: '選択肢1',
        isAnswer: false,
      },
      {
        statement: '選択肢2(答え)',
        isAnswer: true,
      },
      {
        statement: '選択肢3',
        isAnswer: false,
      },
      {
        statement: '選択肢4',
        isAnswer: false,
      },
    ],
    explanation: '説明文2',
  },
  {
    questions: ['面接会場に到着する時間は何分前が良いでしょう'],
    choices: [
      {
        statement: '選択肢1',
        isAnswer: false,
      },
      {
        statement: '選択肢2(答え)',
        isAnswer: true,
      },
      {
        statement: '選択肢3',
        isAnswer: false,
      },
      {
        statement: '選択肢4',
        isAnswer: false,
      },
    ],
    explanation: '説明文3',
  },
];
