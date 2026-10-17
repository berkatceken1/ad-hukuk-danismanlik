# AD Hukuk ve Danışmanlık — tasarım planı

## Referans incelemesi

17 Ekim 2026 tarihinde https://melikenurozdogan.av.tr/ adresi Chrome üzerinden incelendi. Ana sayfa, faaliyet alanları, portreli büro tanıtımı, çalışma ilkeleri ve hakkımızda sayfası gözlemlendi.

Referansın geniş serif başlıkları, sade gezinmesi ve kurumsal düzeni temel alındı. AD Hukuk için içerik, görsel yerleşimi ve sayfa akışı özgün oluşturuldu. Kullanıcının son tercihi ferah, açık zeminli ve bordo marka kimliğini vurgularda taşıyan bir tasarımdır.

## Görsel sistem

- Ana marka rengi: `#5d0c0c`; koyu tonu: `#3d0808`; açık tonu: `#7d1010`. Bunlar depodaki özgün marka tanımlarıdır. Mevcut PNG logo beyaz ve saydamdır; bordo piksel içermez.
- Ana zemin beyaz `#ffffff`, tanıtım ve büro yüzeyleri sıcak kırık beyaz `#f6f3ed`, ilkeler ve ofis paneli açık adaçayı `#eaf0e9` kullanır. Metinler kömür `#302b29`, gövde `#554e49`, ikincil metin `#69615b`; ince dekoratif çizgiler mat pirinç `#aa8a60`. Bordo butonlarda, başlık vurgularında ve özgün beyaz logonun zemininde korunur. Altbilgi koyu bordo kalır.
- Başlıklarda Lora (normal ve gerçek italik); gövde, gezinme ve çalışma alanı kartlarında Manrope. Türkçe karakterler için latin-ext.
- İnce sınırlar, geniş boşluklar ve ölçülü geçişler kullanılır. Butonlar 6 px; kart grubunun dış çerçevesi 12 px; ofis paneli 16 px yuvarlatılır. Fotoğraflarda asimetrik ve ölçülü köşeler kullanılır; kartların iç ızgarası ve bölüm çizgileri kare kalır. Hareket azaltma tercihi desteklenir.

## Bileşenler

| Bileşen                       | İşlev                                                          |
| ----------------------------- | -------------------------------------------------------------- |
| Navbar / Brand                | İletişim şeridi, aktif sayfa, mobil menü ve görüşme bağlantısı |
| HomePage                      | Tanıtım, çalışma alanları, büro tanıtımı, ilkeler ve makaleler |
| PageIntro                     | İç sayfalarda konum bağlantıları, başlık ve açıklama           |
| PracticeGrid / PracticeDetail | 12 çalışma alanı için ortak sunucu şablonları                  |
| ArticleCard / BlogIndex       | Makale kartları, konu filtreleri ve sayfalama                  |
| AttorneyPortrait              | Doğal en-boy oranında, kırpılmayan ve yukarı hizalanan portre  |
| ContactSection / Footer       | Telefon, e-posta, ofis ve yasal bağlantılar                    |
| ButtonLink / Icon             | Ortak etkileşim ve simge dili                                  |

## Fotoğraf çalışması

Kaynak `public/images/alideniz.jpg`, GPT Images ile düzenlendi. İlk çıktı `alideniz-profesyonel-v2`, daha soğuk bordo fonlu alternatif `alideniz-profesyonel-v3` adıyla PNG ve WebP olarak ayrı saklanır. Orijinaller korunur. Site ilk düzenlemeyi kullanır; ikinci varyasyon değerlendirme için ayrı tutulur.

Portre masaüstünde 24, mobilde 12 piksel yukarı hizalanır; fotoğrafa kırpma veya esnetme uygulanmaz. Makale imzası tipografik işaret kullanır. Kaynak, çıktılar ve tam talimatlar `docs/FOTOGRAF-DUZENLEME.md` içindedir. Karşılaştırma `/previews/portre-karsilastirma.html` adresinde açılır ve arama motorlarına kapalıdır.

## Uygulama ve doğrulama

Mevcut URL'ler ve hukuki içerikler korunur. İletişim bilgileri ortak kaynaktan alınır; yapılandırılmış veriler, site haritası ve robots dosyası bununla tutarlı üretilir. Lint, TypeScript, üretim derlemesi, HTTP durumları, mobil menü, filtreler, sayfalama ve duyarlı yerleşimler kontrol edilir. Ayrıntılar `docs/KONTROL-RAPORU.md` içindedir.

Bu çalışma yerel depo ve çalışan önizlemeyi kapsar. Kullanıcı talebiyle commit son onaya kadar atılmaz. İletişim mevcut telefon, e-posta ve harita kanallarıyla çalışır. Hukuki metinlerin güncellik denetimi bu tasarım çalışmasının kapsamında değildir.

## Palet kaynakları

- Adobe Express: https://www.adobe.com/uk/express/learn/blog/color-with-burgundy — bordo ile krem ve açık nötrlerin dengesi.
- W3C: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html — metin kontrastının değerlendirilmesi.

## Ana sayfa sadeleştirmesi

Ana sayfa beş bölümden oluşur: portreli tanıtım, kısa çalışma alanları ızgarası, ilkelerle birleştirilmiş büro özeti, başlık odaklı üç makale ve kısa iletişim çağrısı. İkinci portre, ayrı ilkeler bölümü, kart açıklamaları ve tekrar eden iletişim metinleri ana sayfadan kaldırıldı. İç sayfalardaki detaylar korunur. Hafif giriş, destekleyen tarayıcılarda kaydırma animasyonu ve hover hareketleri kullanılır; hareket azaltma tercihi tüm animasyonları kapatır.

## Tipografi ve üst bar

Google Fonts kaynakları incelenerek ekran için tasarlanan Lora ve sade Manrope eşleşmesi seçildi. Kaynaklar: https://github.com/google/fonts/blob/main/ofl/lora/DESCRIPTION.en_us.html ve https://github.com/google/fonts/blob/main/ofl/manrope/DESCRIPTION.en_us.html. Çalışma alanı kartlarındaki sıra numaraları kaldırıldı. Üst bardaki konum kaldırıldı; masaüstünde e-posta ve telefon, mobilde kısa E-posta etiketi ve telefon gösterilir.
