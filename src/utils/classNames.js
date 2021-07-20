const classNames = (...args) => {
  const hasOwn = Object.prototype.hasOwnProperty;
  const argsLength = args.length;
  const classes = [];

  for (let i = 0; i < argsLength; i++) {
    const arg = args[i];

    if (!arg) {
      continue;
    }

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        const inner = classNames.apply(null, arg);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (argType === 'object') {
      if (arg.toString !== Object.prototype.toString) {
        classes.push(arg.toString());
      } else {
        for (const key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }
  }

  return classes.join(' ');
}

export default classNames;
