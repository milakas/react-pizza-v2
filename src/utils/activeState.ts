export const setActiveIndex = <T>(
  setState: React.Dispatch<React.SetStateAction<T>>,
  index: T
): void => {
  setState(index);
};

/**
 *
 * @returns "active" class if the first value is equal to the second value, otherwise an empty string
 */
export const getActiveClass = <T>(firstValue: T, secondValue: T): string => {
  return firstValue === secondValue ? 'active' : '';
};
