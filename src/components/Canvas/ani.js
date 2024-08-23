// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");
// const animation = document.querySelector(".animation-1");

// const frames = {
//   currentframe: 0,
//   maxframe: 1345,
// };

// let ImageLoader = 0;
// let images = [];
// function preloaderImage() {
//   for (let i = 1; i <= frames.maxframe; i++) {
//     const imgurl = `./hui/frame_${i.toString().padStart(4, "0")}.jpg`;
//     const img = new Image();
//     img.src = imgurl;

//     img.onload = () => {
//       ImageLoader++;
//       if (ImageLoader === frames.maxframe) {
//         loadimg(frames.currentframe);
//         startani();
//       }
//     };
//     images.push(img);
//   }
// }

// function loadimg(index) {
//   if (index >= 0 && index <= frames.maxframe) {
//     const img = images[index];

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const scaleX = canvas.width / img.width;
//     const scaleY = canvas.height / img.height;
//     const scale = Math.max(scaleX, scaleY);

//     const newwidth = img.width * scale;
//     const newheight = img.height * scale;

//     const offsetX = (canvas.width - newwidth) / 2;
//     const offsetY = (canvas.height - newheight) / 2;

//     context.clearRect(0, 0, canvas.width, canvas.height);
//     context.imageSmoothingEnabled = true;
//     context.imageSmoothingQuality = "high";
//     context.drawImage(img, offsetX, offsetY, newwidth, newheight);

//     frames.currentframe = index;
//   }
// }

// function startani() {
//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".main",
//       start: "top top",
//       end: "bottom bottom",
//       scrub: 2,
//     },
//   });

//   function updatefreame(index) {
//     return {
//       currentIndex: index,
//       ease: "linear",
//       onUpdate: function () {
//         loadimg(Math.floor(frames.currentIndex));
//       },
//     };
//   }

//   tl.to(frames, updatefreame(200), "a").to(
//     animation,
//     { opacity: 0, ease: "linear" },
//     "a"
//   );
// }

//   const lenis = new Lenis();

//   function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
//   }

//   requestAnimationFrame(raf);

// window.addEventListener("resize", function () {
//   loadimg(Math.floor(frames.currentIndex));
// });

// preloaderImage();
