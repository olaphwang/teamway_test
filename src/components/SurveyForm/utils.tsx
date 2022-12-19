export const uniqueIdGenerator = (questionWord: string, answer: string, index: number) => {
  return questionWord + '_' + answer + '_' + index + '_' + Math.floor(Math.random() * 1000);
};
