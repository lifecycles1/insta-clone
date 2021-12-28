module.exports = {
  reactStrictMode: true,
  //allowing all domains of images which I will use
  images: {
    domains: [
      "i.imgur.com", //my self-uploaded to imgur images
      // "platform-lookaside.fbsbx.com", //found out that facebook stores its images here
      // "firebasestorage.googleapis.com", //firebase images
      // "lh3.googleusercontent.com", //google images (used for when logging it with google so it can display your profile picture from your google account)
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
    ],
  },
};
