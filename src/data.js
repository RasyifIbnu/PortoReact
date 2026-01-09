import HeroImage from "/assets/rai.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/piton.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/vs.png";
import Tools13 from "/assets/tools/c++.png";
import Tools14 from "/assets/tools/csharp.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
    link: "https://code.visualstudio.com/",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
    link: "https://react.dev/",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Python",
    ket: "Language",
    dad: "1000",
    link: "https://www.python.org/",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
    link: "https://tailwindcss.com/",
  },
  /*{
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
    link: "https://getbootstrap.com/",
  },*/
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
    link: "https://www.javascript.com/",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
    link: "https://nodejs.org/id",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
    link: "https://github.com/",
  },
  /*{
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
    link: "https://www.adobe.com/",
  },*/
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
    link: "https://www.canva.com/",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
    link: "https://www.figma.com/",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Visual Studio",
    ket: "Code Editor",
    dad: "1100",
    link: "https://visualstudio.microsoft.com/",
  },
   {
    id: 13,
    gambar: Tools13,
    nama: "C++",
    ket: "Language",
    dad: "1100",
    link: "https://www.dev-cpp.com/",
  },
   {
    id: 14,
    gambar: Tools14,
    nama: "C#",
    ket: "Language",
    dad: "1800",
    link: "https://dotnet.microsoft.com/en-us/languages/csharp",
  },
];

import Proyek1 from "/assets/proyek/pullup.png";
import Proyek2 from "/assets/proyek/alter.png";

import Proyek4 from "/assets/proyek/catering.png";


export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Pull-up dan Push-up Detection ",
    desk: "AI-based detection for push-ups and pull-ups to help users perfect their exercise form.",
    tools: ["Python"],
    dad: "200",
    link:"https://github.com/RasyifIbnu/AI-Lanjut"
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Alter Chess",
    desk: "A chess website and game featuring various selectable skill levels.",
    tools: ["Astro", "CSS", "Javascript"],
    dad: "300",
    // Tambahkan link di bawah ini
    link: "https://alterchess.my.id", 
  },
 
  {
    id: 4,
    gambar: Proyek4,
    nama: "Daily Food Ordering App UI Design",
    desk: "User interface design for a daily food service app.",
    tools: ["Figma", "Adobe Ilustrator"],
    dad: "500",
    link:"https://www.figma.com/design/hYpkNwbsoaCCH0ZHgUP1cb/Catering?node-id=0-1&p=f&t=dqocwCyM7rUbVr1u-0"
  },
  

];

export const listInspirasi = [
  {
    id: 1,
    nama: "dr. Davin Rizky Parulian Silalahi",
    role: "Dokter bedah onkologi",
    quote: "Dunia menuntut lu 100 persen, walaupun kondisi lu enggak 100 persen. Salahmu lanang.",
    gambar: "https://kitathletic.cc/cdn/shop/articles/20557A0F-ED69-4599-807C-99891C06C304_bedd4378-96fa-45cb-a861-c9678f3b71cc_720x.jpg?v=1743420213", // Ganti dengan link gambar asli atau import dari data.js
    delay: "300",
  },
  {
    id: 2,
    nama: "Sathoshi Nakamoto", // Contoh tokoh fiksi/populer sesuai selera
    role: "Creator of Bitcoin",
    quote: "If you don't believe it or don't get it, I don't have the time to try to convince you, sorry.",
    gambar: "https://image.idntimes.com/post/20250130/whatsapp-image-2025-01-30-at-173556-ad571333f82f07218e56dd09e2b6433e-9458719323572ca62f8397be94371828.jpeg", // Ganti gambar
    delay: "500",
  },
  {
    id: 3,
    nama: "Sandhika Galih",
    role: "Web Programming Lecturer",
    quote: "Mulai aja dulu, error itu biasa.",
    gambar: "https://sandhikagalih.github.io/portfolio-tailwind-css/dist/img/sandhika.png", // Ganti gambar
    delay: "700",
  },
];