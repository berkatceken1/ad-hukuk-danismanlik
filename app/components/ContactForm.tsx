'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simüle edilmiş form gönderimi
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                consent: false
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitStatus === 'success') {
        return (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">Mesajınız Başarıyla Gönderildi!</h3>
                <p className="text-green-700 mb-4">
                    En kısa sürede size dönüş yapacağız.
                </p>
                <button
                    onClick={() => setSubmitStatus('idle')}
                    className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
                >
                    Yeni Mesaj Gönder
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">İletişim Formu</h2>
                <p className="text-gray-600">
                    Hukuki sorularınız için formu doldurun, size en kısa sürede dönüş yapacağım.
                </p>
            </div>

            {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-red-700">Bir hata oluştu. Lütfen tekrar deneyin.</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Ad Soyad */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Ad Soyad *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                            placeholder="Adınız ve soyadınız"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            E-posta *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                            placeholder="ornek@email.com"
                        />
                    </div>

                    {/* Telefon */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Telefon
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                            placeholder="+90 555 123 45 67"
                        />
                    </div>

                    {/* Konu */}
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                            Konu *
                        </label>
                        <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        >
                            <option value="">Konu seçiniz</option>
                            <option value="ticaret-hukuku">Ticaret Hukuku</option>
                            <option value="is-hukuku">İş Hukuku</option>
                            <option value="aile-hukuku">Aile Hukuku</option>
                            <option value="ceza-hukuku">Ceza Hukuku</option>
                            <option value="gayrimenkul">Gayrimenkul Hukuku</option>
                            <option value="icra-iflas">İcra İflas</option>
                            <option value="diger">Diğer</option>
                        </select>
                    </div>
                </div>

                {/* Mesaj */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mesajınız *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                        placeholder="Hukuki sorunuzu detaylı bir şekilde açıklayın..."
                    />
                </div>

                {/* KVKK Onayı */}
                <div className="flex items-start">
                    <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                        className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="consent" className="ml-3 text-sm text-gray-700">
                        <span className="text-red-500">*</span> Kişisel verilerimin işlenmesini kabul ediyorum.
                        <a href="/gizlilik" className="text-primary hover:underline ml-1">
                            Gizlilik politikasını
                        </a> okudum ve kabul ediyorum.
                    </label>
                </div>

                {/* Gönder Butonu */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={isSubmitting || !formData.consent}
                        className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Gönderiliyor...
                            </>
                        ) : (
                            'Mesaj Gönder'
                        )}
                    </button>
                </div>
            </form>

            {/* İletişim Bilgileri */}
            <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Alternatif İletişim Yolları</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-medium text-gray-900">Telefon</p>
                            <a href="tel:+905551234567" className="text-primary hover:underline">+90 555 123 45 67</a>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-medium text-gray-900">E-posta</p>
                            <a href="mailto:info@adhukuk.com" className="text-primary hover:underline">info@adhukuk.com</a>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-medium text-gray-900">Adres</p>
                            <p className="text-gray-600">İstanbul, Türkiye</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
