export const checkNull = (value?: string | null): string => {
  if (!value) {
    return '';
  }

  return value;
};

export const checkNumNull = (value?: number | null): number => {
  if (!value) {
    return 0;
  }

  return value;
};
