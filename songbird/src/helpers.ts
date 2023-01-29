export const playAudio = (soundSrc: string): void => {
  const audio = new Audio();
  audio.src = soundSrc;
  audio.currentTime = 0;
  audio.play();
};
