import { forwardRef, ForwardedRef } from "react";
import { UserCircle } from "@phosphor-icons/react";
// Components
import Center from "../Center/Center";
import Circle, { CircleProps } from "../Circle/Circle";
import Flex from "../Flex/Flex";
import Icon from "../Icon/Icon";
import Image from "../Image/Image";
// Types
import { Versatile, PrismaneColors, PrismaneBreakpoints } from "../../types";
// Utils
import { strip, variants, fr } from "../../utils";

export type AvatarProps<E extends Versatile> = {
  src?: string;
  srcSet?: string;
  alt?: string;
  sizes?: string;
  color?: PrismaneColors;
  size?: PrismaneBreakpoints;
} & CircleProps<E>;

const Avatar = forwardRef(
  <E extends Versatile>(
    {
      src,
      srcSet,
      alt,
      sizes,
      color,
      size = "base",
      children,
      className,
      sx,
      ...props
    }: AvatarProps<E>,
    ref: ForwardedRef<any>
  ) => {
    const isImage = src
      ? /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(src)
      : false;

    return (
      <Circle
        size={variants(size, {
          xs: fr(8),
          sm: fr(12),
          base: fr(16),
          md: fr(20),
          lg: fr(24),
        })}
        sx={{
          overflow: "hidden",
          ...sx,
        }}
        className={strip(
          `${
            className ? className : ""
          } PrismaneAvatar-root-${size} PrismaneAvatar-root`
        )}
        ref={ref}
        data-testid="prismane-avatar"
        {...props}
      >
        {isImage ? (
          <Image
            src={src}
            srcSet={srcSet}
            sizes={sizes}
            alt={alt}
            w="100%"
            h="100%"
          />
        ) : (
          <Center
            w="100%"
            h="100%"
            bg={(theme) =>
              theme.mode === "dark"
                ? [color || "base", 700, 0.3]
                : [color || "base", 500, 0.3]
            }
          >
            {children ? (
              <Flex
                h="fit-content"
                justify="center"
                items="center"
                cl={(theme) =>
                  theme.mode === "dark"
                    ? [color || "base", 300]
                    : [color || "base", 700]
                }
                fs={variants(size, {
                  xs: "sm",
                  sm: "md",
                  base: "xl",
                  md: "2xl",
                  lg: "3xl",
                })}
              >
                {children}
              </Flex>
            ) : (
              <Icon
                cl={(theme) =>
                  theme.mode === "dark"
                    ? [color || "base", 300]
                    : [color || "base", 700]
                }
                size={variants(size, {
                  xs: fr(6),
                  sm: fr(10),
                  base: fr(12),
                  md: fr(16),
                  lg: fr(18),
                })}
              >
                <UserCircle />
              </Icon>
            )}
          </Center>
        )}
      </Circle>
    );
  }
);

export default Avatar;
