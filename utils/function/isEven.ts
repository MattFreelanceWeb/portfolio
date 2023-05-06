export const isEven = (number: number) => {
    if (number <= 0) {
      return true;
    }
    return number % 2 === 0;
  };