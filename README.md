## Set up

```
$ npm ci
```


# Bug report

1. `npm run dev`
1. access to `http://localhost:3000`
1. see console log
1. make sure log shows `'1 2 3 '`


1. `npm run build`
1. `npm run start`
1. access to `http://localhost:3000`
1. see console log
1. make sure log shows wrong output `'3 '`

This is reproduced in js file. In other words, this bug is reproduced when page.tsx is renamed to page.js.
