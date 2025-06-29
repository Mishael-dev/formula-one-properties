"use client";
import { Input } from "@heroui/input";
import { IoSearchOutline } from "react-icons/io5";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { CiHome } from "react-icons/ci";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function useSearchRedirect() {
  const router = useRouter();

  const setSearchQuery = useCallback(
    (term: string) => {
      const params = new URLSearchParams();

      if (term) {
        params.set("search", term);
      }

      router.push(`/properties?${params.toString()}`);
    },
    [router],
  );

  return { setSearchQuery };
}

const filters = [
  {
    label: "Rooms",
    icon: <CiHome />,
    options: [
      { label: "Self Contain" },
      { label: "1 Bedroom" },
      { label: "2 Bedrooms" },
      { label: "3 Bedrooms" },
      { label: "4 Bedrooms" },
      { label: "5 Bedrooms" },
      { label: "6+ Bedrooms" },
    ],
  },
  {
    label: "Price",
    icon: <FaRegMoneyBill1 />,
    options: [
      { label: "₦5M – ₦15M", min: 5000000, max: 15000000 }, // Low-end flats, outskirts
      { label: "₦15M – ₦30M", min: 15000000, max: 30000000 }, // Small bungalows, 2–3 bed flats
      { label: "₦30M – ₦60M", min: 30000000, max: 60000000 }, // Mid-range homes, duplexes
      { label: "₦60M – ₦100M", min: 60000000, max: 100000000 }, // High-end estates, semi-detached
      { label: "₦100M and above", min: 100000000, max: null }, // Luxury homes, Maitama, Asokoro, etc.
    ],
  },
];

export default function Search() {
  const { setSearchQuery } = useSearchRedirect();

  return (
    <div className="flex px-10 md:px-20 -mt-16 md:-mt-4 z-10">
      <div className="flex gap-2 bg-default-100 z-10 w-full rounded-md flex-col md:flex-row">
        <Input
          className="md:basis-[50%]"
          placeholder="search term"
          size="lg"
          startContent={
            <IoSearchOutline className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          type="text"
          variant="flat"
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="flex basis-[50%] gap-2 flex-col md:flex-row">
          {filters.map((item, index) => (
            <Autocomplete
              key={index}
              label={item.label}
              size="sm"
              startContent={item.icon}
            >
              {item.options.map((option, index1) => (
                <AutocompleteItem key={index1}>{option.label}</AutocompleteItem>
              ))}
            </Autocomplete>
          ))}
        </div>
      </div>
    </div>
  );
}
