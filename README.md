# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### code along

https://youtu.be/Zb1zVeXLUf8

### what i learnt

- install react-router-dom
- install moment
    - to use for displaying publishedAt video like 1 day ago, 1 hour ago etc instead of timestamp
- how to use browser router, and create route path, including parameter on path
- how to use get youtube data api key and how to use youtude data api
  - youtube data api > VideoCategories > list (how to get video categories id)
  - youtube data api > Videos > list (how to get most popular videos) (https://youtu.be/Zb1zVeXLUf8?t=6174)
- how to display one video dynamically based on the video id, using embed code of a video
  - remove width and height of the embed code
  - remove title of the embed code
  - get the video data using API, in youtube data api docs > Videos > list (by video ID). will get video title, view count, published at, like count, channel title, video description, comment count
  - to get channel thumbnails and subscriber counts : youtube data api docs > Channels > list > list (by channel ID)
  - to get list of comments : youtube data api docs > CommentThreads > list > list (by video ID)
- fetch and display recommended video. basically Videos > list > list (most popular video)
- how to get ID using useParams