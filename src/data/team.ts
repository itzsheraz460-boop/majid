// Fake team data for the TeamSection component
export type TeamMember = {
  name: string;
  role: string;
  img: string; // path to image (public folder or remote URL)
  phone?: string; // optional contact number
  bio?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Majid",
    role: "Director",
    img: "/images/majid.jpg",
    phone: "03036751871",
    bio: "Founder and creative director of Majid Funny Video.",
  },
  {
    name: "Sheraz",
    role: "Cameraman & Editor",
    img: "/images/sheraz_cameraman.png",
    phone: "03711723621",
    bio: "Handles camera work and editing.",
  },
  {
    name: "Shoaib",
    role: "Actor",
    img: "/images/shoaib.jpg",
    phone: "03142900496",
    bio: "",
  },
  {
    name: "Sajid",
    role: "Actor",
    img: "/images/sajid.png",
    phone: "03277371281",
    bio: "",
  },
  {
    name: "Arshad",
    role: "Actor",
    img: "/images/arshad.png",
    phone: "03013195167",
    bio: "",
  },
  {
    name: "Sheraz",
    role: "Actor",
    img: "/images/sheraz_actor.jpg",
    phone: "03711723621",
    bio: "",
  },
  {
    name: "Shoaib RB",
    role: "Actor",
    img: "/images/shoaib_rb.png",
    phone: "03196779390",
    bio: "",
  },
];

