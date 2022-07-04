class MySum {
  constructor(initialValue = 42) {
    this.sum = initialValue;
  }

  add(value) {
    this.sum += value;
    return this
  }
}

const sum1 = new MySum()
console.log(sum1.add(8).add(10).add(1))

const sum2 = new MySum()
console.log(sum2.add(8).add(10).add(1).sum)
