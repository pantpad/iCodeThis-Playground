/* eslint-disable react/prop-types */
export default function GlowButton({ children, ...props }) {
  return (
    <button {...props}>
      <span>{children}</span>
    </button>
  );
}
