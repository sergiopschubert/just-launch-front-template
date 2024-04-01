import Image from "next/image";

export function LogoV1() {
  return (
    <Image width='60' height='59' src={'/logo.svg'} alt="Logo do Just Launch"/>
  );
}
