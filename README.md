# Portfolio Website - Wangsit Nursyahada

Portfolio website pribadi yang menampilkan profil, projek, dan informasi kontak. Dibangun dengan HTML, CSS, dan JavaScript vanilla dengan desain responsif dan interaktif.

## ✨ Fitur

- **Responsive Design** - Tampilan optimal di desktop, tablet, dan mobile
- **Dark Theme** - Tema gelap yang modern dan nyaman di mata
- **Smooth Scrolling** - Navigasi halus antar section
- **Portfolio Carousel** - Galeri gambar dengan slide navigation untuk setiap project
- **Contact Form** - Formulir kontak terintegrasi dengan FormSubmit
- **Scroll Reveal Animation** - Animasi muncul saat scroll menggunakan ScrollReveal.js
- **Social Media Links** - Link ke Instagram, GitHub, dan LinkedIn
- **CV Download** - Tombol download CV langsung
- **Auto-Slide Carousel** - Gambar bergerak otomatis setiap 7 detik

## 🛠️ Teknologi

- **HTML5** - Struktur dan konten
- **CSS3** - Styling dan animasi
- **JavaScript (ES6)** - Interaktivitas dan carousel functionality
- **Font Awesome** - Icon library
- **Devicon** - Technology icons
- **ScrollReveal.js** - Scroll animation
- **FormSubmit** - Contact form service
- **EmailJS** - Email notification service
- **Toastify.js** - Toast notification library

## 📂 Struktur Project

```
profile-web-wngst/
├── index.html                      # Main HTML file
├── style.css                      # Stylesheet
├── main.js                        # JavaScript functionality
├── README.md                      # Documentation
└── assets/                        # Images and files
    ├── korsa.png                 # Profile image
    ├── CV_WangsitNursyahada.pdf  # CV file
    ├── mern-auth/                # MERN Auth project screenshots (7 images)
    ├── laporin-aja/              # Laporin Aja project screenshots (9 images)
    ├── profile-web/              # Portfolio Website screenshots (3 images)
    └── crud/                     # CRUD App screenshots (5 images)
```

## 🎨 Sections

### 1. Home
- Greeting dan intro dengan nama "Wangsit Nursyahada"
- Subtitle: "IT and Data Enthusiast"
- Social media links (Instagram, GitHub, LinkedIn)
- Download CV button
- Profile image (hidden di mobile)


### 2. Portfolio
Menampilkan 4 project dengan carousel interaktif:

**a. MERN Authentication System** (Deskripsi Kiri, Foto Kanan - 7 gambar)
- Full-stack authentication dengan MERN stack
- Fitur: Registrasi, Login, OTP, Reset Password, JWT
- Tech: MongoDB, Express, React 18, Node.js, Tailwind CSS, Vite, React Router, Axios, Bcryptjs, Nodemailer

**b. Laporin Aja - Platform Pengaduan Masyarakat** (Foto Kiri, Deskripsi Kanan - 9 gambar)
- SPA berbasis React & Vite
- UI responsif dengan Tailwind CSS
- Fitur: Membuat laporan, melacak status, voting upport
- Tech: React 18, Vite, React Router, Tailwind CSS, lucide-react, react-icons

**c. Portfolio Website** (Deskripsi Kiri, Foto Kanan - 3 gambar)
- Website portfolio pribadi dengan desain modern dan responsif
- Fitur interaktif: smooth scrolling, carousel, dark theme
- Tech: HTML5, CSS3, JavaScript ES6, Font Awesome, Devicon, ScrollReveal.js, FormSubmit

**d. CRUD Application** (Foto Kiri, Deskripsi Kanan - 5 gambar)
- RESTful API backend untuk operasi manajemen pengguna
- Implementasi CRUD lengkap dengan validasi dan error handling
- Tech: Node.js, Express.js, MongoDB Atlas, Mongoose, ES6 Modules, Nodemon

### 3. Contact
- Form kontak dengan validasi
- Terintegrasi dengan FormSubmit
- Success/Error notifications dengan Toastify
- Fields: Name, Email, Phone, Subject, Message

## 🚀 Cara Menggunakan

1. **Clone repository**
   ```bash
   git clone https://github.com/yourusername/profile-web-wngst.git
   ```

2. **Buka project**
   ```bash
   cd profile-web-wngst
   ```

3. **Jalankan dengan Live Server**
   - Gunakan VS Code extension "Live Server"
   - Atau buka `index.html` langsung di browser

## 📝 Kustomisasi

### Mengubah Informasi Pribadi
Edit file [`index.html`](index.html ):
- Nama, greeting, deskripsi di section `.home-content`
- Link social media di `.social-media`
- Email download CV di link `.btn`

### Menambah Portfolio Project Baru
1. Buat folder baru di `assets/nama-project/`
2. Copy struktur `.portfolio-box` yang sudah ada
3. Tambahkan ID unik untuk carousel (misal: `carousel5`, `dots5`)
4. Update JavaScript di [`main.js`](main.js ) untuk carousel baru:
   ```javascript
   let currentSlideIndex5 = 0;
   
   function showSlide5(index) {
       const slides = document.querySelectorAll('#carousel5 .carousel-slide');
       const dots = document.querySelectorAll('#dots5 .dot');
       
       if (!slides.length) return;
       
       if (index >= slides.length) currentSlideIndex5 = 0;
       else if (index < 0) currentSlideIndex5 = slides.length - 1;
       else currentSlideIndex5 = index;
       
       slides.forEach(s => s.classList.remove('active'));
       dots.forEach(d => d.classList.remove('active'));
       
       slides[currentSlideIndex5].classList.add('active');
       dots[currentSlideIndex5].classList.add('active');
   }
   
   function moveSlide5(direction) {
       showSlide5(currentSlideIndex5 + direction);
   }
   
   function currentSlide5(index) {
       showSlide5(index);
   }
   ```
5. Update setInterval untuk memasukkan `moveSlide5(1)`

### Mengubah Warna Theme
Edit variabel CSS di [`style.css`](style.css ):
```css
:root{
    --bg-color: #191f36;
    --snd-bf-color: #262840;
    --text-color: #fff;
    --main-color: #59b2f4;
}
```

### Mengubah Email Tujuan Contact Form
Edit `action` di form contact ([`index.html`](index.html )):
```html
<form action="https://formsubmit.co/your-email@example.com" method="POST">
```

### Mengatur Interval Auto-Slide
Di [`main.js`](main.js ), ubah nilai di setInterval (dalam milidetik):
```javascript
setInterval(() => {
    moveSlide(1);
    moveSlide2(1);
    moveSlide3(1);
    moveSlide4(1);
}, 5000); // 5 detik (default 7000)
```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
  - Layout: Deskripsi dan foto berdampingan
  - Home image: Tampil di sebelah kanan

- **Tablet & Mobile**: ≤ 768px
  - Layout: Stack vertikal (deskripsi atas, foto bawah)
  - Home image: Hidden
  - Navbar: Hamburger menu aktif

- **Small Mobile**: ≤ 617px
  - Font size berkurang ke 50% dari default
  - Contact form: Input full-width

## 🎯 Fitur Carousel

Setiap portfolio memiliki carousel interaktif dengan:
- ⬅️ **Tombol Previous** - Slide ke gambar sebelumnya
- ➡️ **Tombol Next** - Slide ke gambar berikutnya
- ⚪ **Dot Indicator** - Klik untuk lompat ke gambar tertentu
- ▶️ **Auto-Slide** - Gambar bergerak otomatis setiap 7 detik
- 🎨 **Smooth Transition** - Animasi 0.5 detik

## 🔗 Links

- **GitHub Repository**: [github.com/wngstnr-code/profile-web-wngst](https://github.com/wngstnr-code/profile-web-wngst)
- **GitHub Profile**: [github.com/wngstnr-code](https://github.com/wngstnr-code)
- **LinkedIn**: [linkedin.com/in/wangsitnursyahada](https://www.linkedin.com/in/wangsitnursyahada/)
- **Instagram**: [instagram.com/wngst.nr](https://www.instagram.com/wngst.nr/)

## 📄 License

© 2024 Wangsit Nursyahada. All rights reserved.

## 🤝 Contact

Untuk pertanyaan, feedback, atau kolaborasi:
- 🐙 GitHub: [@wngstnr-code](https://github.com/wngstnr-code)
- 💼 LinkedIn: [Wangsit Nursyahada](https://www.linkedin.com/in/wangsitnursyahada/)
- 📱 Instagram: [@wngst.nr](https://www.instagram.com/wngst.nr/)

---

**Made with ❤️ by Wangsit Nursyahada**