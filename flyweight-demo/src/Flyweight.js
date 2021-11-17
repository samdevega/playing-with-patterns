class FlyweightFibonacci {
  limit
  fibonacciStore
  extrinsicProperty

  constructor(limit = 10) {
    this.limit = limit
    this.fibonacciStore = this.operation()
  }

  operation(extrinsicProperty = '') {
    this.extrinsicProperty = extrinsicProperty
  	const fibo = [0, 1]

	  for (let i = 2; i <= this.limit; i++) {
		  fibo.push(fibo[i - 1] + fibo[i - 2])
	  }

    return fibo
  }
}

class FlyweightFactory {
  flyweights // [limit: FlyweightFibonacci, limit: FlyweightFibonacci ]

  constructor() {
    this.flyweights = []
  }

  getFlyweight(intrinsicLimit) {
    return this.flyweights[intrinsicLimit] ??= new FlyweightFibonacci(intrinsicLimit)
  }
}

const factory = new FlyweightFactory()
const fibo1 = factory.getFlyweight(1)
const fibo2 = factory.getFlyweight(2)
const fibo3 = factory.getFlyweight(2)

fibo1.operation('meh')
fibo2.operation('foo')
console.info('fibo2 BEFORE fibo3.operation: ', JSON.stringify(fibo2))
console.info('fibo3 BEFORE fibo3.operation: ', JSON.stringify(fibo3))
fibo3.operation('bar')
console.info('fibo2 AFTER fibo3.operation: ', JSON.stringify(fibo2))
console.info('fibo3 AFTER fibo3.operation: ', JSON.stringify(fibo3))
console.info('Factory:')
console.table(factory.flyweights)