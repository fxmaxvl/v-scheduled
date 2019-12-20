# v-scheduled
A simple tool to create timers from methods in a more declarative way (VUE way)
If you want the component to perform some action repeatedly at some interval.

### 1. Install:
```bash
yarn add v-scheduled
```

### 2. Require:

```js
import VScheduled from 'v-scheduled';

Vue.use(VScheduled);
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
    method: {
        ping() {
           this.pingNum += 1;
        }
    },
    
    // this is what you need add to your code
    scheduled: {
        ping: 1000
    },
  };
</script>
```

##### todo:
 - tests
 - examples
