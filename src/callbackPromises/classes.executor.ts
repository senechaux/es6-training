class Executor {
  exec(func: (...args: any) => void, ...args: any[]) {
    console.log('EXEC WITH SERVICE EXECUTOR')
    func(...args)
  }
}

export const executor = new Executor()
