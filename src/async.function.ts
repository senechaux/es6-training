export type Callback = (error?: string, result?: string) => void;

export const asyncFunction = (
  timeout: number = 0,
  error: boolean = false,
  callback: Callback = () => {
  }
) =>
  setTimeout(
    () => callback(error ? `error ${timeout}` : undefined, !error ? `success ${timeout}` : undefined),
    timeout
  )
