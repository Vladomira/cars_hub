export type UserStylesInstance = {
  userPhoto: string;
  setUserPhoto: (picture: string) => void;
  changeUserPhoto: (props: ChangePictureProp) => void;
  userBackground: string;
  setUserBackground: (picture: string) => void;

  changeUserBack: (props: ChangePictureProp) => void;
  emailColor: string;
  setEmailColor: (color: string) => void;
  changeEmailColor: (color: string) => void;
};
export const initialUserStyles = {
  userPhoto: "",
  setUserPhoto: () => {},
  changeUserPhoto: () => {},

  userBackground: "",
  setUserBackground: () => {},
  changeUserBack: () => {},

  emailColor: "",
  setEmailColor: () => {},
  changeEmailColor: () => {},
};
export type UserImageProps = {
  path: string;
  setImage: (prop: string) => void;
};

export type ChangePictureProp = {
  photo: Blob;
  setLoading: (prop: boolean) => void;
};

// ****
export type PhotoProps = {
  photo: string;
  setPhoto: (prop: string) => void;
};
export type SettingsPictureProps = {
  image: string;
  setImage: (prop: string) => void;
};

export type SettingsEmailColorProps = {
  setColor: (color: string) => void;
  color: string;
};
export type imageType = "background" | "picture";
