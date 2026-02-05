import { client } from "@/sanity/lib/client";
import TestimonialsShowcase from "./TestimonialsShowcase";

async function getTestimonials() {
  const testimonials = await client.fetch(`
    *[_type == "testimonial" && featured == true] | order(order asc) {
      _id,
      quote,
      author,
      role,
      company,
      "image": image.asset->url,
      result,
      rating
    }
  `);
  return testimonials;
}

export default async function TestimonialsShowcaseWrapper() {
  const testimonials = await getTestimonials();
  return <TestimonialsShowcase initialTestimonials={testimonials} />;
}
