import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import gallery from '../data/gallery.json'

export default function Gallery() {
  const [index, setIndex] = useState(-1)

  const slides = gallery.map((img) => ({
    src: img.imageUrl,
    alt: img.alt,
  }))

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-2 text-gray-900">Gallery</h1>
      <p className="text-gray-500 mb-10">{gallery.length} images</p>

      {gallery.length === 0 ? (
        <p className="text-gray-400 text-center py-20">No images yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((img, i) => (
            <button
              key={img._id}
              onClick={() => setIndex(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <img
                src={img.thumbUrl}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {img.caption && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                  <p className="w-full text-white text-sm px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {img.caption}
                  </p>
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </div>
  )
}
