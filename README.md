# v-scheduled
> A simple tool to create timers from methods in a more declarative way (VUE way)
>
> If you want the component to perform some action repeatedly at some interval try v-scheduled

### 1. Install:
```bash
yarn add v-scheduled // or npm install v-scheduled
```

### 2. Require:

```js
import VScheduled from 'v-scheduled';

Vue.use(VScheduled);
```

> or if you wish, you could use mixin and attach it only for some components:

 ```js
 import { mixin } from 'v-scheduled';

export default {
    name: 'YourComponent',
    
    mixins: [ mixin() ],
    
    ...
};

 ```

### 3. Use in Your Components:

```vue
<template>
    <span> {{ pingNum }} </span>
</template>

<script>
  export default {
    data() {
      return {
        pingNum: 0
      };
    },
    
    methods: {
        ping() {
           this.pingNum += 1;
        }
    },
    
    // this is what you need to add to your code
    scheduled: {
        ping: 1000
    },
  };
</script>
```

##### todo:
 - tests
 - examples
