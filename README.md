# SwiftCart

SwiftCart is a modern e-commerce application built with React and Vite, using the Fake Store API.

## Features

- **Home Page**: Interactive Hero section, Features highlight, and Top Rated products.
- **Products Page**: Browse products with category filtering.
- **Product Details**: View detailed product information in a modal.
- **Shopping Cart**: Add items to cart, persist data in local storage, and view cart count.
- **Responsive Design**: Fully responsive layout for mobile and desktop.
- **Custom Styling**: Built with Vanilla CSS for a unique look.

## Setup Instructions

1.  Clone the repository or download the source code.
2.  Open the project folder in your terminal.
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Run the development server:
    ```bash
    npm run dev
    ```
5.  Open [https://swiftcard-ecommers.netlify.app/](https://swiftcard-ecommers.netlify.app/) in your browser.

---

## JavaScript Interview Questions (Bangla)

### 1) What is the difference between null and undefined?

**Null:** `null` হলো একটি অ্যাসাইনমেন্ট ভ্যালু যা বোঝায় যে কোনো ভেরিয়েবলে ইচ্ছাকৃতভাবে কোনো মান রাখা হয়নি বা সেটি খালি। এটি একটি অবজেক্ট টাইপ।

**Undefined:** `undefined` মানে হলো একটি ভেরিয়েবল ডিক্লেয়ার করা হয়েছে কিন্তু তাতে কোনো মান বা ভ্যালু অ্যাসাইন করা হয়নি। এটি নিজেই একটি টাইপ।

### 2) What is the use of the map() function in JavaScript? How is it different from forEach()?

**map():** `map()` ফাংশন একটি অ্যারের প্রতিটি উপাদানের ওপর একটি ফাংশন চালায় এবং সেই ফলাফলের ভিত্তিতে একটি **নতুন অ্যারে** তৈরি করে রিটার্ন করে। এটি মূল অ্যারে পরিবর্তন করে না।

**forEach():** `forEach()` ফাংশন অ্যারের প্রতিটি উপাদানের ওপর লুপ চালায় এবং কাজ সম্পাদন করে, কিন্তু এটি কোনো **নতুন অ্যারে রিটার্ন করে না** (রিটার্ন ভ্যালু `undefined`)।

### 3) What is the difference between == and ===?

**== (Loose Equality):** এটি দুটি মানের তুলনা করার সময় তাদের **ডাটা টাইপ চেক করে না**। যদি টাইপ ভিন্ন হয়, তবে এটি টাইপ কনভার্সন (Des coercion) করে তুলনা করার চেষ্টা করে। যেমন: `5 == "5"` সত্য (true) হবে।

**=== (Strict Equality):** এটি দুটি মানের তুলনা করার সময় তাদের **মান এবং ডাটা টাইপ** উভয়ই চেক করে। টাইপ ভিন্ন হলে এটি মিথ্যা (false) রিটার্ন করে। যেমন: `5 === "5"` মিথ্যা (false) হবে।

### 4) What is the significance of async/await in fetching API data?

`async/await` ব্যবহার করে অ্যাসিনক্রোনাস (asynchronous) কোডকে সিনক্রোনাস (synchronous) কোডের মতো সহজোবোধ্যভাবে লেখা যায়। API ফেচ করার সময় এটি `Promise` চেইনিং (`.then()`, `.catch()`) এর তুলনায় কোডকে পরিষ্কার এবং পাঠযোগ্য (readable) করে তোলে। এটি এরর হ্যান্ডলিং সহজ করে `try/catch` ব্লকের মাধ্যমে।

### 5) Explain the concept of Scope in JavaScript (Global, Function, Block).

**Global Scope:** যখন কোনো ভেরিয়েবল ফাংশন বা ব্লকের বাইরে ডিক্লেয়ার করা হয়, তখন সেটি গ্লোবাল স্কোপে থাকে এবং কোডের যেকোনো জায়গা থেকে অ্যাক্সেস করা যায়।

**Function Scope:** যখন কোনো ভেরিয়েবল একটি ফাংশনের ভেতরে `var`, `let` বা `const` দিয়ে ডিক্লেয়ার করা হয়, তখন সেটি শুধুমাত্র সেই ফাংশনের ভেতরেই ব্যবহার করা যায়। বাইরে থেকে অ্যাক্সেস করা যায় না।

**Block Scope:** যখন কোনো ভেরিয়েবল `{}` (curly braces) এর ভেতরে `let` বা `const` দিয়ে ডিক্লেয়ার করা হয় (যেমন `if` বা `for` লুপের ভেতরে), তখন সেটি শুধুমাত্র সেই ব্লকের ভেতরেই সীমাবদ্ধ থাকে। `var` ব্লক স্কোপ মেনে চলে না।
