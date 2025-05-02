https://www.youtube.com/watch?v=K_CxaSPjd1c
---

### 🔁 `forEach()` মেথড কীভাবে কাজ করে?

JavaScript-এ `forEach()` একটি অ্যারে মেথড, যেটা অ্যারেতে থাকা প্রতিটি উপাদানের (element) উপর একটি নির্দিষ্ট ফাংশন চালানোর সুযোগ দেয়।

#### 🧮 উদাহরণ:
ধরুন আমাদের একটি সংখ্যা নিয়ে গঠিত অ্যারে আছে:

```javascript
const numbers = [1, 2, 3, 4, 5];
```

আমরা চাই প্রতিটি সংখ্যাকে দ্বিগুণ করে কনসোলে দেখাতে। এর জন্য আমরা `forEach()` ব্যবহার করবো:

```javascript
numbers.forEach(printDouble);
```

এখানে `printDouble` নামে একটি ফাংশন তৈরি করি:

```javascript
function printDouble(number) {
  console.log(number * 2);
}
```

এই ফাংশন `numbers` অ্যারেতে যতগুলো সংখ্যা আছে, ততবার চলবে। প্রতিবার একটি সংখ্যা নিয়ে সেটিকে ২ দিয়ে গুণ করে `console.log()` করবে।

আউটপুট হবে:
```
2
4
6
8
10
```

---

### 🔄 ফাংশন আলাদা না করে সরাসরি `forEach()` এর ভেতরেও লেখা যায়:

```javascript
const words = ["apple", "banana", "cherry"];

words.forEach(function(word) {
  console.log(word.toUpperCase());
});
```

এই কোডে প্রতিটি শব্দকে বড় হাতের (uppercase) অক্ষরে পরিণত করে কনসোলে দেখানো হয়েছে।

---

### 🔍 `forEach()` এর ৩টি প্যারামিটার:

`forEach()` মেথডে ফাংশনে ৩টি প্যারামিটার পাঠানো যায়:

```javascript
array.forEach(function(currentItem, index, array) {
  // কাজ
});
```

- `currentItem`: বর্তমান উপাদান
- `index`: উপাদানের অবস্থান (০ থেকে শুরু)
- `array`: পুরো অ্যারেটি

#### 📌 উদাহরণ:
```javascript
const fruits = ["apple", "banana", "cherry"];

fruits.forEach(function(word, index, array) {
  console.log(word, array[index + 1]);
});
```

এই কোডে প্রতি শব্দের পাশে তার পরবর্তী শব্দটি দেখাবে। তবে শেষ উপাদানের পরে কিছু না থাকায় `undefined` দেখাবে।

আউটপুট:
```
apple banana
banana cherry
cherry undefined
```

---

### ⚠️ গুরুত্বপূর্ণ: `forEach()` আসল অ্যারে পরিবর্তন করে না!

যদি আপনি `forEach()` এর ভেতরে `.toUpperCase()` ব্যবহার করেন, তাহলে এটি কেবল সেই ফাংশনের ভেতরে কাজ করবে। আসল অ্যারে থাকবে অপরিবর্তিত।

```javascript
words.forEach(function(word) {
  word.toUpperCase(); // শুধু প্রদর্শনের জন্য, অ্যারে পরিবর্তন হয় না
});

console.log(words); // এখনো ["apple", "banana", "cherry"]
```

---

### 🛠️ যদি আপনি আসল অ্যারেটি পরিবর্তন করতে চান:

```javascript
words.forEach(function(word, index, array) {
  array[index] = word.toUpperCase();
});

console.log(words); // ["APPLE", "BANANA", "CHERRY"]
```

তবে সাধারণভাবে এমন পরিবর্তন না করে বরং একটি নতুন অ্যারে তৈরি করা উত্তম।

---

### 🧪 এর জন্য ব্যবহার করা হয় `map()` মেথড:

```javascript
const upperWords = words.map(function(word) {
  return word.toUpperCase();
});

console.log(upperWords); // ["APPLE", "BANANA", "CHERRY"]
console.log(words);      // ["apple", "banana", "cherry"]
```

`map()` একটি নতুন অ্যারে রিটার্ন করে, যাতে মূল অ্যারেটি অপরিবর্তিত থাকে।

---

### 📌 উপসংহার:
- `forEach()` দিয়ে প্রতিটি উপাদানে কাজ করা যায়।
- এটি কিছু রিটার্ন করে না, শুধু অ্যাকশন চালায়।
- মূল অ্যারে পরিবর্তন করতে হলে সরাসরি `array[index]` বদলাতে হয়।
- তবে ভালো প্র্যাকটিস হলো `map()` ব্যবহার করে নতুন অ্যারে তৈরি করা।

---
