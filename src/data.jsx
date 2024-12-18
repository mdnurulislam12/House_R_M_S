import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {GiSpookyHouse } from "react-icons/gi";
import { PiBuildingOffice, PiBuildingApartmentBold } from "react-icons/pi";
import { TbHomeLink } from "react-icons/tb";
import {
  FaPumpSoap,
  FaShower,
  FaFireExtinguisher,
  FaUmbrellaBeach,
  FaKey,
} from "react-icons/fa";
import { FaHouseUser, FaPeopleRoof, FaKitchenSet } from "react-icons/fa6";
import {FaChartArea } from "react-icons/fa";
import {IoMdBed } from "react-icons/io"
import {
  BiSolidWasher,
  BiSolidDryer,
  BiSolidFirstAid,
  BiWifi,
  BiSolidFridge,
  BiWorld,
} from "react-icons/bi";
import { BsSnow, BsFillDoorOpenFill, BsPersonWorkspace } from "react-icons/bs";
import { MdOutlineFamilyRestroom, MdOutlineAddHomeWork, MdOutlineMap, MdMicrowave, MdBalcony, MdYard, MdPets } from "react-icons/md";
import {
  PiBathtubFill,
  PiCoatHangerFill,
  PiTelevisionFill,
} from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import {
  GiHeatHaze,
  GiCctvCamera,
  GiBarbecue,
  GiToaster,
  GiCampfire,
} from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";

export const categories = [
  {
    label: "All",
    icon: <BiWorld></BiWorld>
  },
  {
    img: "assets/flat.jpg",
    label: "Flats",
    icon: <PiBuildingApartmentBold />,
    description: "This property is close to the beach!",
  },
  {
    img: "assets/duplex.jpg",
    label: "Duplex Home",
    icon: <GiSpookyHouse  />,
    description: "This property is has windmills!",
  },
  {
    img: "assets/plot.jpg",
    label: "Plot",
    icon: <MdOutlineMap />,
    description: "This property is modern!",
  },
  {
    img: "assets/factory.jpg",
    label: "Industrial Space",
    icon: <FaChartArea  />,
    description: "This property is in the countryside!",
  },
  {
    img: "assets/pool_cat.jpg",
    label: "Family",
    icon: <FaPeopleRoof  />,
    description: "This is property has a beautiful pool!",
  },
  {
    img: "assets/island_cat.webp",
    label: "Bachelor",
    icon: <FaHouseUser  />,
    description: "This property is on an island!",
  },
  {
    img: "assets/office.jpg",
    label: "Office",
    icon: <PiBuildingOffice />,
    description: "This property is near a lake!",
  },
  {
    img: "assets/skiing_cat.jpg",
    label: "Sublet",
    icon: <MdOutlineAddHomeWork />,
    description: "This property has skiing activies!",
  },
  {
    img: "assets/castle_cat.webp",
    label: "Hostel",
    icon: <TbHomeLink />,
    description: "This property is an ancient castle!",
  },
  
];

export const types = [
  {
    name: "An entire place",
    description: "Guests have the whole place to themselves",
    icon: <FaHouseUser />,
  },
  {
    name: "Room(s)",
    description:
      "Guests have their own room in a house, plus access to shared places",
    icon: <BsFillDoorOpenFill />,
  },
  {
    name: "A Shared Room",
    description:
      "Guests sleep in a room or common area that maybe shared with you or others",
    icon: <FaPeopleRoof />,
  },
];

export const facilities = [
  {
    name: "Bath tub",
    icon: <PiBathtubFill />,
  },
  {
    name: "Personal care products",
    icon: <FaPumpSoap />,
  },
  {
    name: "Outdoor shower",
    icon: <FaShower />,
  },
  {
    name: "Washer",
    icon: <BiSolidWasher />,
  },
  {
    name: "Dryer",
    icon: <BiSolidDryer />,
  },
  {
    name: "Hangers",
    icon: <PiCoatHangerFill />,
  },
  {
    name: "Iron",
    icon: <TbIroning3 />,
  },
  {
    name: "TV",
    icon: <PiTelevisionFill />,
  },
  {
    name: "Dedicated workspace",
    icon: <BsPersonWorkspace />
  },
  {
    name: "Air Conditioning",
    icon: <BsSnow />,
  },
  {
    name: "Heating",
    icon: <GiHeatHaze />,
  },
  {
    name: "Security cameras",
    icon: <GiCctvCamera />,
  },
  {
    name: "Fire extinguisher",
    icon: <FaFireExtinguisher />,
  },
  {
    name: "First Aid",
    icon: <BiSolidFirstAid />,
  },
  {
    name: "Wifi",
    icon: <BiWifi />,
  },
  {
    name: "Cooking set",
    icon: <FaKitchenSet />,
  },
  {
    name: "Refrigerator",
    icon: <BiSolidFridge />,
  },
  {
    name: "Microwave",
    icon: <MdMicrowave />,
  },
  {
    name: "Stove",
    icon: <GiToaster />,
  },
  {
    name: "Barbecue grill",
    icon: <GiBarbecue />,
  },
  {
    name: "Outdoor dining area",
    icon: <FaUmbrellaBeach />,
  },
  {
    name: "Private patio or Balcony",
    icon: <MdBalcony />,
  },
  {
    name: "Camp fire",
    icon: <GiCampfire />,
  },
  {
    name: "Garden",
    icon: <MdYard />,
  },
  {
    name: "Free parking",
    icon: <AiFillCar />,
  },
  {
    name: "Self check-in",
    icon: <FaKey />
  },
  {
    name: " Pet allowed",
    icon: <MdPets />
  }
];
