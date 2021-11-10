const images = {
  dog: {
    imgName: "Dog",
    uri: require("path/to/local/image"),
  },
  cat: {
    imgName: "Cat on a Boat",
    uri: require("path/to/local/image"),
  },
};

export { images };

//   import { images } from 'relative/path';

// if (cond === 'cat') {
//   let imgSource = images.cat.uri;
// }

// <Image source={imgSource} />
