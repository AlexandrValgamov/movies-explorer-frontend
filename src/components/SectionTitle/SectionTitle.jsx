import PropTypes from "prop-types";
import "./SectionTitle.css";

export default function SectionTitle({ text }) {
  return (
    <div className="title">
      <h2 className="title__text">{text}</h2>
    </div>
  )
}

SectionTitle.propTypes = {
  test: PropTypes.string
};
