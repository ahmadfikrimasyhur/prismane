import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
// Utils
import { strip, fr } from "../../../utils";

export type DrawerFooterProps = FlexProps<"div">;

const DrawerFooter = forwardRef<HTMLDivElement, DrawerFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Flex
        of="hidden"
        w="100%"
        mt="auto"
        pt={fr(6)}
        self="end"
        className={strip(
          `${className ? className : ""} PrismaneDrawerFooter-root`
        )}
        data-testid="prismane-drawer-footer"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default DrawerFooter;
