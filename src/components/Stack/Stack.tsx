import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../Flex/Flex";
// Utils
import { strip, fr } from "../../utils";

export type StackProps = FlexProps<"div">;

const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    { gap = fr(2), direction = "column", children, className, ...props },
    ref
  ) => {
    return (
      <Flex
        grow
        direction={direction}
        gap={gap}
        className={strip(`${className ? className : ""} PrismaneStack-root`)}
        data-testid="prismane-stack"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default Stack;
