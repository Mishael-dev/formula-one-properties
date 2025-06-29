"use client";
import { Input } from "@heroui/input";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { Textarea } from "@heroui/input";
import { Checkbox } from "@heroui/checkbox";
import Link from "next/link";
import { Button } from "@heroui/button";
import { IoIosSend } from "react-icons/io";
import React from "react";

function UserIcon() {
  return <CiUser />;
}

function MailIcon() {
  return <CiMail />;
}

function SendIcon() {
  return <IoIosSend className="flex-shrink-0" size={16} />;
}
export default function ContactForm() {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <form className=" border-default-300 p-4 border-[2px] rounded-2xl">
      <div className="flex gap-4 mb-4">
        <Input
          className="basis-[40%]"
          startContent={<UserIcon />}
          type="text"
          placeholder="Your Name"
          variant="bordered"
        />

        <Input
          className="basis-[60%]"
          startContent={<MailIcon />}
          type="email"
          placeholder="Your Email"
          variant="bordered"
        />
      </div>

      <Textarea placeholder="Your Message" variant="bordered" />

      <div className="flex justify-between mt-4 items-center gap-4">
        <div className="flex gap-2 items-center">
          <Checkbox
          color="primary"
          isSelected={isSelected}
          onValueChange={setIsSelected}
        ></Checkbox>
        <div className="text-default-500 text-sm">
          I agree with the{" "}
          <Link href="/terms" className="underline">
            Terms Of Use
          </Link>{" "}
          and the{" "}
          <Link href="/policy" className="underline">
            Privacy Policy
          </Link>{" "}
        </div>
        </div>

        <Button
          isDisabled={!isSelected}
          size="md"
          color="primary"
          className="rounded-lg"
          endContent={<SendIcon />}
          type="submit"
          variant={"flat"}
        >
          Send
        </Button>
      </div>
    </form>
  );
}
