export interface ResultComments {
  resultComment: string;
  statement: number;
}

export const RESULT_COMMENT_DATA: ResultComments[] = [
  {
    resultComment: 'どんどんクイズを解いていこう！',
    statement: 0,
  },
  {
    resultComment: 'もう少し頑張ろう！',
    statement: 10,
  },
  {
    resultComment: '50%を超えたね！',
    statement: 50,
  },
  {
    resultComment: '100%達成だ！おめでとう！',
    statement: 100,
  },
];
