import { ReactNode, forwardRef, useRef } from "react";
// Components
import Field, { FieldProps } from "../Field/Field";
import Transition, { TransitionProps } from "../Transition/Transition";
import Flex from "../Flex/Flex";
import Text from "../Text/Text";
// Hooks
import { useFieldProps } from "../Field";
import useEmulatedFieldChange from "../../hooks/useEmulatedFieldChange";
// Types
import { PrismaneFieldComponent } from "../../types";
// Utils
import { variants, fr } from "../../utils";

export type SegmentedFieldProps = {
  options?: {
    element: ReactNode;
    value: string;
  }[];
} & FieldProps<"input">;

const SegmentedField = forwardRef<HTMLInputElement, SegmentedFieldProps>(
  ({ options = [], label, error, size = "base", sx, ...props }, ref) => {
    const [rest, field] = useFieldProps(props);

    const fieldRef = useRef(ref || null);

    const emulateChange = useEmulatedFieldChange(fieldRef, props.onChange);

    return (
      <Field.Wrapper {...rest}>
        <Field.Label
          size={size}
          htmlFor={field.name}
          className="PrismaneSegmentedField-label"
        >
          {label}
        </Field.Label>
        <Field
          size={size}
          px={fr(0)}
          py={fr(0)}
          className="PrismaneSegmentedField-root"
          sx={{
            ".PrismaneField-field": {
              display: "none",
            },
            ...sx,
          }}
          addons={
            <Field.Addon
              ml={0}
              h="100%"
              w="100%"
              p={fr(1)}
              br="base"
              bs="border-box"
              gap={fr(1)}
            >
              {options.map((option: Option, index: number) => (
                <Transition
                  as={Flex}
                  align="center"
                  justify="center"
                  grow
                  h="100%"
                  bs="border-box"
                  br="base"
                  py={variants(size, {
                    xs: fr(0.5),
                    sm: fr(1),
                    base: fr(1.5),
                    md: fr(2),
                    lg: fr(2.5),
                  })}
                  px={variants(size, {
                    xs: fr(4),
                    sm: fr(5),
                    base: fr(6),
                    md: fr(7),
                    lg: fr(8),
                  })}
                  cs="pointer"
                  bsh={props.value === option.value ? "sm" : "none"}
                  bg={(theme) =>
                    theme.mode === "dark"
                      ? props.value === option.value
                        ? ["base", 700]
                        : "transparent"
                      : props.value === option.value
                      ? "white"
                      : "transparent"
                  }
                  cl={(theme) =>
                    theme.mode === "dark"
                      ? [
                          props.value === option.value
                            ? ["base", 200]
                            : ["base", 500],
                          { hover: ["base", 200] },
                        ]
                      : [
                          props.value === option.value
                            ? ["base", 700]
                            : ["base", 500],
                          { hover: ["base", 700] },
                        ]
                  }
                  onClick={() => {
                    emulateChange(option.value);
                  }}
                  key={index}
                >
                  <Text
                    fs={variants(size, {
                      xs: "xs",
                      sm: "sm",
                      base: "sm",
                      md: "base",
                      lg: "md",
                    })}
                  >
                    {option.element}
                  </Text>
                </Transition>
              ))}
            </Field.Addon>
          }
          data-testid="prismane-segmented-field"
          ref={fieldRef}
          {...field}
          variant="filled"
          bg={(theme) =>
            theme.mode === "dark" ? ["base", 800] : ["base", 200]
          }
        />
        <Field.Error size={size} className="PrismaneSegmentedField-error">
          {error}
        </Field.Error>
      </Field.Wrapper>
    );
  }
);

export default SegmentedField;
