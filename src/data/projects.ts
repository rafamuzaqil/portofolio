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
    slug: "nexus-rebrand",
    title: "Nexus Rebrand",
    category: "Identitas Merek",
    client: "Nexus Tech",
    year: "2025",
    role: "Desainer Utama",
    description: "Perombakan menyeluruh identitas merek Nexus, membawa pendekatan editorial modern ke strategi komunikasi inti mereka.",
    challenge: "Nexus telah berkembang melampaui estetika start-up mereka tetapi kesulitan untuk beresonansi dengan klien perusahaan tanpa kehilangan keunggulan inovatif mereka.",
    solution: "Kami mendefinisikan ulang bahasa visual mereka menggunakan tipografi tebal, palet monokromatik yang disempurnakan, dan elemen 3D dinamis yang mengkomunikasikan stabilitas dan pemikiran berwawasan ke depan.",
    thumbnail: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600",
      "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1600"
    ]
  },
  {
    id: "2",
    slug: "aurora-editorial",
    title: "Aurora",
    category: "Desain Editorial",
    client: "Aurora Magazine",
    year: "2024",
    role: "Pengarah Seni",
    description: "Desain editorial eksperimental yang mengeksplorasi titik temu antara brutalisme dan tipografi Swiss minimalis.",
    challenge: "Menciptakan pengalaman membaca yang terasa kacau namun terstruktur, mencerminkan konten avant-garde majalah tersebut.",
    solution: "Menggunakan sistem grid dasar yang kaku dipadukan dengan pelanggaran aturan yang disengaja—teks yang tumpang tindih dengan gambar dan ketebalan font variabel yang dilebih-lebihkan.",
    thumbnail: "https://images.unsplash.com/photo-1544473244-f6895e69ce8d?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?q=80&w=1600",
      "https://images.unsplash.com/photo-1532056079965-037089408d6d?q=80&w=1600"
    ]
  },
  {
    id: "3",
    slug: "kinetic-exhibition",
    title: "Kinetic Space",
    category: "Grafis Lingkungan",
    client: "Museum of Modern Art",
    year: "2024",
    role: "Komunikator Visual",
    description: "Desain tata ruang dan tipografi untuk pameran seni kinetik interaktif.",
    challenge: "Memandu pengunjung melalui ruang non-linear yang kompleks tanpa papan penunjuk jalan tradisional.",
    solution: "Menggunakan proyeksi tipografi masif yang bereaksi terhadap pergerakan pengunjung, bertindak sebagai instalasi seni sekaligus panduan arah.",
    thumbnail: "https://images.unsplash.com/photo-1545989253-02cc26577f88?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600",
      "https://images.unsplash.com/photo-1507643179227-1521bd9db49a?q=80&w=1600"
    ]
  },
  {
    id: "4",
    slug: "vibe-app",
    title: "Vibe Interface",
    category: "Desain UI/UX",
    client: "Vibe Audio",
    year: "2026",
    role: "Desainer Produk",
    description: "Aplikasi seluler khusus mode gelap untuk para audiophile murni yang mencari gangguan minimal.",
    challenge: "Memasukkan kontrol equalizer yang kuat ke dalam layar kecil dengan tetap mempertahankan kesan bersih dan premium.",
    solution: "Memperkenalkan kontrol berbasis gerakan di atas antarmuka gelap kontras tinggi yang disederhanakan yang menampilkan elemen glassmorphism.",
    thumbnail: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600"
    ]
  }
]
