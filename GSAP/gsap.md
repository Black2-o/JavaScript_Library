# ✅ GSAP (GreenSock Animation Platform) - Quick & Clear Documentation

## ✅ Installation
```bash
npm install gsap
```
Or use CDN:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
```

---

## ✅ Core Concept
GSAP is a powerful JavaScript library to animate DOM elements. Animations are created using `gsap.to()`, `gsap.from()`, or `gsap.fromTo()`.

---

## ✅ Core Methods

### ▶️ `gsap.to()`
Animates from **current values to target values**.
```js
gsap.to(".box", { duration: 1, x: 100, opacity: 0 });
```

### ◀️ `gsap.from()`
Animates **from** specific values to current/default ones.
```js
gsap.from(".box", { duration: 1, x: -100, opacity: 0 });
```

### 🔁 `gsap.fromTo()`
Specify both start and end values.
```js
gsap.fromTo(".box", { x: 0 }, { duration: 1, x: 200 });
```

### ⏸️ `gsap.set()`
Immediately sets properties without animation.
```js
gsap.set(".box", { scale: 0.5 });
```

---

## ✅ Timeline (Sequence animations)
Create complex, chained animations.
```js
let tl = gsap.timeline();
tl.to(".box", { x: 100 })
  .to(".box", { y: 100 })
  .to(".box", { rotation: 45 });
```

---

## ✅ Easing
Control the acceleration/feel of animations.
```js
gsap.to(".box", { x: 100, ease: "power2.out" });
```
**Popular Easings**: `linear`, `power1`, `power2`, `power3`, `bounce`, `elastic`, `back`

---

## ✅ Key Features & Properties
| Property     | Description                     |
|--------------|---------------------------------|
| `x`, `y`     | Translate on X/Y axis           |
| `opacity`    | Transparency (0 to 1)           |
| `scale`      | Size scaling                    |
| `rotate`     | Rotation in degrees             |
| `duration`   | How long the animation lasts    |
| `delay`      | Start delay for animation       |
| `stagger`    | Delay between multiple elements |
| `repeat`     | Repeat count                    |
| `yoyo`       | Play animation in reverse back  |
| `ease`       | Easing function                 |

---

## ✅ Stagger Animations
Animate multiple elements with time offset.
```js
gsap.to(".item", { x: 100, stagger: 0.2 });
```

---

## ✅ Callbacks
Hooks during animation lifecycle.
```js
gsap.to(".box", {
  x: 100,
  onStart: () => console.log("Started"),
  onUpdate: () => console.log("Updating"),
  onComplete: () => console.log("Completed")
});
```

---

## ✅ Plugins (Extend GSAP capabilities)
Enable via:
```js
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
```

### 📜 ScrollTrigger
Triggers animation on scroll.
```js
gsap.to(".box", {
  scrollTrigger: {
    trigger: ".box",
    start: "top center",
    end: "bottom 80%",
    scrub: true
  },
  x: 400
});
```

### 🅰️ TextPlugin (Text typing effect)
```js
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

gsap.to(".title", { duration: 2, text: "Hello World!" });
```

---

## ✅ Utility Functions

### 🔄 `gsap.utils.random(min, max)`
```js
gsap.to(".box", {
  x: () => gsap.utils.random(100, 500)
});
```

### 🔁 `gsap.utils.wrap(array)`
Loops through array items.

---

## ✅ Quick Example
```html
<div class="box"></div>
<script>
  gsap.to(".box", {
    x: 200,
    duration: 2,
    ease: "bounce.out",
    repeat: 1,
    yoyo: true
  });
</script>
```

---

## ✅ Resources
- [GSAP Docs](https://gsap.com/docs/)
- [GSAP Cheat Sheet](https://greensock.com/cheatsheet/)
- [GSAP Plugins](https://gsap.com/plugins/)

---

Let me know if you want to add **advanced ScrollTrigger, timelines with labels, or SVG/motionPath animations**.
