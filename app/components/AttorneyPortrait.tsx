import Image from "next/image";

export default function AttorneyPortrait() {
  return (
    <figure className="attorney-portrait">
      <Image
        src="/images/alideniz.png"
        alt="Av. Ali Deniz"
        width={1086}
        height={1448}
        style={{
          aspectRatio: "1122 / 1402",
          objectFit: "contain",
          objectPosition: "center",
        }}
        quality={95}
        sizes="(max-width: 760px) 90vw, 400px"
      />
      <figcaption>
        <span>KURUCU AVUKAT</span>
        <strong>Av. Ali Deniz</strong>
      </figcaption>
    </figure>
  );
}
