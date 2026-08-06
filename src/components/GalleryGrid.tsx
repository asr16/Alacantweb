import Image from "next/image";

export function GalleryGrid({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`relative overflow-hidden rounded-2xl ${
            index === 0 ? "col-span-2 row-span-2 aspect-square sm:aspect-auto sm:h-full min-h-[200px]" : "aspect-square"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
      ))}
    </div>
  );
}
