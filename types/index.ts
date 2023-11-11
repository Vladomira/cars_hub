import { MouseEventHandler, ReactNode } from "react";

export type CustomButtonProps = {
  title: string;
  btnType?: "button" | "submit";
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  iconStyles?: string;
};

// filters
export type SearchManufacturerProps = {
  selected: string;
  setSelected: (manufacturer: string) => void;
};

export type FilterProps = {
  manufacturer: string;
  year: number | string;
  fuel: string;
  limit: number;
  model: string;
};

export type OptionProps = {
  title: string;
  value: string;
};
export type CustomFilterProps = {
  title: string;
  options: OptionProps[];
  setFilter: (filter: string) => void;
};
// **

export type ShowMoreProps = {
  pageNumber: number;
  isNext: boolean;
  setLimit: (limit: number) => void;
};

export type SearchBarProps = {
  setManufacturer: (manufacturer: string) => void;
  setModel: (model: string) => void;
};

export type ChildrenProps = {
  children: ReactNode;
};

export type DeviceType = "mobile" | "desktop";

export interface NavLinkProps {
  title: string;
  href: string;
  children?: React.ReactNode;
  linkStyle?: string;
  handleClick?: () => void;
}

// modal
export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
  modalBoxStyles: string;
}
