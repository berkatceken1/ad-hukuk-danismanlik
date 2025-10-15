export type BlogPost = {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    image: string;
    lead: string;
    content: string;
};

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'İş Hukukunda Güncel Eğilimler ve Dikkat Edilmesi Gerekenler',
        excerpt: 'İş ilişkilerinde sözleşme, fesih ve arabuluculuk süreçlerinde öne çıkan başlıklar.',
        category: 'İş Hukuku',
        image: '/images/is1.jpg',
        lead:
            'İş sözleşmelerinin doğru kurgulanması ve fesih süreçlerinin planlanması, uyuşmazlık riskini en baştan düşürür. Arabuluculuk başvurusu ile ispat yükünün dengesi, işveren ve çalışan için farklı stratejiler doğurur.',
        content:
            'İş sözleşmelerinin yazılı şekilde kurulması, deneme süresi, rekabet yasağı ve cezai şart gibi hükümler uygulamada en çok tartışılan başlıklardır. Özellikle belirsiz süreli sözleşmelerde çalışma koşullarının açık, ölçülebilir ve denetlenebilir şekilde tanımlanması ileride doğabilecek uyuşmazlıkları azaltır.\n\nFesih süreçlerinde geçerli neden kavramı ile ispat yükü doğru yönetilmelidir. İşletmesel sebeplere dayalı fesihlerde organizasyon şeması, performans kayıtları ve alternatif istihdam araştırması gibi unsurlar belirleyici olur. Çalışan yönünden ise feshe itiraz ve işe iade süreçlerinde sürelerin kaçırılmaması kritik önemdedir.\n\nArabuluculuk başvuru zorunluluğu, uyuşmazlıkların daha erken ve maliyetsiz biçimde çözümlenmesine imkan tanır. Ancak bu süreçte taleplerin kalem kalem ve dayanaklarıyla belgelendirilmesi, sonuç üzerinde doğrudan etkilidir. Fazla mesai, yıllık izin ve ücret alacakları açısından bordro, puantaj ve yazışmaların düzenli tutulması başarı şansını yükseltir.'
    },
    {
        id: 2,
        title: 'Boşanma Sürecinde Mal Paylaşımı: Bilmeniz Gerekenler',
        excerpt: 'Evlilik birliğinin sona ermesi durumunda mal paylaşımı süreçleri ve haklarınız.',
        category: 'Aile Hukuku',
        image: '/images/bosanma1.jpg',
        lead:
            'Mal rejimi tasfiyesi, boşanma ile paralel yürütülmesi gereken ayrı bir hukuki süreçtir. Doğru delil ve değerleme stratejisi paylaşımın adil yapılmasını sağlar.',
        content:
            'Türk hukukunda mal rejimi bakımından kural edinilmiş mallara katılma rejimidir. Evlilik boyunca edinilen değerler ile kişisel malların ayrımı, paylaşımın temelini oluşturur. Eşlerin evlilik öncesi sahip olduğu mallar, miras ve bağış yoluyla edinilenler kişisel mal sayılır.\n\nGayrimenkul, araç ve şirket paylarının değerlemesinde bilirkişi raporları belirleyicidir. Özellikle şirketlerde ortaklık yapısı, kâr dağıtımı ve tasfiye senaryoları dikkate alınmalıdır. Taraflar arasında yapılacak protokoller, icra edilebilirlik açısından açık ve uygulanabilir hükümler içermelidir.\n\nZamanaşımı ve hak düşürücü sürelerin yönetimi, paylaşım davasının başarısını doğrudan etkiler. Süreç boyunca geçici koruma tedbirleri ve ihtiyati haciz gibi araçlar, mal kaçırma risklerine karşı önem taşır.'
    },
    {
        id: 3,
        title: 'Şirket Kuruluşu: Hangi Şirket Türü Sizin İçin Uygun?',
        excerpt: 'Girişimciler için şirket türleri, avantajları ve kuruluş süreçleri hakkında rehber.',
        category: 'Ticaret Hukuku',
        image: '/images/sirket1.jpg',
        lead:
            'Anonim ve limited şirket arasında seçim yaparken sermaye ihtiyacı, pay devri esnekliği ve yatırım planları birlikte değerlendirilmelidir.',
        content:
            'Anonim şirketler, pay devrindeki esneklik ve yatırımcı girişi açısından çoğu zaman daha elverişlidir. Limited şirketler ise yönetim ve maliyet anlamında daha yalın bir yapı sunar. Esas sözleşmede unvan, faaliyet konusu, pay devir şartları ve imza yetkileri net biçimde kurgulanmalıdır.\n\nKuruluş aşamasında ortaklar arası ilişkileri düzenleyen hissedar sözleşmeleri, ileride doğabilecek çekişmeleri minimize eder. Ticari sözleşmelerin standardizasyonu, marka ve veri koruması, iş ilişkileri ve tedarik yapısının uyumlu tasarlanması büyümenin sürdürülebilirliğini artırır.'
    },
    {
        id: 4,
        title: 'İcra Takibinde Yapılması Gerekenler',
        excerpt: 'Alacaklarınızın tahsili için icra takibi sürecinde dikkat edilmesi gereken noktalar.',
        category: 'İcra İflas',
        image: '/images/icra1.jpg',
        lead:
            'Takip türünün doğru seçimi ve sürelerin yönetimi, tahsilat başarısını doğrudan etkiler.',
        content:
            'İlamsız takip, ilamlı takip ve kambiyo senetlerine özgü takip arasında doğru seçim sürecin hızını belirler. Ödeme emrinin usulüne uygun tebliği, sürelere etkisi bakımından kritik önemdedir. İtirazın kaldırılması/iptali ve menfi tespit davası gibi kurumlar stratejik olarak planlanmalıdır.\n\nHaciz ve satış taleplerinde masraf ve teminat planlaması yapılmalı; borçlunun malvarlığının tespiti için banka, tapu ve trafik kayıtları ile ticaret sicili araştırmaları etkin kullanılmalıdır. Kıymet takdiri, satış sürecinin verimliliğini doğrudan etkiler.'
    },
    {
        id: 5,
        title: 'Gayrimenkul Alım-Satımında Yasal Süreçler',
        excerpt: 'Emlak alım-satımında tapu işlemleri, sözleşme hazırlığı ve dikkat edilmesi gerekenler.',
        category: 'Gayrimenkul Hukuku',
        image: '/images/gayrimenkul1.jpg',
        lead:
            'Tapu kaydı, takyidatlar ve imar durumunun baştan incelenmesi riskleri büyük ölçüde azaltır.',
        content:
            'Satış vaadi ve ön sözleşmelerde taraf yükümlülükleri açıkça düzenlenmelidir. Bedel ödeme planı, teslim ve tescil tarihleri, cezai şart ve cayma hükümleri net olmalıdır. Tapuda yapılacak resmi senet ve noter işlemlerinin koordinasyonu sürecin sağlıklı ilerlemesini sağlar.\n\nProjelerde kat irtifakı/kat mülkiyeti geçişi, iskan ve yönetim planı detayları çoğu uyuşmazlığın kaynağıdır. Bu nedenle sözleşme öncesi teknik ve hukuki inceleme yapılması önerilir.'
    },
    {
        id: 6,
        title: 'Ceza Davalarında Savunma Hakkının Önemi',
        excerpt: 'Ceza hukuku alanında savunma hakkının kullanımı ve süreçler hakkında bilgiler.',
        category: 'Ceza Hukuku',
        image: '/images/ceza1.jpg',
        lead:
            'Soruşturma safhasında müdafi yardımı ve dosyaya erişim, adil yargılanmanın teminatıdır.',
        content:
            'Gözaltı ve ifade işlemleri sırasında savunma hakkının etkin kullanımı, sonraki aşamaları belirleyici ölçüde etkiler. Delillerin toplanması, CMK kapsamında koruma tedbirlerine itiraz ve hukuka aykırı delillerin reddi talepleri savunmanın omurgasını oluşturur.\n\nKovuşturma aşamasında delillerin tartışılması, tanık dinletme ve bilirkişi incelemesi gibi araçların doğru kullanımı önemlidir. Sürelerin takibi ve olağan/olağanüstü kanun yollarının planlanması, hak kayıplarını önler.'
    },
    {
        id: 7,
        title: 'Miras Hukukunda Mal Paylaşımı ve Sık Yapılan Hatalar',
        excerpt: 'Tereke tespiti, saklı pay ve paylaşım aşamalarında dikkat edilmesi gerekenler.',
        category: 'Miras Hukuku',
        image: '/images/miras1.jpg',
        lead:
            'Veraset ilamı alındıktan sonra terekenin doğru tespiti, paylaşımın adil yürütülmesinin ilk adımıdır. Saklı pay ve tenkis hükümleri çoğu uyuşmazlığın merkezindedir.',
        content:
            'Miras açıldığında ilk aşama veraset ilamının temini ve tereke kalemlerinin çıkarılmasıdır. Banka hesapları, taşınmazlar, araçlar ve alacak/borçlar liste halinde belirlenmelidir.\n\nSaklı paylı mirasçılar lehine yapılan aşırı kazandırmalar, tenkis davası konusu olabilir. Vasiyetname ve miras sözleşmeleri ise şekil şartları bakımından titizlikle incelenmelidir.\n\nPaylaşımda izale‑i şuyu (ortaklığın giderilmesi) davası, özellikle taşınmazlarda pratik bir çözüm sunar; ancak satış bedelinin korunması için kıymet takdiri ve satış stratejisi doğru belirlenmelidir. Tüm bu süreçlerde sürelerin ve delillerin planlanması, sonucun başarısını belirler.'
    },
    {
        id: 8,
        title: 'Araç Değer Kaybı Tazminatı: Kim, Nasıl Talep Edebilir?',
        excerpt: 'Sigorta hukukunda kaza sonrası araç değer kaybı hesabı ve başvuru süreci.',
        category: 'Sigorta Hukuku',
        image: '/images/degerkaybi1.jpg',
        lead:
            'Trafik kazası sonrası kusursuz veya az kusurlu araç sahibinin, aracın piyasa değerindeki düşüş için tazminat talep etme hakkı vardır. Doğru hesap ve doğru adres, süreci hızlandırır.',
        content:
            'Değer kaybı tazminatı, kazadan önceki ve sonraki piyasa değerleri arasındaki farkın karşılanmasını amaçlar. Talep, kural olarak karşı tarafın zorunlu trafik sigortacısına yöneltilir. Başvuruda kaza tespit tutanağı, hasar dosyası ve onarım faturaları temel evraklardır.\n\nHesaplama; aracın yaşı, kilometresi, hasar gören parça sayısı ve onarım şekli gibi değişkenleri dikkate alır. Eksper raporları bu aşamada belirleyicidir. Sigorta şirketinin ret veya eksik ödeme yapması durumunda önce sigorta tahkim komisyonu, ardından yargı yolu değerlendirilebilir. Sürelerin kaçırılmaması ve doğru delillerin sunulması başarı şansını artırır.'
    },
    {
        id: 9,
        title: 'Şirketler İçin Hukuki Müşavirlik: Neden ve Nasıl?',
        excerpt: 'Süreklilik arz eden danışmanlık ile sözleşme, iş ve ticaret süreçlerinde risk yönetimi.',
        category: 'Ticaret Hukuku',
        image: '/images/sirket2.jpg',
        lead:
            'Hukuki müşavirlik, şirketlerin günlük operasyonlarında karşılaştığı riskleri daha oluşmadan tespit edip yönetmeyi amaçlar. Proaktif yaklaşım, uyuşmazlık maliyetlerini düşürür.',
        content:
            'Kurumsal danışmanlık kapsamında sözleşme taslağı ve revizyonu, KVKK ve fikri haklar uyumu, iş ilişkileri ve tedarik zinciri sözleşmeleri merkezde yer alır. İyi kurgulanmış sözleşmeler, şirketin ticari hedefleriyle uyumlu koruma sağlar.\n\nUyum programları (compliance), rekabet hukuku ve veri koruma gibi alanlarda iç politika ve eğitimlerle desteklenmelidir. Yönetim kurulu kararları, imza sirküleri ve yetki devri süreçlerinin düzenli yürütülmesi, temsil ve bağlama riskini azaltır.\n\nDüzenli müşavirlik; ihtilafların erken aşamada arabuluculukla çözülmesini kolaylaştırır, dava süreçlerinde ise delil ve strateji hazırlığını hızlandırır. Periyodik raporlama ve risk haritaları, şirketin hukuki görünürlüğünü artırır.'
    }
];


