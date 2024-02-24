// Schema for uploading a video
export default {
  name: 'video',
  title: 'Video Upload',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter the title of the video',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Describe the video content',
    },
    {
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      description: 'Upload the video file (MP4, MOV, etc.)',
      options: {
        accept: 'video/mp4,video/x-m4v,video/*',
      },
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      description: 'Upload a thumbnail image for the video',
      options: {
        accept: 'image/*',
      },
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'Set the date and time when the video will be published',
    },
  ],
}
