import type { SanityAsset } from "@sanity/image-url/lib/types/types";
import { useState } from "react";
import { urlForImage } from "../../sanity/lib/url-for-image";
import PreviewModal from "./preview-modal";

const Gallery = ({ gallery }: { gallery: { asset: SanityAsset }[] }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const galleryImages =
    gallery?.map((image) =>
      urlForImage(image.asset).format("webp").fit("fill").url()
    ) || [];
  console.log(modalOpen, "modalOpen");
  console.log(modalIndex, "modalIndex");
  function openModal(idx: number) {
    setModalIndex(idx);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Project Gallery
        <span className="inline-block ml-1">_</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {gallery?.map((image, index) => (
          <div onClick={() => openModal(index)} className="cursor-pointer" key={index}>
            <img
              src={urlForImage(image.asset).format("webp").fit("fill").url()}
              height={256}
              width={320}
              alt={`Project gallery ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
          </div>
        ))}
      </div>
      {modalOpen && (
        <PreviewModal
          images={galleryImages}
          initialIndex={modalIndex}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Gallery;
