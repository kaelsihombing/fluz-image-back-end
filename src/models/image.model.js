const axios = require("axios");
const url = "https://www.flickr.com/services/rest/";

class Image {
  static getImage(tag) {
    // console.log("TAG: ", tag);
    return new Promise((resolve, rejects) => {
      axios
        .get(url, {
          params: {
            method: "flickr.photos.search",
            api_key: process.env.FLICKRKEY,
            text: tag,
            format: "json",
            nojsoncallback: 1,
            per_page: 16,
            page: 1,
          },
        })
        .then((response) => {
          //   console.log(response.data.photos);
          let urls = [];
          response.data.photos.photo.forEach((photo) => {
            urls.push(
              `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`
            );
          });

          return resolve({
            data: urls,
            message: "Flickr Public Photos",
          });
        })
        .catch((error) => {
          return rejects({
            message: error.message,
            data: error,
          });
        });
    });
  }
}

module.exports = Image;
