# Gezinme yenilemesi — 30 Ekim 2026

- Masaüstü üst menü krem bir şerit içinde toplandı. Aktif sayfa beyaz yüzeyle ayrılır; geniş ekranlarda logoya metin eşlik eder. Sticky başlığın arka plan bulanıklığı kaldırıldı.
- Mobil/tablet menüsü, yerleşimi aşağı iten liste yerine sağdan açılan native `dialog` paneli oldu. Aktif sayfa, bağlantılar, randevu ve e-posta alanları bulunur; bağlantılarda sıra numarası gösterilmez. Panel açılınca arka sayfa kaydırması kilitlenir. Escape, kapatma düğmesi, dış alana tıklama ve sayfa bağlantısı ile kapanır. Tab/Shift+Tab odağı panel içinde döndürür; kapatınca odak açma düğmesine döner. Masaüstü genişliğine geçince açık panel kapanır. Hareket azaltma tercihinde açılış animasyonu kaldırılır.
- Makalelerde konu filtreleri masaüstünde solda sticky bir panel olarak düzenlendi; her konunun makale sayısı gösterilir. Mobil/tablette aynı filtre durumu native bir konu seçiciyle yönetilir. Filtre değişince sayfa numarası sıfırlanır. İçerikler ve sayfalama korunur.
- Çalışma alanı ayrıntılarındaki diğer alan bağlantıları ince çizgili, sıra numarası olmayan bir liste oldu. Mobilde tek sütuna döner.
- Küçük çalışma alanı görsellerinde perde kaldırıldı: 12 px hareket ve kısa belirme kullanılır. Krem perde ve yakınlaşmadan doğal boyuta oturma yalnızca büro fotoğrafında korunur. Makale kartları perdesiz, kısa belirme ve 10 px hareket kullanır. Tasarım değerlendirmesi: büyük fotoğrafta belirgin, küçük öğelerde daha ölçülü hareket tercih edildi.

## Kontroller

Üretim derlemesi, ESLint ve TypeScript denetimleri geçti. Chrome üzerinde 320, 390, 820, 1024 ve 1440 px test edildi: taşma/JavaScript hatası yok; mobil menü, Tab/Shift+Tab döngüsü, Escape, odak dönüşü, arka sayfa kaydırma kilidi, dış alana tıklama, breakpoint değişimi, kategori filtreleme ve sayfalama çalışıyor. Hareket azaltma tercihinde drawer animasyonu yok. Çalışma alanı bağlantıları ve mevcut görsel efektlerin erişilebilirlik kontrolleri geçti.

Yeni çalışma zamanı bağımlılığı eklenmedi. Derleme raporunda ortak JS yaklaşık 102 KB; makaleler sayfası modülü yaklaşık 6,34 KB (önceki sürüm 6,19 KB). Bu değişiklik sonrasında yeni Lighthouse puanı ölçülmedi; performans raporundaki puanlar önceki ölçümleri temsil eder.

Yerel kontrol dosyaları `.cache/navigation-checks.json`, `.cache/navigation-check.cjs` ve `.cache/previews/navigation-*.png` içinde tutulur. Değişiklikler yereldedir; dağıtım yapılmadı.

## İç sayfalar ve görünür etiketin kaldırılması

Kullanıcının isteğiyle düğmedeki görünür “Menü” sözcüğü kaldırıldı; panel başlığı da görsel olarak kaldırıldı. Düğmenin erişilebilir aç/kapat adları ve panelin ekran okuyucu başlığı (“Site gezinmesi”) korunur. Simge düğmesi 44 × 44 px dokunma alanına sahiptir.

- Hakkımızda: portre/biyografi dengesi, ince ayırıcı ve numaralı büro bilgileri. Son kullanıcı düzeltmesiyle eklenen alt iletişim bölümü kaldırıldı.
- Çalışma alanları: dizin sayfasında sıra numarası olmayan, çerçeveli görsel kartlar; mobilde tek sütun. Ayrıntı sayfaları da ortak iletişim bölümünü kullanır.
- Makale ayrıntıları: kontrollü okuma genişliği, masaüstünde sticky ilgili yazılar paneli; mobilde içerikten sonra tek sütun. Mevcut makale metinleri korunur.
- İletişim: telefon/e-posta/adres kartları ve çalışma saatleri paneli aynı görsel dile geçirildi. Bağlantı ve saat verileri değiştirilmedi; harita lazy kalır.
- Gizlilik ve kullanım koşulları: masaüstünde belge gezinme paneli, mobilde iki bağlantılı kompakt alan ve okunabilir başlık ayrımları. Hukuki metinlerin kaynak makale blokları Git HEAD ile birebir karşılaştırıldı; değişiklik yok.
- İç sayfa tanıtım alanlarında ortak, ince pirinç renkli vurgu çizgisi kullanılır. Ek animasyon veya istemci kütüphanesi eklenmedi; yeni ortak bileşenler sunucuda oluşturulur.

Son üretim derlemesi (lint ve TypeScript dahil) geçti. 28 içerik rotası HTTP 200 ve tek H1 kontrolünden geçti. Yedi temsilci iç sayfa 320/390/820/1440 px genişliklerinde toplam 28 görünümde test edildi; yatay taşma ve JavaScript hatası yok. İlgili yazılar, 12 çalışma alanı, aktif yasal belge, telefon bağlantısı, görünür etiketin kaldırılması ve mobil panelin kapanması kontrol edildi. Haritanın yerleşim testlerinde Google iframe isteği engellendi; harita hizmetinin kullanılabilirliği bu testin kapsamına alınmadı. Yeni kayıt `.cache/inner-page-checks.json`, görseller `.cache/previews/inner-*.png` içindedir.
