import { useEffect, useState } from "react";

const Marker = ({ children, ...props }) => {
  const [marker, setMarker] = useState();

  useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(props);
    }
  }, [marker, props]);
};
export default Marker;
