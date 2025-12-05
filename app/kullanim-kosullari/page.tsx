import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kullanım Koşulları - AD Hukuk ve Danışmanlık',
    description: 'Web sitesi kullanım koşulları, sorumluluk reddi ve telif hakları.',
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-primary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl md:text-4xl font-bold">Kullanım Koşulları</h1>
                    <p className="text-white/80 mt-3 max-w-3xl">Bu internet sitesini ziyaret eden tüm kullanıcılar aşağıdaki şartları kabul etmiş sayılır.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-xl shadow p-6 md:p-8 text-gray-800 leading-relaxed">
                    <h2 className="text-2xl font-semibold text-gray-900">1) Kapsam</h2>
                    <p>Bu site, AD Hukuk ve Danışmanlık tarafından sağlanan bilgilendirme içeriklerine ve iletişim kanallarına erişim amacıyla yayımlanmaktadır. Siteyi kullanmanız, işbu koşulları ve ilgili gizlilik politikasını kabul ettiğiniz anlamına gelir.</p>
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8">2) Bilgilendirme ve Sorumluluk Reddi</h2>
                    <p>Sitede yer alan metinler, makaleler ve açıklamalar yalnızca genel bilgi amacı taşır; hukuki görüş, danışmanlık veya reklam niteliğinde değildir. Her somut olayın koşulları farklı olduğundan, sitedeki içeriklere dayanılarak işlem yapılması halinde doğabilecek sonuçlardan sorumluluk kabul edilmez. Hukuki görüş için lütfen doğrudan bizimle iletişime geçiniz.</p>
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8">3) Mesleki Kurallar ve Reklam Yasağı</h2>
                    <p>İçeriklerimiz, Avukatlık Kanunu ve Türkiye Barolar Birliği Meslek Kuralları’na uygun olarak hazırlanmıştır; tanıtım ve bilgilendirme sınırlarını aşmayacak şekilde düzenlenmiştir.</p>
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8">4) Fikri ve Sınai Haklar</h2>
                    <p>Sitedeki tüm metin, görsel, logo ve tasarımlar telif hakkına tabidir. Yazılı izin olmaksızın kopyalanamaz, çoğaltılamaz, yayımlanamaz veya dağıtılamaz. Alıntı yapılması halinde açık kaynak gösterimi zorunludur.</p>
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8">5) Analitik ve Çerezler</h2>
                    <p>Sitede yalnızca sitenin çalışması için gerekli zorunlu teknik çerezler kullanılmaktadır; analitik veya pazarlama çerezleri kullanılmaz. Çerezleri tarayıcı ayarlarınızdan yönetebilir veya engelleyebilirsiniz.</p>
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8">6) Harici Bağlantılar</h2>
                    <p>Siteden üçüncü taraflara (ör. Google Maps) yönlendirme yapılabilir. Bu sitelerin içerik ve politikalarından sorumlu değiliz; bu sitelerin kullanımına ilişkin koşullar ilgili üçüncü taraflarca belirlenir.</p>
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8">7) İletişim ve Randevu</h2>
                    <p>Sitede yer alan telefon ve e‑posta bilgileri randevu ve bilgi talepleri içindir. Elektronik iletişim, avukat‑müvekkil ilişkisi doğurmaz; bu ilişki ancak yazılı vekâletname ve teyit ile kurulur.</p>
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8">8) Değişiklik Hakkı</h2>
                    <p>AD Hukuk ve Danışmanlık, site içeriğini ve işbu koşulları önceden bildirimde bulunmaksızın güncelleyebilir. Güncel metin yayım tarihinde yürürlüğe girer.</p>
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8">9) İletişim</h2>
                    <p>Koşullara ilişkin sorularınız için <a className="text-primary hover:underline" href="mailto:av.alideniz@outlook.com">av.alideniz@outlook.com</a> adresi üzerinden bizimle iletişime geçebilirsiniz.</p>
                </div>
            </div>
        </div>
    );
}


