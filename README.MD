#vue-description
> description for vue.

## props:

```
 props: {
         className: {
                type: String
              },
              line: {
                type: String,
                default: 3
              }
        },
```

## usage:
+ install:
```bash
npm install smalleast/vue-description --save


```

+ code:
```javascript
   import VueDescription from '../components/description.vue'
    export default {
      components: {VueDescription}
    };

```

+template
```
<template>
  <aside class="dev">
     <VueDescription :line="'3'" :desc="desc">
        </VueDescription>
  </aside>
```

## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install
