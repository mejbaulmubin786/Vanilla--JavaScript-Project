নিচের আলোচনাটি সহজ, সুন্দর এবং শিক্ষণীয় বাংলায় অনুবাদ করে দেওয়া হলো, যাতে আপনি JavaScript-এর `map()`, `filter()` এবং `reduce()` মেথডগুলো আরও ভালোভাবে বুঝতে পারেন।

---

**ভাবুন তো! যদি জটিল লজিক কেবল কয়েক লাইনে লেখা যেত?**  
এটাই সম্ভব `map`, `filter`, আর `reduce` মেথডগুলোর মাধ্যমে। এরা JavaScript-এর সবচেয়ে শক্তিশালী array method। আমি এগুলোকে বলি “forEach-এর শক্তিশালী ভার্সন”, কারণ ব্যবহার পদ্ধতি প্রায় একই, কিন্তু একটি বড় পার্থক্য হলো — এরা নতুন একটি array রিটার্ন করে।

---

### 🟦 `map()` মেথড: নতুন রূপে উপস্থাপন

`map()` একটি নতুন array তৈরি করে যেটা পুরাতন array-কে পরিবর্তন না করে, প্রতিটি উপাদানকে আপনার দেওয়া function-এর মাধ্যমে রূপান্তর করে।

#### উদাহরণ:
```javascript
const prices = [100, 200, 300];

const discountPrices = prices.map(function(price) {
  return price * 0.5;
});
```

এখানে `discountPrices` নামে একটি নতুন array তৈরি হলো যেখানে প্রতিটি দামের ৫০% কাটা হয়েছে। মূল `prices` array অপরিবর্তিত থাকে।

#### Arrow Function দিয়ে ছোট করে:
```javascript
const discountPrices = prices.map(price => price * 0.5);
```

---

### 🟩 অবজেক্ট নিয়ে map()

আপনার যদি প্রোডাক্ট অবজেক্টের array থাকে, তখনও `map` ব্যবহার করা যায়:

```javascript
const products = [
  { name: 'Shirt', price: 300 },
  { name: 'Pants', price: 500 }
];

const discounted = products.map(product => ({
  ...product,
  price: product.price * 0.5
}));
```

এখানে `...product` দিয়ে আগের সব প্রপার্টি রেখে শুধুমাত্র `price` আপডেট করা হয়েছে।

---

### 🟨 `filter()` মেথড: বাছাই করুন শর্ত অনুযায়ী

`filter()` ব্যবহার করে আপনি array থেকে নির্দিষ্ট শর্ত পূরণ করে এমন উপাদানগুলো বেছে নিতে পারেন।

#### উদাহরণ:
```javascript
const products = [
  { name: 'Shirt', price: 300 },
  { name: 'Socks', price: 100 }
];

const affordable = products.filter(product => product.price < 200);
```

এখানে শুধুমাত্র সেই প্রোডাক্টগুলো রাখা হয়েছে যেগুলোর দাম ২০০ টাকার নিচে।

#### আরো কিছু উদাহরণ:
- সাদা রঙের প্রোডাক্ট ফিল্টার:
```javascript
products.filter(p => p.color === 'white');
```

- নামের মধ্যে “phone” আছে এমনগুলো:
```javascript
products.filter(p => p.name.includes('phone'));
```

---

### 🟥 `reduce()` মেথড: সব উপাদানকে এক মানে নামিয়ে আনুন

`reduce()` array-এর সব উপাদানকে একটিমাত্র মানে রূপান্তর করে। সেটা হতে পারে সংখ্যা, স্ট্রিং, অবজেক্ট — যেকোনো কিছু।

#### উদাহরণ: টোটাল দাম বের করা
```javascript
const prices = [100, 200, 300];

const total = prices.reduce((total, price) => total + price, 0);
```

এখানে `reduce()` সব দামের যোগফল বের করছে। দ্বিতীয় প্যারামিটার `0` হচ্ছে শুরুতে `total` এর মান।

#### স্ট্রিং যোগ:
```javascript
const words = ['Hello', 'World'];

const sentence = words.reduce((acc, word) => acc + ' ' + word, '');
```

---

### 🔁 map, filter, reduce একত্রে ব্যবহার

ধরি প্রোডাক্ট অবজেক্টে একটি নতুন প্রপার্টি যোগ হয়েছে: `isInCart: true/false`। এখন cart-এর প্রোডাক্টগুলোর টোটাল দাম বের করতে চাই, সাথে ছাড়ও দিতে চাই:

```javascript
const total = products
  .filter(p => p.isInCart)
  .map(p => p.price * 0.8)
  .reduce((sum, price) => sum + price, 0);
```

এখানে তিনটি ধাপে সমাধান হয়েছে:
1. `filter()` দিয়ে cart-এর প্রোডাক্ট বাছাই
2. `map()` দিয়ে ছাড় দেওয়া
3. `reduce()` দিয়ে সব দামের যোগফল

---

**শেষ কথা:**  
- `map()` → ডেটা রূপান্তরের জন্য  
- `filter()` → ডেটা বাছাইয়ের জন্য  
- `reduce()` → একক মানে রূপান্তরের জন্য  

এই তিনটি মেথড JavaScript-এ প্রফেশনাল লেভেলের কোডিং সহজ করে তোলে। আপনি এগুলো মিলে অনেক জটিল কাজ মাত্র কয়েক লাইনে করতে পারবেন।

