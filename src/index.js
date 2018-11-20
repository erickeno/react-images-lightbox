import React from "react";
import { render } from "react-dom";
import Lightbox from "react-images";

const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3
  }
];

class App extends React.Component {
  state = {
    lightboxIsOpen: false,
    currentImage: 0
  };

  handleClick = () => {
    this.setState({ lightboxIsOpen: true });
  };
  gotoPrevLightboxImage = () => {
    this.setState((state, props) => {
      if (state.currentImage <= 0) {
        return { currentImage: photos.length };
      }
      return { currentImage: state.currentImage - 1 };
    });
  };
  gotoNextLightboxImage = () => {
    this.setState((state, props) => {
      if (state.currentImage >= photos.length) {
        return { currentImage: 0 };
      }
      return { currentImage: state.currentImage + 1 };
    });
  };
  closeLightbox = () => {
    this.setState({ lightboxIsOpen: false });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Open lightbox</button>
        <Lightbox
          images={photos}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.gotoPrevLightboxImage}
          onClickNext={this.gotoNextLightboxImage}
          onClose={this.closeLightbox}
          showThumbnails
        />
      </div>
    );
  }
}
render(<App />, document.getElementById("app"));
