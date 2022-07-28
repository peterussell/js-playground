const doTimeout = (shouldFail: boolean = false): Promise<number> => {
  return new Promise((onResolve: any, onReject: any) => {
    setTimeout(() => {
      shouldFail ? onReject(-1) : onResolve(42), 2000
    });
  })
};

export const runTimerSuccess = (): Promise<number> => { return doTimeout(); };
export const runTimerFailure = (): Promise<number> => { return doTimeout(true); };
