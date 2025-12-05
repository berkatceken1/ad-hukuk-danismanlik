import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gizlilik ve KVKK - AD Hukuk ve Danışmanlık',
    description: 'AD Hukuk ve Danışmanlık gizlilik bildirimi, KVKK aydınlatma metni ve çerez politikası.',
};

export default function GizlilikPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-primary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl md:text-4xl font-bold">Gizlilik Politikası</h1>
                    <p className="text-white/80 mt-3 max-w-3xl">Bu bilgilendirme, 6698 sayılı "Kişisel Verilerin Korunması Kanunu" 10. Maddesi gereğince yapılmaktadır.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-xl shadow p-6 md:p-8 text-gray-800 leading-relaxed">
                    <p>
                        07.04.2016 tarihinde resmi gazetede yayınlanarak yürürlüğe giren 6698 sayılı Kişisel Verilerin Korunması Kanunu ("Kanun") kapsamında AD Hukuk ve Danışmanlık, Veri Sorumlusu sıfatına sahip olup, bu sıfatın gerektirdiği yükümlülükleri yerine getirmek için gerekli uyum çalışmalarını gerçekleştirmektedir.
                    </p>
                    <p>
                        Sitemiz SSL sertifikalıdır. Firmamızdan hukuki danışmanlık hizmeti almak için şirketimize bildirilen veya şirketimizce çeşitli kanallarla temin edilen kişisel verileriniz "Kişisel Verilerin Korunması Kanunu" kapsamında "Veri Sorumlusu" sıfatıyla işlenmektedir.
                    </p>
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Kişisel Verilerin İşlenmesi</h2>
                    <p>
                        Kişisel verileriniz işbu Kanun çerçevesinde şirketimiz tarafından muhafaza edilip, vermiş olduğunuz onay çerçevesinde işlenecektir. Belirtmek isteriz ki; Kişisel Verileriniz sizlere daha iyi bir hukuki danışmanlık hizmet deneyimi sağlamak, hizmetlerimize ilişkin bilgilendirme ve iletişimleri gerçekleştirmek, istatistiki bilgi toplamak ve derlemek ve mesleki faaliyetleri geliştirmek amaçlarıyla tarafımızca kullanılabilecektir.
                    </p>
                    <p>
                        Firmamız, müvekkil bilgilerinin gizli tutulması ve bu bilgilerin üçüncü kişilerle paylaşılmamasına büyük önem verir. Tüm çalışanlar, görevlerini yerine getirirken elde ettikleri bilgilerin gizliliğini korumayı ve söz konusu bilgileri sadece mevzuat kapsamında ve mesleki görevlerini yerine getirmede kullanmayı taahhüt etmektedirler.
                    </p>
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Toplanan Kişisel Veriler</h2>
                    <p>
                        Bu sitede form üzerinden veri toplanmamaktadır. Telefon veya e-posta yoluyla bize ilettiğiniz ad, soyad, iletişim bilgileri ve talep içeriği; ayrıca güvenlik ve altyapı logları kapsamında IP ve tarayıcı/cihaz bilgileri işlenebilir. Harita bileşenleri (Google Maps) üçüncü taraf çerezleri kullanabilir; tarayıcı ayarlarınızdan yönetebilirsiniz. Toplanan veriler yasal yükümlülükler çerçevesinde yetkili mercilere ve hizmet aldığımız tedarikçilere aktarılabilir.
                    </p>
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">ÇEREZLER (COOKIE)</h2>
                    <p>
                        Sitede yalnızca sitenin çalışması için gerekli zorunlu teknik çerezler kullanılmaktadır; analitik veya pazarlama amaçlı çerez kullanmıyoruz. Tarayıcı ayarlarınızdan çerezleri yönetebilir veya engelleyebilirsiniz.
                    </p>
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">İlgili Kişi Hakları</h2>
                    <p>
                        Dilediğiniz zaman Kanunun 11. maddesi kapsamında Veri Sorumlusu olan Şirketimize başvurarak kişisel verilerinize ilişkin haklarınızı kullanabilirsiniz. Taleplerinizi <a className="text-primary hover:underline" href="mailto:av.alideniz@outlook.com">av.alideniz@outlook.com</a> adresine iletebilirsiniz.
                    </p>
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Gizlilik Beyanı Değişiklikleri</h2>
                    <p>
                        Bu siteyi kullanmakla, işbu Gizlilik Beyanı'yla bağlı olacağınızı kabul etmektesiniz. Firmamız, işbu Gizlilik Beyanı'nı, kendi iradesiyle değiştirme, bazı bölümlerini çıkarma veya yeni bölümler ekleme hakkını her zaman saklı tutar. Değişikliklerin ardından siteyi kullanmaya devam etmeniz, yeni metni kabul ettiğiniz anlamına gelir.
                    </p>
                </div>
            </div>
        </div>
    );
}


