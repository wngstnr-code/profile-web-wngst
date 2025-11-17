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

## 🛠️ Teknologi

- **HTML5** - Struktur dan konten
- **CSS3** - Styling dan animasi
- **JavaScript (ES6)** - Interaktivitas dan carousel functionality
- **Font Awesome** - Icon library
- **Devicon** - Technology icons
- **ScrollReveal.js** - Scroll animation
- **FormSubmit** - Contact form service

## 📂 Struktur Project

```
profile-web-wngst/
├── index.html              # Main HTML file
├── style.css              # Stylesheet
├── main.js                # JavaScript functionality
├── assets/                # Images and files
│   ├── korsa.png         # Profile image
│   ├── CV_WangsitNursyahada.pdf  # CV file
│   ├── mern-auth/        # MERN Auth project screenshots
│   └── laporin-aja/      # Laporin Aja project screenshots
└── README.md             # Documentation
```

## 🎨 Sections

### 1. Home
- Greeting dan intro
- Social media links (Instagram, GitHub, LinkedIn)
- Download CV button
- Profile image

### 2. About
- Informasi tentang diri
- Foto profil
- Deskripsi singkat

### 3. Portfolio
Menampilkan 2 project utama:

**a. MERN Authentication System**
- Full-stack authentication dengan MERN stack
- Fitur: Registrasi, Login, OTP, Reset Password, JWT
- Tech: MongoDB, Express, React, Node.js, Tailwind CSS

**b. Laporin Aja - Platform Pengaduan Masyarakat**
- SPA berbasis React & Vite
- UI responsif dengan Tailwind CSS
- Tech: React 18, Vite, React Router, Tailwind CSS

### 4. Contact
- Form kontak dengan validasi
- Terintegrasi dengan FormSubmit
- Field: Name, Email, Phone, Subject, Message

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
Edit file `index.html`:
- Nama, greeting, deskripsi di section `.home-content`
- Link social media di `.social-media`
- Informasi about di `.about-content`

### Menambah Portfolio Project
1. Copy struktur `.portfolio-box` yang sudah ada
2. Tambahkan ID unik untuk carousel (misal: `carousel3`, `dots3`)
3. Tambahkan gambar project ke folder `assets/nama-project/`
4. Update JavaScript di `main.js` untuk carousel baru:
   ```javascript
   let currentSlideIndex3 = 0;
   function showSlide3(index) { /* ... */ }
   function moveSlide3(direction) { /* ... */ }
   function currentSlide3(index) { /* ... */ }
   ```

### Mengubah Warna Theme
Edit variabel CSS di `style.css`:
```css
:root{
    --bg-color: #1f242d;
    --snd-bf-color: #323946;
    --text-color: #fff;
    --main-color: #59b2f4;
}
```

### Mengubah Email Tujuan Contact Form
Edit `action` di form contact (`index.html`):
```html
<form action="https://formsubmit.co/your-email@example.com" method="POST">
```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet & Mobile**: ≤ 768px
- **Small Mobile**: ≤ 617px

## 🔗 Links

- **Live Demo**: [Your deployed URL]
- **GitHub**: [github.com/wngstnr-code](https://github.com/wngstnr-code)
- **LinkedIn**: [Your LinkedIn]
- **Instagram**: [Your Instagram]

## 📄 License

© 2024 Wangsit Nursyahada. All rights reserved.

## 🤝 Contact

Untuk pertanyaan atau kolaborasi, hubungi melalui:
- Email: wangsitnursyahada27@gmail.com
- GitHub: [@wngstnr-code](https://github.com/wngstnr-code)

---

**Made with ❤️ by Wangsit Nursyahada**