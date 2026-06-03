import Image from 'next/image';

export default function Loading() {
    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary-dark/80 backdrop-blur-md"
            role="status"
            aria-live="polite"
            aria-label="Sayfa yükleniyor"
        >
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-accent/25 bg-primary-dark/70 px-8 py-7 shadow-[0_28px_90px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
                <div className="relative flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-primary-dark to-primary-light shadow-2xl ring-1 ring-accent/45 sm:h-36 sm:w-36">
                    <div className="absolute -inset-3 rounded-3xl border border-accent/15"></div>
                    <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_62%)]"></div>
                    <Image
                        src="/logo/ad-hukuk-logo.png"
                        alt="AD Hukuk ve Danışmanlık"
                        width={112}
                        height={112}
                        priority
                        className="relative z-10 h-24 w-24 object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] sm:h-28 sm:w-28"
                    />
                </div>
                <span className="h-1 w-32 overflow-hidden rounded-full bg-white/15">
                    <span className="block h-full w-1/2 animate-[loadingBar_900ms_ease-in-out_infinite] rounded-full bg-accent shadow-[0_0_16px_rgba(212,175,55,0.75)]"></span>
                </span>
            </div>
        </div>
    );
}
