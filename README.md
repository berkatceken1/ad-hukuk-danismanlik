# AD Hukuk ve Danışmanlık

Av. Ali Deniz’in Kayseri merkezli hukuk bürosu için Next.js 15, React 19 ve Tailwind CSS 4 ile geliştirilmiş kurumsal web sitesi.

## Yerel çalışma

Node.js 20.9 veya daha yeni bir sürüm kullanın. Depodaki `package-lock.json` ile kurulum yapın:

```sh
npm ci
npm run dev
```

Geliştirme önizlemesi: http://localhost:3000

Üretim kontrolü ve önizlemesi:

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

Üretim sunucusu da http://localhost:3000 adresinde açılır. Aynı portu kullanan geliştirme sunucusunu önce durdurun.

## İçerik ve bileşenler

- `app/lib/site.ts`: ortak iletişim bilgileri, gezinme bağlantıları ve çalışma ilkeleri.
- `app/lib/practice-areas.json`: 12 çalışma alanının başlıkları ve ortak verileri.
- `app/lib/practice-details.ts`: detay sayfalarının kısa tanıtım metinleri.
- `app/lib/presentation.ts`: çalışma alanı fotoğrafları ve kart özetleri.
- `app/blog/posts.ts`: mevcut makale içerikleri.
- `app/components/ui/`: marka, simgeler, düğmeler ve iç sayfa başlıkları.
- `app/components/PracticeDetail.tsx`: çalışma alanlarının ortak sayfa şablonu.
- `app/globals.css`: renk, tipografi, yerleşim ve ekran boyutu kuralları.
- `app/sitemap.ts`, `app/robots.ts`: içerikle birlikte oluşturulan arama motoru dosyaları.
- `docs/TASARIM-PLANI.md`: referans incelemesi, tasarım kararları ve kapsam.
- `docs/FOTOGRAF-DUZENLEME.md`: GPT Images portre çıktıları ve uygulanan talimatlar.

Ana sayfa ve Hakkımızda portresi `public/images/alideniz.png` dosyasını kullanır. Önceki portreler kullanıcı tarafından kaldırılmıştır; fotoğraf düzenleme belgeleri yalnızca tasarım sürecinin geçmiş kaydıdır.

Ana sayfa ve çalışma alanları sunucu bileşenleriyle oluşturulur. Mobil menü, makale filtreleri ve sayfalama için istemci bileşenleri kullanılır. İletişim telefon, e-posta ve harita üzerinden sağlanır.

## Ortam değişkenleri

`.env.example` dosyasını `.env.local` adıyla kopyalayın. Varsayılan site adresi `https://adhukukvedanismanlik.com` olarak tanımlıdır. Farklı bir alan adına dağıtım yaparken `NEXT_PUBLIC_SITE_URL` değerini güncelleyin. Google doğrulama kodu isteğe bağlıdır.

## Dağıtım

Vercel üzerinde Next.js projesi olarak dağıtılabilir. `npm run build` üretim derlemesini oluşturur. Git push işlemi, uzak deponun dağıtım ayarlarına bağlı olarak yayını tetikleyebilir.
