// Save the bundled-in key to process.env
console.log('saving WORKOS_API_KEY');
const foo = process;
const bar = foo.env;
const baz = bar.WORKOS_API_KEY;
console.log(!!baz);
process.env.WORKOS_API_KEY = process.env.WORKOS_API_KEY;
const foo2 = process;
const bar2 = foo2.env;
const baz2 = bar2.WORKOS_API_KEY;
console.log(!!baz2);
