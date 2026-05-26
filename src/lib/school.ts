export const SCHOOL = {
  name: "Holy Fathima High School",
  shortName: "Holy Fathima",
  location: "Hafeez Pet",
  tagline: "Knowledge is Power",
  motto: "Education brings perfection · Education is life",
  established: 2003,
  medium: "English",
  address:
    "4-1061/84, New Hafeezpet, Marthanda Nagar, Hafeezpet, Hyderabad, Telangana 500049",
  phones: ["9391668092", "8121731765", "9391837245"],
  email: "info@holyfathimaschool.edu.in",
  whatsapp: "919391668092",
  mapEmbed:
    "https://www.google.com/maps?q=New+Hafeezpet,+Marthanda+Nagar,+Hafeezpet,+Hyderabad,+Telangana+500049&output=embed",
};

export type Branch = {
  id: string;
  name: string;
  address: string;
  phones: string[];
  mapEmbed: string;
};

export const BRANCHES: Branch[] = [
  {
    id: "hafeezpet",
    name: "Main Campus — Hafeez Pet",
    address:
      "4-1061/84, New Hafeezpet, Marthanda Nagar, Hafeezpet, Hyderabad, Telangana 500049",
    phones: ["9133531525", "9603588716"],
    mapEmbed:
      "https://www.google.com/maps?q=New+Hafeezpet,+Marthanda+Nagar,+Hafeezpet,+Hyderabad,+Telangana+500049&output=embed",
  },
];
