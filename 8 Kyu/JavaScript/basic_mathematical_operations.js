function basicOp(operation, value1, value2) {
    switch (operation) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        if (value2 === 0) {
          throw new Error("Cannot divide by zero");
        }
        return value1 / value2;
      default:
        throw new Error("Invalid operation: " + operation);
    }
}