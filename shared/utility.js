export function handleModifyAnswerVotes(answers, answerId, increment) {
  return answers.map((answer) =>
    answer.answerId === answerId
      ? { ...answer, upvotes: answer.upvotes + increment }
      : answer
  );
}
