/* eslint-disable react/prop-types */
import * as FAIcons from "react-icons/fa";

export default function TodoFAIcon({ icon }) {
  const FAIcon = icon ? FAIcons[icon] : null;

  return <>{icon ? <FAIcon /> : <FAIcons.FaBan />}</>;
}
