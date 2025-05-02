## 🎯 JavaScript Event Listeners সহজ বাংলায়

**Event Listener** হলো এমন একটি জিনিস যা ব্যবহারকারীর কোনো নির্দিষ্ট কাজের (ইভেন্টের) জন্য অপেক্ষা করে। যেমন:

- যখন কেউ একটি বোতামে ক্লিক করে
- যখন কেউ কীবোর্ডে কোনো কী চাপে
- যখন কেউ কোনো ইনপুট ফিল্ডে কিছু টাইপ করে

তখন JavaScript দিয়ে এই ইভেন্টের প্রতিক্রিয়া হিসেবে আমরা কোড চালাতে পারি।

---

### 🚀 উদাহরণ ১: বোতাম ক্লিক

ধরা যাক তোমার HTML-এ একটি বোতাম আছে:

```html
<button id="mybutton">Click Me</button>
```

এবং JavaScript কোডে তুমি বোতামটিকে ধরবে:

```javascript
const button = document.getElementById("mybutton");
```

এরপর তুমি `addEventListener()` ফাংশনের মাধ্যমে একটি ক্লিক ইভেন্ট যুক্ত করতে পারো:

```javascript
button.addEventListener("click", doSomething);

function doSomething() {
  alert("Hello world!");
}
```

এখানে:
- `"click"` = ইভেন্টের ধরন
- `doSomething` = সেই ফাংশন যা ইভেন্ট হলে চালানো হবে

---

### 🎮 উদাহরণ ২: Counter / ক্লিক গেম

```javascript
let count = 0;
button.addEventListener("click", () => {
  count++;
  console.log("Clicked", count, "times");
});
```

---

### 🎨 উদাহরণ ৩: CSS ক্লাস অ্যাড/রিমুভ করা

```javascript
button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
```

---

### ⌨️ উদাহরণ ৪: কীবোর্ড ইভেন্ট

```javascript
window.addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
  if (e.key === "Enter") {
    alert("You pressed Enter!");
  }
});
```

এখানে `e` হচ্ছে ইভেন্ট অবজেক্ট, যা তোমাকে অনেক তথ্য দেয়—যেমন কী বোতাম চাপা হয়েছে।

---

### 📝 উদাহরণ ৫: ইনপুট ইভেন্ট

HTML:
```html
<input type="text" id="username" />
<h1 id="greeting"></h1>
```

JavaScript:
```javascript
const input = document.getElementById("username");
const heading = document.getElementById("greeting");

input.addEventListener("input", (e) => {
  heading.innerText = `Hello, ${e.target.value}`;
});
```

প্রতি বারে যখন ইউজার কিছু টাইপ করে, ইনপুট ইভেন্ট চলে এবং লেখা শিরোনামে দেখায়।

---

### ⚙️ অতিরিক্ত অপশন (তৃতীয় প্যারামিটার)

```javascript
button.addEventListener("click", () => {
  console.log("Only once!");
}, { once: true });
```

এটি বোঝায় এই ইভেন্ট শুধু একবারই ঘটবে, পরবর্তীতে আর কাজ করবে না।

---

### 🔚 সারাংশ

- `addEventListener(event, callback)` দিয়ে ইভেন্ট হ্যান্ডল করা হয়
- ব্যবহারকারীর ইন্টারঅ্যাকশনে প্রতিক্রিয়া জানানো সম্ভব
- Event object (`e`) থেকে অতিরিক্ত তথ্য পাওয়া যায়
- Input, Click, Keydown, Mouseover ইত্যাদি অসংখ্য ইভেন্ট রয়েছে
- CSS ক্লাস টগল, UI পরিবর্তন, live search ইত্যাদির জন্য অপরিহার্য

