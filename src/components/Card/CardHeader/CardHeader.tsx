import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
// Utils
import { strip, fr } from "../../../utils";

export type CardHeaderProps = FlexProps<"div">;

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Flex
        of="hidden"
        w="100%"
        mb={fr(2)}
        className={strip(
          `${className ? className : ""} PrismaneCardHeader-root`
        )}
        data-testid="prismane-card-header"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default CardHeader;
