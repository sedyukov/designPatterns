class MyMath {
  constructor(initialValue) {
    this.num = initialValue;
  }

  square() {
    return this.num ** 2;
  }

  cube() {
    return this.num ** 3;
  }
}

class Command {
  constructor(target) {
    this.target = target;
    this.commandsExecuted = []
  }

  execute(command) {
    this.commandsExecuted.push(command)
    return this.target[command]()
  }
}

const x = new Command(new MyMath(2))

console.log(x.execute('square'))
console.log(x.execute('cube'))

console.log(x.commandsExecuted)