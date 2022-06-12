import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  forwardRef,
} from "react";

import clsx from "clsx";

export type HeadlineProps<Element extends ElementType> =
  ComponentPropsWithoutRef<Element> & {
    as?: Element;
  };

const HeadlineWithoutRef = <Element extends ElementType = "h2">(
  { as, className, ...props }: HeadlineProps<Element>,
  ref: ComponentPropsWithRef<Element>["ref"]
) => {
  const Component = as ?? "h2";

  return (
    <Component
      className={clsx(
        "mb-8 text-3xl font-normal sm:mb-16 sm:text-6xl",
        className as string
      )}
      ref={ref}
      {...props}
    />
  );
};

export const Headline = forwardRef(HeadlineWithoutRef);
