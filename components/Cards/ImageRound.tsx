import classNames from "classnames";
import Image from "next/image";

export default function ImageRound({
  src,
  alt,
  className,
}: {
  alt: string;
  src: string;
  className?: string;
}) {
  return (
    <div className={"rounded-full relative " + className}>
      <Image
        layout="fill"
        objectFit="contain"
        alt={alt}
        src={src}
        className="relative rounded-full"
      />
    </div>
  );
}

export type ImageRoundProps = Parameters<typeof ImageRound>[number];
