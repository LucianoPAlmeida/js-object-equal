# object-equal

##Introduction
A convinience extension to test equalitity of javascript objects and arrays.
It's just a simple convenience method to check if an object it's equal to another.

##Exemple
```
let a = {x : 1, y: 3};
let b = {x : 1, y: 3};
console.log('equals = ' + a.equals(b)); //equals = true
```
For default uses not value and type compations. But you can add a boolean parameter to make a deep comparation.
```
let a = {x : 1, y: '3'};
let b = {x : 1, y: 3};
console.log('equals = ' + a.equals(b)); //equals = true
console.log('equals = ' + a.equals(b, true)); //equals = false

```

