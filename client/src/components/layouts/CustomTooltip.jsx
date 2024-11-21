import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import PropTypes from "prop-types";

const CustomTooltip = ({ content, trigger }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{trigger}</TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CustomTooltip;
CustomTooltip.proptypes = {
  trigger: PropTypes.node.isRequired,
  contentK: PropTypes.node.isRequired,
};
