# Kontrol raporu

Tarih: 17 Ekim 2026

## Derleme ve kod kontrolleri

| Kontrol                              | Sonuç                                                          |
| ------------------------------------ | -------------------------------------------------------------- |
| Kilit dosyasıyla bağımlılık kurulumu | Tamamlandı; 328 paket kuruldu                                  |
| `npm run lint`                       | Geçti                                                          |
| `npm run typecheck`                  | Geçti                                                          |
| `npm run build`                      | Geçti; Next.js 33 statik çıktı üretti                          |
| `git diff --check`                   | Geçti                                                          |
| Çalışma alanı içerik karşılaştırması | 12 alandaki özgün başlık, paragraf ve hizmet listeleri korundu |

## Üretim sunucusu kontrolleri

`npm start` ile http://localhost:3000 üzerinde kontrol edildi.

- 28 içerik sayfasının tamamı HTTP 200 döndürüyor. Her sayfada tek bir `h1` ve sayfaya özgü canonical bağlantısı bulunuyor.
- `/sitemap.xml` ve `/robots.txt` HTTP 200 döndürüyor. Site haritası mevcut 28 içerik sayfasını kapsıyor.
- `/bulunamayan-sayfa/` ve `/blog/999/` HTTP 404 döndürüyor.
- `/hizmetler/` ve `/uzmanlik-alanlari/` kalıcı yönlendirmeyle çalışma alanlarına ulaşıyor.
- JSON-LD içindeki telefon, e-posta, adres ve çalışma saatleri ortak ofis bilgileriyle eşleşiyor.
- Geçersiz makale adreslerinin akış sırasında HTTP 200 dönmesi, makale yolları mevcut içerikle sınırlanarak giderildi.

## Chrome üzerinde etkileşim ve görsel kontrol

- Masaüstü: tanıtım alanı, çalışma alanları ızgarası, portre ve büro tanıtımı, makale kartları ve iletişim sayfası incelendi.
- 320 ve 390 piksel mobil görünüm; 820 piksel tablet görünümü kontrol edildi. İncelenen görünümlerde yatay taşma bulunmadı.
- Mobil menü açılıp kapanıyor. Escape ile kapanınca odak menü düğmesine dönüyor. Mobil menüden makaleler sayfasına geçiş kontrol edildi.
- Makale listesinde Aile Hukuku filtresi 1, Ticaret Hukuku filtresi 2 içerik gösteriyor.
- Genel listede ilk sayfada 6, ikinci sayfada 3 makale gösteriliyor. İkinci sayfadan kategori değiştirildiğinde liste ilk sayfaya dönüyor.
- Makale ayrıntısı ve çalışma alanı ayrıntısı açılıyor. Aktif çalışma alanı kenar menüde işaretleniyor.
- Ana sayfadaki portre ve makale görsellerinin yüklenmesi doğrulandı.
- Telefon, e-posta, harita ve sayfa içi bölüm bağlantıları kontrol edildi.

## Teslim

Yerel önizleme üretim modunda hazırlanmıştır. Tasarım kararları `docs/TASARIM-PLANI.md`, çalışma komutları ve içerik kaynakları `README.md` içinde açıklanır. Masaüstü ve mobil ekran görüntüleri, takip edilmeyen `.cache/previews/` klasöründe tutulur.

Bu rapor Chrome üzerinde yapılan kontrolleri kapsar. Otomatik bir erişilebilirlik veya performans puanı ölçümü içermez.

## Son fotoğraf ve marka revizyonu

Özgün bordo `#5d0c0c` ana düğmelerde ve marka yüzeylerinde kullanıldı; ana tanıtım yüzeyi özgün koyu bordo `#3d0808` değerini alır. GPT Images ile kaynak `alideniz.jpg` üzerinden iki ayrı portre çıktısı üretildi; kaynak ve ilk çıktı korundu. Site ilk düzenlemeyi kullanır, ikinci varyasyon karşılaştırma için ayrıca tutulur. Portre kırpılmadan doğal oranında görüntülenir ve yukarı hizalanır. Son görsel karşılaştırması `/previews/portre-karsilastirma.html` adresindedir.

Üretim komutu standart `next build` kullanır. Turbopack'in Google yazı tipi URL'lerini ayrıştırırken verdiği derleme hatası bu yolla giderilmiştir; geliştirme komutu Turbopack kullanmaya devam eder.

## Son yerleşim düzenlemesi

Kullanıcının isteğiyle ana sayfanın ilk bölümüne ilk GPT Images portresi yerleştirildi. Portre doğal 1122 × 1402 oranında, kırpılmadan gösterilir. Navbar'da depodaki özgün `/logo/ad-hukuk-logo.png` tekrar kullanılır. Bu son düzenlemede lint ve uygulama içi tarayıcı kontrolü yapıldı. Kullanıcının talebi doğrultusunda commit oluşturulmadı; önizleme geliştirme modunda çalışır.

## Açık palet güncellemesi — 17 Ekim 2026

Beyaz, sıcak kırık beyaz ve açık adaçayı yüzeyleri uygulandı. Bordo marka vurguları ve özgün navbar logosu korundu. Fotoğraf ve panel köşeleri seçici olarak yumuşatıldı; kart iç ızgarası kare kaldı. ESLint geçti. Tarayıcıda ana sayfanın tamamı, iletişim paneli ve 488 CSS piksel genişlikte mobil menü kontrol edildi; yatay taşma görülmedi. Tarayıcı paneli minimum genişliği nedeniyle 390 px isteği 488 px olarak gerçekleşti. Ana metin paleti çiftlerinde hesaplanan en düşük kontrast 5.24:1 düzeyindedir; bu kontrol tam bir erişilebilirlik denetimi değildir. Commit atılmadı.


## Ana sayfa sadeleştirmesi kontrolü

ESLint ve TypeScript kontrolleri geçti. Ana sayfada beş bölüm, yedi paragraf etiketi ve tek avukat portresi doğrulandı. Tam sayfa görsel kontrolü yapıldı; 988 ve 488 CSS piksel genişliklerinde yatay taşma görülmedi. Çalışma alanları ve makale kartlarının ayrıntılı görünümleri varsayılan olarak korunur; kompakt görünüm yalnızca ana sayfada etkin. Commit atılmadı.

## Tipografi ve mobil üst bar kontrolü

ESLint ve TypeScript geçti. Tarayıcıda hesaplanan başlık fontu Lora, gövde fontu Manrope olarak doğrulandı. Çalışma alanı kartlarındaki numara öğesi sayısı sıfır. 488 CSS piksel genişlikte üst barda E-posta ve telefon görünüyor; sayfada yatay taşma yok. Üst bardan konum bilgisi kaldırıldı. Önizleme açık bırakıldı; commit atılmadı.
