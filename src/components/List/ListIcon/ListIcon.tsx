import { forwardRef } from "react";
// Components
import Icon, { IconProps } from "../../Icon/Icon";
// Utils
import { strip } from "../../../utils";

export type ListIconProps = IconProps;

const ListIcon = forwardRef<HTMLDivElement, ListIconProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Icon
        className={strip(`${className ? className : ""} PrismaneListIcon-root`)}
        data-testid="prismane-list-icon"
        ref={ref}
        {...props}
      >
        {children}
      </Icon>
    );
  }
);

export default ListIcon;
