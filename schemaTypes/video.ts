// sanity/schema/video.js or similar
export default {
  name: 'video',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'videoUrl',
      type: 'file',
      title: 'Video File',
      description: 'Upload or reference the video file here.',
    },
  ],
}
