import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContactCall`.
 */
export type ContactCallProps = SliceComponentProps<Content.ContactCallSlice>;

/**
 * Component for "ContactCall" Slices.
 */
const ContactCall = ({ slice }: ContactCallProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for contact_call (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ContactCall;
