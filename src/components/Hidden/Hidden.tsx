import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "../Box/Box";
// Utils
import { strip } from "../../utils";

export type HiddenProps = BoxProps<"span">;

const Hidden = forwardRef<HTMLSpanElement, HiddenProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Box
        as="span"
        w={0}
        h={0}
        of="hidden"
        dp="block"
        className={strip(`${className ? className : ""} PrismaneHidden-root`)}
        data-testid="prismane-hidden"
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default Hidden;
