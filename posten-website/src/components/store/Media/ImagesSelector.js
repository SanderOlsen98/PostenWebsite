import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useAxios from "../../../hooks/useAxios";

export default function ImagesSelector({ register }) {
  const [media, setMedia] = useState([]);

  const http = useAxios();

  useEffect(function () {
    async function getMedia() {
      try {
        const response = await http.get("wp/v2/media");
        console.log("response", response);
        setMedia(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getMedia();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <select name="featured_media" ref={register}>
      <option value="">Select Image</option>
      {media.map((media) => {
        return (
          <option key={media.id} value={media.id}>
            {media.title.rendered}
          </option>
        );
      })}
    </select>
  );
}

ImagesSelector.propTypes = {
  register: PropTypes.func,
};

ImagesSelector.defaultProps = {
  register: () => {},
};
