export const getValue = (plan: any, item: string) => {
    if (item === 'Keywords') {
      return plan.keywords;
    }
    return plan[item];
  };