// Save the bundled-in key to process.env
console.log('saving WORKOS_API_KEY');
process.env.WORKOS_API_KEY = process.env.WORKOS_API_KEY;
const foo = process;
const bar = foo.env;
const baz = bar.WORKOS_API_KEY;
console.log(!!baz);
