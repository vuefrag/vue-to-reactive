'use strict';

const vue = require('vue');

function toReactive(objectRef) {
  if (!vue.isRef(objectRef))
    return vue.reactive(objectRef);
  const proxy = new Proxy({}, {
    get(_, p, receiver) {
      return vue.unref(Reflect.get(objectRef.value, p, receiver));
    },
    set(_, p, value) {
      if (vue.isRef(objectRef.value[p]) && !vue.isRef(value))
        objectRef.value[p].value = value;
      else
        objectRef.value[p] = value;
      return true;
    },
    deleteProperty(_, p) {
      return Reflect.deleteProperty(objectRef.value, p);
    },
    has(_, p) {
      return Reflect.has(objectRef.value, p);
    },
    ownKeys() {
      return Object.keys(objectRef.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return vue.reactive(proxy);
}

exports.toReactive = toReactive;
