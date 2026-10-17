# Portre düzenlemesi

Kaynak: `public/images/alideniz.jpg` (302 × 352 piksel).

Araç: yerleşik GPT Images / imagegen. Kaynak dosya düzenlemeden önce görsel olarak incelendi. Orijinal dosya korundu.

Çıktılar:

- `public/images/alideniz-profesyonel-v2.png`: düzenlenmiş ana kopya.
- `public/images/alideniz-profesyonel-v2.webp`: aynı görüntünün site için sıkıştırılmış kopyası; yalnızca format dönüşümü uygulandı.

Işık, beyaz dengesi, netlik ve sıkıştırma izleri üzerinde çalışıldı. Beyaz fon, sade ve hafif bordo alt tonlu antrasit bir stüdyo fonuna dönüştürüldü. Düzenleme talimatı; yüz kimliğinin, ifadenin, saçın, cübbenin, renklerin ve doğal vücut oranlarının korunmasını özellikle ister. Yeni portre ana sayfa ve hakkımızda bölümlerinde doğal en-boy oranıyla kullanılır.

## Uygulanan tam talimat

İlk sürümün ardından kullanıcı daha cool bir fotoğraf alternatifi istedi. `alideniz-profesyonel-v3.png` ve `.webp` bu ikinci düzenlemeyi içerir. İfade, kıyafet ve kadrajı korumak; turuncu renk baskısını azaltmak ve fonu soğuk bordo / antrasite taşımak hedeflendi. İlk çıktı korundu. Son alternatif otomatik olarak siteye geçirilmedi; `public/previews/portre-karsilastirma.html` değerlendirme sayfasında kaynak ve iki sonuç birlikte gösterilir.

### İkinci düzenleme talimatı

Use case: identity-preserve, very restrained photographic color-grade refinement. Image 1 (alideniz-profesyonel-v2.png) is the EDIT TARGET and must remain almost identical. Image 2 (the original small alideniz.jpg) is an IDENTITY REFERENCE ONLY. The person already likes image 1. Make a second, slightly cooler and more understated professional option, changing ONLY white balance, the backdrop color, and very gentle photographic light balance. Preserve the exact face, facial structure, hair silhouette, brow and eye shapes, eye spacing, gaze, facial expression, mouth, nose, jaw, apparent age, body and shoulder geometry, robe, red and green lapels, patterned red tie, crop and framing of image 1. Do not beautify, reshape, slim, enlarge eyes, add smile, alter facial features or invent details. Keep realistic skin pores and the same skin tone; gently reduce the warm orange/yellow cast without making the face pale, gray or blue. Backdrop: smooth, quiet dark charcoal with a subtle COOL deep burgundy/plum undertone, approximately #261924, with soft understated falloff and enough separation from the black hair and robe. It should match a refined dark burgundy law firm website. Keep the face naturally and evenly lit; preserve believable shadow depth. Subtly soften only harsh shiny highlights while retaining texture. Do not add theatrical rim lighting, blue cinematic light, props, text, logos or borders. This is a minimal photographic finishing pass, not a new portrait. Preserve the 4:5 portrait composition and output a polished photorealistic result.

### İlk düzenleme talimatı

Use case: identity-preserve. Asset type: professionally restored portrait for the subject's own law firm website. Input image 1 is the EDIT TARGET: the local photograph alideniz.jpg, a small low-resolution photo of this exact man wearing a Turkish lawyer's black robe with red and green lapels, white shirt and red patterned tie. Carefully restore and polish this specific photograph; do not invent a different person. Preserve the subject's recognizable facial identity, facial geometry, eye spacing and shape, nose, lips, jaw, apparent age, skin tone, hairline and hairstyle, direct gaze, calm serious expression, natural head and shoulder proportions, pose, robe and all garment colors and details. Improve only photographic quality: clean JPEG/compression artifacts, balanced soft studio light, neutral white balance, modest contrast, natural texture and believable clarity. Avoid excessive skin smoothing, beauty retouching, sharpened halos, stylized eyes, altered facial shape or body shape. Replace the white backdrop with a quiet seamless neutral dark charcoal studio background with a very subtle warm burgundy undertone, not an office scene. Keep the face well lit and clearly separated from the backdrop. Refine the portrait composition into a natural head-and-upper-chest portrait, 4:5 aspect ratio, with comfortable headroom; do not stretch, distort or clip the hair. Photorealistic professional restoration, understated and realistic. No lettering, logos, ornaments, props, frames, or watermark.
