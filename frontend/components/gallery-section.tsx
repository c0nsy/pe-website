"use client"

import { useState } from "react"

// Gallery images organized by service categories
const galleryImages = [
  // Lawn / Landscape
  { src: "/gorgeous_lawncare.jpg", category: "Lawn / Landscape", alt: "Professional lawn care services" },
  { src: "/residential_lawn_gardens.jpg", category: "Lawn / Landscape", alt: "Residential lawn and garden maintenance" },
  { src: "/beautiful_home_garden.jpg", category: "Lawn / Landscape", alt: "Beautiful home garden design" },
  { src: "/home_lawncare.jpg", category: "Lawn / Landscape", alt: "Residential lawn care" },
  { src: "/lawncare.jpg", category: "Lawn / Landscape", alt: "Professional lawn maintenance" },
  { src: "/commerical_lawncare.jpg", category: "Lawn / Landscape", alt: "Commercial lawn care services" },
  { src: "/home_garden_lovely.jpg", category: "Lawn / Landscape", alt: "Lovely home garden" },
  { src: "/commercial_garden.jpg", category: "Lawn / Landscape", alt: "Commercial garden maintenance" },
  { src: "/garden_work.jpg", category: "Lawn / Landscape", alt: "Garden work and maintenance" },
  { src: "/garden.jpg", category: "Lawn / Landscape", alt: "Professional garden care" },
  
  // Hardscape / Softscape
  { src: "/hardscape.jpg", category: "Hardscape / Softscape", alt: "Hardscape installation" },
  { src: "/hardscape2.jpg", category: "Hardscape / Softscape", alt: "Professional hardscape work" },
  { src: "/softscape.jpg", category: "Hardscape / Softscape", alt: "Softscape design" },
  { src: "/hardscape_soft.jpg", category: "Hardscape / Softscape", alt: "Hardscape and softscape combination" },
  { src: "/hardscape_soft2.jpg", category: "Hardscape / Softscape", alt: "Hardscape and softscape design" },
  
  // Spring / Fall Cleanups
  { src: "/spring_cleaning.jpg", category: "Spring / Fall Cleanups", alt: "Spring cleaning services" },
  { src: "/garden_care_prep.jpg", category: "Spring / Fall Cleanups", alt: "Garden preparation and cleanup" },
  { src: "/flowerbeds.jpg", category: "Spring / Fall Cleanups", alt: "Flowerbed maintenance and cleanup" },
  { src: "/commercial_flowerbeds.jpg", category: "Spring / Fall Cleanups", alt: "Commercial flowerbed cleanup" },
  { src: "/apartmentcare_flowerbeds.jpg", category: "Spring / Fall Cleanups", alt: "Apartment flowerbed cleanup" },
  
  // Snow and Ice Management
  { src: "/snow_removal.jpg", category: "Snow and Ice Management", alt: "Snow removal services" },
  { src: "/snow_removal2.jpg", category: "Snow and Ice Management", alt: "Professional snow removal" },
  { src: "/snow_removal_5.jpg", category: "Snow and Ice Management", alt: "Winter snow removal" },
  { src: "/snow_removal8.jpg", category: "Snow and Ice Management", alt: "Commercial snow removal" },
  { src: "/snow_removal_89.jpg", category: "Snow and Ice Management", alt: "24/7 snow removal service" },
  
  // Junk / Graffiti Removal
  { src: "/graffitiremoval.jpg", category: "Junk / Graffiti Removal", alt: "Professional graffiti removal services" },
  
  // Asphalt Maintenance
  { src: "/asphalt_1.jpg", category: "Asphalt Maintenance", alt: "Asphalt maintenance" },
  { src: "/asphalt_2.jpg", category: "Asphalt Maintenance", alt: "Asphalt repair services" },
  { src: "/asphalt_3.jpg", category: "Asphalt Maintenance", alt: "Professional asphalt work" },
  { src: "/asphalt_4.jpg", category: "Asphalt Maintenance", alt: "Asphalt installation" },
  { src: "/asphalt.jpg", category: "Asphalt Maintenance", alt: "Asphalt maintenance and repair" },
  { src: "/asphalt2.jpg", category: "Asphalt Maintenance", alt: "Commercial asphalt services" },
  { src: "/asphalt3.jpg", category: "Asphalt Maintenance", alt: "Asphalt paving services" },
  { src: "/asphalt4.jpg", category: "Asphalt Maintenance", alt: "Professional asphalt maintenance" },
  { src: "/residential_clean_aspalt.jpg", category: "Asphalt Maintenance", alt: "Residential asphalt cleaning" },
  
  // Irrigation Water Systems
  { src: "/home_garden_rainwater.jpg", category: "Irrigation Water Systems", alt: "Irrigation and water system installation" },
  { src: "/sod_install.jpg", category: "Irrigation Water Systems", alt: "Sod installation with irrigation" },
  { src: "/sod.jpg", category: "Irrigation Water Systems", alt: "Irrigation system for sod" },
  
  // Additional Services - Roofing
  { src: "/roofing.jpg", category: "Roofing", alt: "Professional roofing services" },
  
  // Additional Services - Concrete
  { src: "/concretework.jpg", category: "Concrete", alt: "Professional concrete work" },
  
  // Additional Services - Renovations
  { src: "/exterior_reno.jpg", category: "Renovations", alt: "Exterior renovation services" },
  { src: "/interior_renos.jpg", category: "Renovations", alt: "Interior renovation services" },
  
  // Additional Services - Construction
  { src: "/brick_laying.jpg", category: "Construction", alt: "Brick laying services" },
  { src: "/brick_laying2.jpg", category: "Construction", alt: "Professional brick work" },
  
  // Additional Services - Tree Services
  { src: "/tree_cutting.jpg", category: "Tree Services", alt: "Tree cutting and removal" },
  { src: "/tree_work2.jpg", category: "Tree Services", alt: "Professional tree work" },
  
  // Additional Services - Welding
  { src: "/welding.jpg", category: "Welding", alt: "Mobile welding services" },
  { src: "/welding_2.jpg", category: "Welding", alt: "Professional welding work" },
  
  // Additional Services - Interlock Stone
  { src: "/residential_pathstone.jpg", category: "Interlock Stone", alt: "Interlock stone installation" },
  { src: "/stone_garden_home.jpg", category: "Interlock Stone", alt: "Stone garden and home design" },
  { src: "/stone_garden_home2.jpg", category: "Interlock Stone", alt: "Professional stone work" },
  { src: "/stonestepsgarden.jpg", category: "Interlock Stone", alt: "Stone steps and garden design" },
  
  // Additional Services - Deck and Fencing
  { src: "/residential_gazebo.jpg", category: "Deck and Fencing", alt: "Residential gazebo and deck work" },
  { src: "/residential_stairs.jpg", category: "Deck and Fencing", alt: "Residential stairs and decking" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = ["All", ...Array.from(new Set(galleryImages.map(img => img.category)))]
  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <section id="gallery" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-balance">
            Our Work Gallery
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Take a look at some of our recent projects and the quality work we deliver across Southwestern Ontario
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground hover:bg-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  )
}

