import Image from "next/image";
import portrait from "../../public/images/alideniz.png";

export default function AttorneyPortrait() {
  return (
    <figure className="attorney-portrait">
      <Image
        src={portrait}
        alt="Av. Ali Deniz"
        width={1086}
        height={1448}
        style={{
          aspectRatio: "1122 / 1402",
          objectFit: "contain",
          objectPosition: "center",
        }}
        quality={85}
        sizes="(max-width: 760px) 90vw, 400px"
      />
      <figcaption>
        <span>KURUCU AVUKAT</span>
        <strong>Av. Ali Deniz</strong>
      </figcaption>
    </figure>
  );
}
