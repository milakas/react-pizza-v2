/**
 * Sets the active index of the state
 */
export const setActiveIndex = <T>(
  setState: React.Dispatch<React.SetStateAction<T>>,
  index: T
): void => {
  setState(index);
};

/**
 * Returns "active" class if the state is equal to the index, otherwise an empty string
 */
export const getActiveClass = (state: number, index: number): string => {
  return state === index ? 'active' : '';
};
