export const classNames = (...classes: (string | undefined | boolean)[]): string => classes.filter(Boolean).join(' ')
