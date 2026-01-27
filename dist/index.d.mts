import { MaybeRef, UnwrapNestedRefs } from 'vue';

/**
 * Converts ref to reactive.
 *
 * @see https://vueuse.org/toReactive
 * @param objectRef A ref of object
 */
declare function toReactive<T extends object>(objectRef: MaybeRef<T>): UnwrapNestedRefs<T>;

export { toReactive };
