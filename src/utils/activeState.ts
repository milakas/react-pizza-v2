export const setActiveIndex = <T>(
  setState: React.Dispatch<React.SetStateAction<T>>,
  index: T
): void => {
  setState(index);
};

export const getActiveClass = <T>(value: T, targetValueOrIndex: T): string => {
  return value === targetValueOrIndex ? 'active' : '';
};
