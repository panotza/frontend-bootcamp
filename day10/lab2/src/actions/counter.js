export const COUNTER_INCREMENT = 'INCREMENT';

export function incrementBy(number) {
  return { type: COUNTER_INCREMENT, amount: number };
 }
