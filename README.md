# A Vite Bug Reproduction

Ideally b would not be imported from c when c is a worker, however this doesn't seem to happen. This means that in firefox, we get `SyntaxError: import declarations may only appear at top level of a module`. To test this bug run `pnpm i` and then `pnpm run build` and look at dist/assets/c.[some hash].js