import { atom } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";

//export const cartCount = atom(0);

export const cartCount = persistentAtom<number>(
  "cart:count", // storage key
  0, // initial value
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);
export function addToCart() {
  cartCount.set(cartCount.get() + 1);
  console.log(`Cart count: ${cartCount.get()}`);
}
