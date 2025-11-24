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
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
    link: "https://getbootstrap.com/",
  },
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
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
    link: "https://www.adobe.com/",
  },
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
import Proyek3 from "/assets/proyek/kera_kaget.jpg";
import Proyek4 from "/assets/proyek/catering.png";


export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Pull-up dan Push-up Detection ",
    desk: "bantuan deteksi push-up dan pull-up untuk membantu menyempurnakan gerakan yang dilakukan ",
    tools: ["Python"],
    dad: "200",
    link:"https://github.com/RasyifIbnu/AI-Lanjut"
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Alter Chess",
    desk: "Website dan game catur dengan pilihan skill yang tersedia",
    tools: ["Astro", "CSS", "Javascript", "C#"],
    dad: "300",
    // Tambahkan link di bawah ini
    link: "https://alterchess.my.id", 
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Emoji ",
    desk: "Mendeteksi ekspresi wajah dengan menampilkan emoji yang sudah diatur",
    tools: ["Python"],
    dad: "200",
    link:"https://github.com/RasyifIbnu/emoji"
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "UI App Catering",
    desk: "Tampilan desain aplikasi layanan makanan sehari-hari",
    tools: ["Figma", "Adobe Ilustrator"],
    dad: "500",
    link:"https://www.figma.com/design/hYpkNwbsoaCCH0ZHgUP1cb/Catering?node-id=0-1&p=f&t=dqocwCyM7rUbVr1u-0"
  },
  

];
