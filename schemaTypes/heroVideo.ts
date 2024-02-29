// video.js

export default {
  name: 'herovideo',
  title: 'Hero Video',
  type: 'document',
  fields: [
    {
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      description: 'Upload the video file (MP4, MOV, etc.)',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'videoFile.asset.originalFilename',
      media: 'videoFile',
    },
  },
}
