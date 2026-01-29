


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ismailerenArslan">
    <img src="assets/img\logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Kişisel Portfolyo</h3>

  <p align="center">
    Tamamen özelleştirelebilir kişisel ve yenilikçi portfolyom
    <br />
    <a href="https://github.com/ismailerenArslan/24118024-ismail_Eren_Arslan-Kuiz"><strong>Portfolyo dökümantasyonunu keşfedin!»</strong></a>
    <br />
    <br />
  </p>
</div>



## PORTFOLYO


Kişisel Dijital Portföy (One-Page), günümüzün hız odaklı profesyonel dünyasında, bir bireyin markasını, yetkinliklerini ve başarılarını en dinamik şekilde yansıtan, stratejik olarak kurgulanmış tek sayfalık online vitrinidir.

Bu araç, geleneksel, uzun ve statik özgeçmişlerin ötesine geçer; ziyaretçinin dikkatini dağıtmadan, hikayenizi ve değerinizi anında kavramasını sağlar.


## İÇİNDEKİLER

- [PORTFOLYO](#portfolyo)
- [İÇİNDEKİLER](#i̇çi̇ndeki̇ler)
- [Hızlı Başlangıç](#hızlı-başlangıç)
- [Özellikler](#özellikler)
- [Teknik Gereksinimler \& Yapı](#teknik-gereksinimler--yapı)
- [Geliştirme Ortamı](#geliştirme-ortamı)
- [Lisans](#lisans)
- [Destek ve İletişim](#destek-ve-i̇letişim)
## Hızlı Başlangıç 

Birden fazla hızlı başlangıç seçeneği mevcuttur:

- [En son sürümü indir](https://github.com/ismailerenArslan/24118024-ismail_Eren_Arslan-Kuiz.git)


## Özellikler 

✨ Proje Özellikleri
Bu portfolyo sitesi, aşağıdaki temel bölümleri ve fonksiyonları içermektedir:

Tek Sayfa Mimari: Kullanıcı deneyimini hızlandırmak için tüm içerik tek bir sayfada toplanmıştır.

Sayfa İçi Navigasyon (Anchor Linkler): Header/Nav bölümünden ana sayfa bölümlerine (#hakkimda, #iletisim, vb.) hızlı geçiş imkanı sunulur.

Hero Section: Tam ekranı kaplayan, kullanıcıyı karşılayan görsel ve metinsel giriş alanı.

Skills Section: İkonlar veya liste yapısı kullanılarak beceri setinin açıkça sergilenmesi.

Portfolio Section: Kart (Card) yapısında en az 2 adet, görsel ve kısa açıklama içeren projenin sergilendiği alan.

İletişim Formu (Form Handling): JavaScript ile desteklenen, sunucuya gönderimi engellenerek kullanıcıya anlık geri bildirim sağlayan bir iletişim formu.

Footer: Telif hakkı bilgileri, sosyal medya ikonları ve Öğrenci Künyesi bilgilerini içerir.

## Teknik Gereksinimler & Yapı

Proje, belirtilen katı teknik standartlara ve profesyonel yazılım geliştirme prensiplerine uygun olarak hazırlanmıştır.

- Klasör Yapısı

Proje, temizlik ve sürdürülebilirlik sağlamak amacıyla kesinlikle aşağıdaki ağaç yapısında kurulmuştur:

```root/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    └── img/ (Tüm resim dosyaları)
```

- HTML Semantik Kurgu

index.html dosyasında ```<div>``` karmaşasından kaçınılmış, HTML5 semantik etiketleri kullanılarak sayfa akışı aşağıdaki gibi yapılandırılmıştır:

```<header> ve <nav>

<section id="hero">

<section id="about">

<section id="skills">

<section id="portfolio">

<section id="contact">

<footer>
```

- CSS Layout ve Tasarım

Modern Layout: Sayfa iskeleti oluşturulurken eski ```float ```yöntemleri yerine modern ```Flexbox``` veya ```Grid``` mimarisi kullanılmıştır.

Tam Uyum (Responsive Design): ```@media``` sorguları (```max-width```) kullanılarak tasarım; mobil (telefon) ve tablet ekranlarına tam uyumlu hale getirilmiştir. Yatay kaydırma çubuğu (Horizontal Scroll) oluşumu kesinlikle engellenmiştir.

İnteraktivite: Buton ve linklerde ```:hover``` olayları için ```transition``` özellikleri ile akıcı ve basit geçiş efektleri uygulanmıştır.

JavaScript Etkileşim
Form Doğrulama ve Önleme: İletişim formunun "Gönder" butonuna basıldığında sayfanın yenilenmesi ```event.preventDefault()``` metodu ile engellenmiştir.

Kullanıcı Geri Bildirimi: Formun başarılı şekilde gönderilme simülasyonu sonrasında kullanıcıya "Mesajınız başarıyla alındı" gibi net bir geri bildirim (```alert``` veya DOM manipülasyonu) 
ile sunulmuştur.

## Geliştirme Ortamı

- Tarayıcı: Chrome / Opera

- Versiyon Kontrol: Git & GitHub

## Lisans 
Bu proje MIT Lisansı ile lisanslanmıştır. 

Daha fazla detay için ```LICENSE``` dosyasına bakınız

## Destek ve İletişim

- Mail: ismailerenarslan@gmail.com
- Github: https://github.com/ismailerenArslan
# Quiz
