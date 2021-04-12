import { gsap } from "gsap";

gsap.from("#pink-circle", { duration: 1, x:-300, y:300});
gsap.to("#pink-circle", { duration: 1, x:-200, y:200, delay: 1 });
gsap.to("#pink-circle", { duration: 1, x:-400, y:100, delay: 2 });
gsap.to("#pink-circle", { duration: 3, scale:-.5, delay: 3 });
gsap.to("#pink-circle", { duration: 2, scale:1, delay:4 });
gsap.to("#pink-circle", { duration: 3, scale:1, delay: 5 });
gsap.to("#pink-circle", { duration: 3, x:400, y:100, delay: 6 });
gsap.to("#pink-circle", { duration: 4, scale:-2, delay: 7, repeat: -1  });




