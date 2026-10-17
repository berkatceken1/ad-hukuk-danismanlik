export default function Brand({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand ${light ? "brand-light" : ""}`}>
      <span className="brand-monogram" aria-hidden="true">
        A<span>D</span>
      </span>
      <span className="brand-text">
        <strong>AD HUKUK</strong>
        <span>VE DANIŞMANLIK</span>
      </span>
    </span>
  );
}
