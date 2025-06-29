import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      title: "Overview",
      name: "overview",
      type: "text",
    }),
    defineField({
      title: "Tags",
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
        title: 'Status',
        name: 'status',
        type: 'string',
        options: {
          list: [
            {title: 'Beta', value: 'beta'},
            {title: 'Alpha', value: 'Alpha'},
            {title: 'Production', value: 'production'},
            {title: 'Deprecated', value: 'deprecated'}, 
            {title: 'Discontinued', value: 'discontinued'},
            {title: 'Other', value: 'other'},
          ], // <-- predefined valuess
          layout: 'radio' // <-- defaults to 'dropdown'
        }
      }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "name",
      media: "logo",
    },
  },
});
