import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../Flex/Flex";
// Types
import { PrismaneWithInternal } from "../../types";
// Utils
import { strip, fr } from "../../utils";

// Internal Components
import BreadcrumbItem, {
  BreadcrumbItemProps,
} from "./BreadcrumbItem/BreadcrumbItem";
import BreadcrumbSeparator, {
  BreadcrumbSeparatorProps,
} from "./BreadcrumbSeparator/BreadcrumbSeparator";

export { type BreadcrumbItemProps, type BreadcrumbSeparatorProps };

export type BreadcrumbProps = FlexProps<"div">;

const Breadcrumb: PrismaneWithInternal<
  BreadcrumbProps,
  { Item: BreadcrumbItemProps<any>; Separator: BreadcrumbSeparatorProps }
> = forwardRef<HTMLDivElement, BreadcrumbProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Flex
        align="center"
        className={strip(
          `${className ? className : ""} PrismaneBreadcrumb-root`
        )}
        gap={fr(2)}
        cl="primary"
        data-testid="prismane-breadcrumb"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Separator = BreadcrumbSeparator;

export default Breadcrumb;
