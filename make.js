function make(...arg) {
  if (arg[0] instanceof Function) {
    const args = make.args;
    make.args = [];

    return args.reduce((acc, cur) => arg[0](acc, cur));
  }

  if (make.args) {
    make.args = [...make.args, ...arg];
  } else {
    make.args = arg;
  }

  return make;
}
