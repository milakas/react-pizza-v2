export const setActiveIndex = <T>(
  setState: React.Dispatch<React.SetStateAction<T>>,
  index: T
): void => {
  setState(index);
};

export const getActiveClass = (state: number, index: number): string => {
  return state === index ? 'active' : '';
};
