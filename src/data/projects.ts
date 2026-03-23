export interface Project {
  id: string
  slug: string
  title: string
  category: string
  client: string
  year: string
  role: string
  description: string
  challenge: string
  solution: string
  thumbnail: string
  gallery: string[]
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "idul-fitri",
    title: "Idul Fitri",
    category: "Social Media Campaign",
    client: "Internal Project",
    year: "2024",
    role: "Desainer Grafis",
    description: "Desain visual feed sosial media bertemakan Hari Raya Idul Fitri dengan gaya modern ringan namun tetap menjaga nuansa tradisional dan religius yang mendalam.",
    challenge: "Menghadirkan visual perayaan Idul Fitri yang out-of-the-box agar tidak monoton dengan ornamen klise, melainkan pendekatan kontemporer yang relevan dengan audiens muda.",
    solution: "Menggabungkan tipografi ekspresif dan tata letak perpaduan warna hangat yang bersih guna membangkitkan dan menonjolkan semangat kebersamaan Hari Kemenangan.",
    thumbnail: "/feed.jpg",
    gallery: ["/feed.jpg"]
  },
  {
    id: "2",
    slug: "liquid-effect",
    title: "Liquid Effect",
    category: "Eksperimen Visual 3D",
    client: "Personal Exploration",
    year: "2025",
    role: "Visual Artist",
    description: "Eksplorasi visual menggunakan efek cairan (liquid) yang dinamis, menunjukkan perpaduan antara tipografi, warna, dan distorsi efek visual untuk menciptakan komposisi yang mengalir.",
    challenge: "Membuat teks dan bentuk visual terlihat melebur sedemikian rupa menjadi bentuk cair yang realistis serta dinamis, tetapi pesan utamanya dan tulisan harus tetap terbaca jelas.",
    solution: "Penerapan pemrosesan distorsi perpindahan gambar berlapis yang sangat dipertimbangkan (displacement map halus) untuk mencapai proporsi keseimbangan fungsi keterbacaan serta bentuk abstrak yang mengagumkan.",
    thumbnail: "/liquid-effect.jpg",
    gallery: ["/liquid-effect.jpg"]
  },
  {
    id: "3",
    slug: "personal-branding",
    title: "Personal Branding",
    category: "Identitas Merek",
    client: "Rafa",
    year: "2026",
    role: "Desainer Utama",
    description: "Konsep dasar dan eksplorasi personal branding untuk desainer yang menonjolkan profesionalisme murni, tingkat keberanian yang tinggi dalam bereksperimen, namun tetap dalam ranah minimalisme utuh.",
    challenge: "Menyatukan semua ciri khas gaya desain yang beragam ke ranah UI/UX, Editorial, hingga arah seni (Art Direction) agar berada di bawah satu payung identitas visual besar yang mencerminkan sang pembuatnya.",
    solution: "Menerapkan pendekatan metodis berbasis tipografi kustom dipadukan dengan tata letak geometris presisi yang serba dinamis dan tebal, yang secara konsisten kuat diaplikasikan dari platform skala kecil hingga super besar.",
    thumbnail: "/personal-branding.jpg",
    gallery: ["/personal-branding.jpg"]
  },
  {
    id: "4",
    slug: "brutalism",
    title: "Brutalism",
    category: "Desain Kontras",
    client: "Art Exhibition",
    year: "2025",
    role: "Pengarah Seni",
    description: "Eksplorasi berani pada gaya desain brutalisme yang mengabaikan semua aturan normal pembatasan grid konvensional dan tren estetika web modern minimalis.",
    challenge: "Menyusun kekacauan desain yang tidak memiliki harmoni namun tidak sampai mengasingkan maupun menghilangkan makna utama informasi di dalamnya.",
    solution: "Eksperimentasi tabrakan asimetri ekstrem dengan palet warna mentah dan raksasa. Menghindari penghalus piksel modern guna menyajikan sebuah karya estetika jujur yang secara sengaja memberontak.",
    thumbnail: "/brutalism.jpg",
    gallery: ["/brutalism.jpg"]
  }
]
