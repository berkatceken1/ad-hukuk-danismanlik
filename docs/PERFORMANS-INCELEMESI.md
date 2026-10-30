# Performans incelemesi — 30 Ekim 2026

## Değerlendirme ve ölçümler

Site statik Next.js sayfaları, sunucu bileşenleri, yerel sunulan yazı tipleri ve otomatik görsel optimizasyonuyla iyi bir temele sahip. İncelemede büyük bir API/veritabanı beklemesi görülmedi. Açılıştaki görsel gecikme, gereksiz font ön yüklemeleri ve ana içerik gelmeden gösterilen genel yükleme ekranı iyileştirildi.

Lighthouse ile alınan tekil laboratuvar ölçümleri:

| Ölçüm | Mevcut canlı / mobil | Yerel üretim / mobil | Mevcut canlı / masaüstü | Yerel üretim / masaüstü |
| --- | --- | --- | --- | --- |
| Performans | 94 | 97 | 83 | 100 |
| İlk içerik (FCP) | 1,5 sn | 1,7 sn | 0,4 sn | 0,4 sn |
| En büyük içerik (LCP) | 2,6 sn | 2,5 sn | 0,7 sn | 0,6 sn |
| Speed Index | 4,5 sn | 1,7 sn | 0,8 sn | 0,4 sn |
| Yerleşim kayması (CLS) | 0 | 0,029 | 0,343 | 0 |
| Ana iş parçacığı engellenmesi (TBT) | 60 ms | 60 ms | 0 ms | 0 ms |

Canlı adres `https://adhukukvedanismanlik.com/`; yerel üretim adresi `http://localhost:3100/`. Aynı Lighthouse mobil/masaüstü profilleri kullanıldı. Ortamlar farklı olduğu için tablo kontrollü bir hız artışı yüzdesi veya dağıtım sonrası garanti olarak yorumlanmamalı. CDN, ağ, önbellek ve görsel biçimi pazarlığı sonuçları etkiler. Gerçek kullanıcı INP verisi ölçülmedi. Mobil son ölçümdeki küçük font kaynaklı kayma 0,029; sıfır kayma iddiası yalnızca masaüstü son ölçümü içindir.

## Bulunan sorunlar ve uygulanan değişiklikler

1. **Genel yükleme ekranı yerleşimi bozuyordu.** `app/loading.tsx`, ilk HTML'de ana içerik yerine yalnızca konumlandırılmış bir ilerleme çubuğu üretiyordu. Altbilgi yukarıda çiziliyor, ana içerik sonradan Suspense alanına yerleştirilince aşağı kayıyordu. Tüm içerik sayfaları statik üretildiğinden bu sınır kaldırıldı. Yeni HTML'de ana içerik doğrudan altbilgiden önce bulunuyor. Sayfa geçişlerindeki `RouteTransitionLoader` korunuyor.
2. **İtalik fontlar kullanılmadan erken indiriliyordu.** Lora normal ve italik tanımları ayrıldı; italik için `preload: false` kullanıldı. Gerçek italik tasarımı ilgili stillerde korunuyor. Lighthouse ağ kaydında font transferi yaklaşık 161 KB'den 100 KB'ye düştü (%38 azalma).
3. **Portre %95 kaliteyle sunuluyordu.** Ana sayfa ve Hakkımızda portreleri %85 kaliteye geçirildi; kaynak PNG değiştirilmedi. Kontrollü Sharp karşılaştırmasında aynı 828 px WebP, 173.770 bayttan 73.174 bayta indi (%58 azalma). Bu karşılaştırma canlıda indirilen görselin boyutu değildir. Yan yana görsel kontrol yapıldı. Statik import, kaynak dosyasına içerik karmalı bir URL sağlar.
4. **Küçük görsellerin çözünürlük seçenekleri eksikti.** 80/96/112 px kartlar ve yüksek piksel yoğunlukları için uygun küçük çözünürlükler eklendi. Çalışma alanı görsellerinin `sizes` tanımı tablet düzenine uyarlandı; mobil portrede 420 px üst sınır dikkate alındı.
5. **İlk ekran animasyonu görünümü geciktiriyordu.** Başlık ve portredeki başlangıç animasyonları kaldırıldı. Portre öncelikli yüklenir; ilk ekrandaki içerik kaydırma animasyonu beklemez.

Kullanılmayan büyük kaynak PNG'ler ilk sayfa isteğinde otomatik olarak indirilmez. Bu nedenle dosyalar silinmedi. Mevcut WebP görseller ve Next.js optimizasyonu korundu. Yeni bir animasyon bağımlılığı eklenmedi. Ana sayfanın yeni istemci modülü üretim raporunda yaklaşık 1,1 KB; ortak Next.js çalışma zamanı yaklaşık 102 KB olarak kalıyor.

## Anasayfa kaydırma efektleri

- Altı çalışma alanı görseli, büro tanıtım görseli ve üç makale görseli için tek bir `IntersectionObserver` kullanılır.
- Büro fotoğrafında krem renkli perde 820 ms içinde yukarı çekilir (mobilde 700 ms). Görsel %6,5 yakınlaşmadan doğal boyutuna 1100 ms içinde oturur; dış çerçeve 24 px hareketle belirir. Perde pseudo-elementi yalnızca bu fotoğraf için oluşturulur. Yalnızca transform ve opacity canlandırılır. Sürekli kaydırma dinleyicisi, parallax ve ağır filtre kullanılmaz.
- Makale kartlarında perde ve giriş yakınlaşması kaldırıldı. Görsel başlangıçta %55 opaklıkla okunabilir kalır; 320 ms opaklık geçişi ve 460 ms içinde 10 px yukarı hareketle doğal konumuna oturur. Masaüstünde sıra farkı 50/100 ms; mobilde sıra beklemesi yoktur. Üzerine gelince %2,5 yakınlaşma kullanılır. Çalışma alanı çiftlerinin sıra farkı 70 ms olarak kalır. Görselin %12'si görünür olduğunda geçiş tetiklenir. Makalelerde renk doygunluğu sabit tutulur; hover sırasında filtre canlandırılmaz.
- Son gezinme revizyonunda küçük çalışma alanı görsellerinden perde kaldırıldı; bu görseller 12 px hareket ve kısa belirmeyle açılır. Büyük fotoğraflarda perde korunur. Gezinme değişiklikleri ve son kontroller `NAVIGASYON-YENILEME.md` içindedir; aşağıdaki Lighthouse/kare ölçümleri bu son revizyondan önce alınmıştır.
- Geçiş bir kez çalışır; tamamlanan görsel gözlemden çıkarılır. İlk görünür alan bekletilmez.
- `prefers-reduced-motion` tercihi açılışta ve sonradan değiştirildiğinde uygulanır. Klavye odağı gizli bir görsele geldiğinde görsel hemen görünür olur.
- JavaScript veya IntersectionObserver olmadığında içerik görünür kalır. Sayfalar sunucu bileşeni olarak korunur.

## Doğrulama

- `npm run build`, `npm run lint`, `npm run typecheck`, `git diff --check`: geçti.
- 28 içerik sayfası HTTP 200 ve tek H1 kontrolünden geçti; derlemede 33 statik çıktı oluşturuldu.
- Chrome'da 390, 820 ve 1440 px: yatay taşma ve JavaScript hatası yok.
- Efektin tek sefer çalışması, hareket azaltma tercihi, mobil menü, sayfa geçişi, klavye odağı, JavaScript kapalı durum ve IntersectionObserver olmayan durum kontrol edildi.
- Mobil/masaüstü görseller ve portre kalite karşılaştırması incelendi.
- Ham Lighthouse raporları `.cache/performance-{before,after}-{mobile,desktop}.json`; tarayıcı kontrolleri `.cache/performance-browser-checks.json`; ekran görüntüleri `.cache/previews/performance-*.png` altında, takip edilmeyen yerel dosyalardır.

Değişiklikler yerelde hazırdır; dağıtım yapılmadı. Yayından sonra aynı canlı adres üzerinde birkaç Lighthouse koşusunun medyanı ve varsa gerçek kullanıcı Core Web Vitals verileri izlenmelidir.

## Araştırma kaynakları

- [web.dev — Optimize Largest Contentful Paint](https://web.dev/articles/optimize-lcp): ilk ekran görselinin erken keşfi, önceliği ve çizim gecikmesi.
- [Next.js 15 — Image](https://nextjs.org/docs/15/app/api-reference/components/image): kalite, responsive sizes, imageSizes ve statik import.
- [MDN — Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API): sürekli kaydırma dinleyicisi olmadan görünürlük takibi.
- [MDN — prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion): hareket azaltma tercihine uyum.

## Perde geçişi araştırması ve son kontrol

Son makale kartı sadeleştirmesinde `web.dev/articles/animations-guide` ve `web.dev/learn/css/transitions` tekrar incelendi. Üretim derlemesi (lint/tür kontrolleri dahil) ve 390/820/1440 px kontrolleri geçti. Makalelerde pseudo-element perdenin oluşmadığı, bekleyen görselin %55 opaklıkta kaldığı, giriş yakınlaşması olmadığı ve görünür durumda normal konum/opaklığa döndüğü doğrulandı. Büro perdesi, tek seferlik çalışma, hareket azaltma, klavye odağı ve JavaScript kapalı davranışları da kontrol edildi. Aşağıdaki Lighthouse ve kare süresi ölçümleri önceki geçiş sürümüne aittir; bu son değişiklik için yeni puan ölçülmedi.

Basit belirme önceki sürümde yeterince belirgin bulunmadı. Kurumsal tasarım için krem perde + hafif yakınlaşmadan oturma seçildi. Animasyonlu clip-path yerine mevcut görsel çerçevesi içinde bir pseudo-elementin scaleY dönüşümü kullanıldı. [web.dev animasyon rehberi](https://web.dev/articles/animations-guide), canlandırılan özellikleri transform ve opacity ile sınırlamayı ve katmanları ölçmeden sürekli will-change uygulamamayı önerir. Bu uygulama kalıcı will-change eklemez; perde ve görsel yalnızca görünürlük tetiklenince hareket eder. Tasarım seçimi bu projeye özgüdür; rehberde önerilen hazır bir hukuk sitesi efekti değildir.

Son derleme/lint/tür kontrolleri ve 390/820/1440 px tarayıcı kontrolleri geçti. Perdenin tamamen açıldığı, görselin doğal boyutuna döndüğü ve hareket azaltma tercihinde perdenin oluşmadığı ayrıca doğrulandı. Son yerel mobil Lighthouse: 98/100, LCP 2,3 sn, CLS 0,029, TBT 50 ms (`.cache/performance-curtain-mobile.json`).

Kaydırma için ayrı Chrome testi: 4 kat işlemci yavaşlatmasıyla 390 ve 1440 px görünümlerde 22 kaydırma adımı, son animasyonların tamamlanması dahil örneklendi. Her iki görünümde de Long Tasks API'nin bildirdiği 50 ms üzeri ana iş parçacığı görevi yoktu; kare aralığı %95 yüzdelikte sırasıyla 16,8 ve 16,6 ms idi. Her koşuda üç adet 50 ms üzeri kare aralığı görüldü. Bu sonuçlar her cihazda kesintisiz 60 FPS garantisi değildir; mevcut laboratuvar ortamının ölçümüdür. Ham kayıt `.cache/motion-profile.json` içindedir.
