import Logo from "@/components/logo";
import Link from "next/link";

import {
  Airplane,
  Book,
  Camera,
  Code,
  Edit,
  EmojiHappy,
  Home,
  Music,
  Video,
  Weight,
} from "iconsax-react";

export const data = [
  {
    id: 1,
    icon: <Home className="w-7" color="red" />,
    title: "Home",
    link: "/",
  },

  {
    id: 2,
    icon: <Book className="w-7" color="red" />,
    title: "Book Categories",
    link: "/book-categories",
  },
  {
    id: 3,
    icon: <EmojiHappy className="w-7" color="red" />,
    title: "Old-School Cartoons",
    link: "/old-school-cartoons",
  },
  {
    id: 4,
    icon: <Video className="w-7" color="red" />,
    title: "Movies & TV Shows",
    link: "/#",
  },
  {
    id: 5,
    icon: <Music className="w-7" color="red" />,
    title: "Music",
    link: "/#",
  },
  {
    id: 6,
    icon: <Camera className="w-7" color="red" />,
    title: "Photography",
    link: "/#",
  },
  {
    id: 7,
    icon: <Weight className="w-7" color="red" />,
    title: "Sports & Fitness",
    link: "/#",
  },
  {
    id: 8,
    icon: <Code className="w-7" color="red" />,
    title: "Technology & Gadgets",
    link: "/#",
  },
  {
    id: 9,
    icon: <Airplane className="w-7" color="red" />,
    title: "Travel & Exploration",
    link: "/#",
  },
  {
    id: 10,
    icon: <Edit className="w-7" color="red" />,
    title: "Writing & Journaling",
    link: "/#",
  },
];

const AppSideBar = () => {
  return (
    <>
      side bar
    </>
  );
};

export default AppSideBar;
