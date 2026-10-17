# Çalışma alanlarının grafik dili

Fotoğraf yerine küçük SVG kompozisyonları seçildi. Mevcut Heroicons outline simgeleri aynı çizgi kalınlığıyla korunup özgün, iki tonlu zemin ve çerçeve detaylarıyla birleştirildi. Masaüstünde 72, mobilde 60 piksel; simgeler 34/30 piksel. Başlıklar daima görünür ve kartın tamamı bağlantıdır. Süsleyici grafikler ekran okuyucudan gizlidir. Hareket azaltma desteği korunur. Harici görsel isteği veya yeni paket eklenmedi.

Kaynaklar:
- https://github.com/tailwindlabs/heroicons — mevcut simge setinin resmi kaynağı.
- https://www.nngroup.com/articles/icon-usability/ — simgelerin anlamını görünür metinle desteklemek.

Uygulama: `app/components/ui/PracticeGraphic.tsx`. Kompakt grafik görünümü yalnızca ana sayfada kullanılır. ESLint ve TypeScript geçti. Tarayıcıda altı grafik, bağlantı başlıkları ve 488 CSS piksel genişlikte yatay taşma olmadığı doğrulandı. Commit atılmadı.
