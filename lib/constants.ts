import { PatternRule } from "@/types";

export const manufacturers = [
   "Acura",
   "Alfa Romeo",
   "Aston Martin",
   "Audi",
   "Bentley",
   "BMW",
   "Buick",
   "Cadillac",
   "Chevrolet",
   "Chrysler",
   "Citroen",
   "Dodge",
   "Ferrari",
   "Fiat",
   "Ford",
   "GMC",
   "Honda",
   "Hyundai",
   "Infiniti",
   "Jaguar",
   "Jeep",
   "Kia",
   "Lamborghini",
   "Land Rover",
   "Lexus",
   "Lincoln",
   "Maserati",
   "Mazda",
   "McLaren",
   "Mercedes-Benz",
   "MINI",
   "Mitsubishi",
   "Nissan",
   "Porsche",
   "Ram",
   "Rolls-Royce",
   "Subaru",
   "Tesla",
   "Toyota",
   "Volkswagen",
   "Volvo",
];

export const yearsOfProduction = [
   { title: "Year", value: "" },
   { title: "2015", value: "2015" },
   { title: "2016", value: "2016" },
   { title: "2017", value: "2017" },
   { title: "2018", value: "2018" },
   { title: "2019", value: "2019" },
   { title: "2020", value: "2020" },
   { title: "2021", value: "2021" },
   { title: "2022", value: "2022" },
   { title: "2023", value: "2023" },
];

export const fuels = [
   {
      title: "Fuel",
      value: "Fuel",
   },
   {
      title: "Gas",
      value: "Gas",
   },
   {
      title: "Electricity",
      value: "Electricity",
   },
];

export const footerLinks = [
   {
      title: "About",
      links: [
         { title: "How it works", url: "/" },
         { title: "Featured", url: "/" },
         { title: "Partnership", url: "/" },
         { title: "Bussiness Relation", url: "/" },
      ],
   },
   {
      title: "Company",
      links: [
         { title: "Events", url: "/" },
         { title: "Blog", url: "/" },
         { title: "Podcast", url: "/" },
         { title: "Invite a friend", url: "/" },
      ],
   },
   {
      title: "Socials",
      links: [
         { title: "Discord", url: "/" },
         { title: "Instagram", url: "/" },
         { title: "Twitter", url: "/" },
         { title: "Facebook", url: "/" },
      ],
   },
];
export const carAngles = ["29", "5", "13"]; //33

export const carCharacteristics = ["steering-wheel", "tire", "gas"];
export const passwordPattern: RegExp = /^(?=.*\d)(?=.*\W).+/;
export const emailPattern: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

// form
export const passwordFormRule: PatternRule = {
   value: passwordPattern,
   message:
      "Password should contain at least one number, one special character",
};
export const emailFormRule: PatternRule = {
   value: emailPattern,
   message: "Invalid email address",
};

export const passwordLengthRule = {
   value: 6,
   message: "Password must be at least 6 characters",
};

// sidebar
export const userBackgrounds = [
   "abstract.jpeg",
   "abstract4.jpeg",
   "art.webp",
   "black-triangles.jpg",
   "dual.jpg",
   "ford.jpg",
   "red-car.jpg",
   "red.jpg",
   "round.jpg",
   "triangles.jpg",
   "waves.webp",
];

// "Background", "Photo",
export const settingList = ["Change image", "Email color"];

// preferences
export const emailColorInit = "#004141";
export const pictureInit = "/tech/user.jpeg";
export const backgroundInit = "/background/abstract4.jpeg";
