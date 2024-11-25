import PropTypes from "prop-types";

const ConditionRender = ({ show = false, children }) => {
  return show ? children : null;
};

export default ConditionRender;
ConditionRender.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node,
};
