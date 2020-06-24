export default text => {
  const shortMessage = text.length >= 150 ? `${text.substring(0, 80).split('\n')[0]}...` : text.split('\n')[0];

  return shortMessage;
};

export const smallTitle = text => (text.length >= 150 ? `${text.substring(0, 30).split('\n')[0]}...` : text.split('\n')[0]);
