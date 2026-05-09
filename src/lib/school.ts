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
  phones: ["9133531525", "9603588716"],
  email: "info@holyfathimaschool.edu.in",
  whatsapp: "919133531525",
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
  {
    id: "kollur",
    name: "Branch Campus — Kollur",
    address:
      "H.No 6-36, Indrareddy Nagar, Phase-1, Near KCR Nagar, Kollur, Janwada, Mirzaguda, Shankarpally, Rangareddy Dist - 500075",
    phones: ["7416315599", "7416715599", "7416877599"],
    mapEmbed:
      "https://www.google.com/maps?q=Indrareddy+Nagar+Phase+1+Kollur+Janwada+Shankarpally+Rangareddy+500075&output=embed",
  },
];
