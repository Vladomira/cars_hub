export interface SideBarNavProps {
  setIsOpen: (prop: boolean) => void;
}

export type UserAreaProps = {
  boxStyles?: string;
  color?: string;
  photo: string;
  sideBar?: boolean;
  backgroundTest?: string;
};
export type ThumbProps = {
  selected: boolean;
  onClick: () => void;
  image: string;
};
