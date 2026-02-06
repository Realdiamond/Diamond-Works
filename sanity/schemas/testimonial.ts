import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role/Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: 'type',
      title: 'Testimonial Type',
      type: 'string',
      options: {
        list: [
          { title: 'Text', value: 'text' },
          { title: 'Video', value: 'video' },
        ],
      },
      initialValue: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Author Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
    defineField({
      name: 'result',
      title: 'Key Result',
      type: 'string',
      description: 'E.g., "+300% Leads", "4.2x ROI"',
    }),
    defineField({
      name: 'videoThumbnail',
      title: 'Video Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({ document }) => document?.type !== 'video',
    }),
    defineField({
      name: 'videoSource',
      title: 'Video Source',
      type: 'string',
      options: {
        list: [
          { title: 'YouTube Link', value: 'youtube' },
          { title: 'Upload Video File', value: 'upload' },
        ],
      },
      initialValue: 'youtube',
      hidden: ({ document }) => document?.type !== 'video',
    }),
    defineField({
      name: 'videoUrl',
      title: 'YouTube Video URL',
      type: 'url',
      description: 'Paste the full YouTube video URL (e.g., https://www.youtube.com/watch?v=...)',
      hidden: ({ document }) => document?.type !== 'video' || document?.videoSource !== 'youtube',
    }),
    defineField({
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      description: 'Upload video file (MP4 recommended)',
      hidden: ({ document }) => document?.type !== 'video' || document?.videoSource !== 'upload',
    }),
    defineField({
      name: 'videoDuration',
      title: 'Video Duration',
      type: 'string',
      placeholder: 'e.g., 2:30',
      hidden: ({ document }) => document?.type !== 'video',
    }),
    defineField({
      name: 'videoTitle',
      title: 'Video Title',
      type: 'string',
      hidden: ({ document }) => document?.type !== 'video',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      description: 'Show this testimonial in featured sections',
      initialValue: false,
    }),
    defineField({
      name: 'showOnHomepage',
      title: 'Show on Homepage',
      type: 'boolean',
      description: 'Display this testimonial on the homepage carousel',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display (lower numbers appear first)',
      initialValue: 0,
    }),
    defineField({
      name: 'projectReference',
      title: 'Related Project',
      type: 'reference',
      to: [{ type: 'project' }],
      description: 'Link to the related project (optional)',
    }),
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'company',
      media: 'image',
      rating: 'rating',
    },
    prepare(selection) {
      const { title, subtitle, rating } = selection
      return {
        title,
        subtitle: `${subtitle} - ${rating}⭐`,
        media: selection.media,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
