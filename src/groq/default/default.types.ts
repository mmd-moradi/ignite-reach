

export type SanityImage = {
  _id: string;
  _type: "image";
  alt: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
  crop?: {
    _type: "sanity.imageCrop";
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot?: {
    _type: "sanity.imageHotspot";
    height: number;
    width: number;
    x: number;
    y: number;
  };
};

export type SanityObject = {
  _key: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
};

export type Anchor = {
  href: string;
  isExternal: boolean;
  isEnabled: boolean;
  label: string;
};

export type Field = {
  label: string;
  placeholder: string;
  invalidMessage: string;
};

export type FieldRequired = {
  requiredMessage: string;
} & Field;

export type FieldOptions = {
  options: Array<FieldOption>;
  defaultValue?: string;
} & FieldRequired;

export type FieldOption = {
  id: string;
  label: string;
  value: string;
};

export type CTAButtonType = {
  label: string;
  sublabel: string;
}