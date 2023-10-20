export const formatTime = time => {
  if (time) {
    // const format = {
    //   PT: '',
    //   H: ' ч',
    //   M: ' мин',
    //   S: ' сек',
    // }

    const formatedTime = time
      .replace('PT', '')
      .replace('H', ' ч ')
      .replace('M', ' мин ')
      .replace('S', ' сек');

    return formatedTime;
  }

  return;
}