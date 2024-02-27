/* eslint-disable react/prop-types */
import * as FAIcons from "react-icons/fa";

export default function TodoFAIcon({ icon, ...props }) {
  const FAIcon = icon ? FAIcons[icon] : null;

  return <>{icon ? <FAIcon {...props} /> : <FAIcons.FaBan {...props} />}</>;
}
