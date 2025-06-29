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
          placeholder="Your Name"
          startContent={<UserIcon />}
          type="text"
          variant="bordered"
        />

        <Input
          className="basis-[60%]"
          placeholder="Your Email"
          startContent={<MailIcon />}
          type="email"
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
          />
          <div className="text-default-500 text-sm">
            I agree with the{" "}
            <Link className="underline" href="/terms">
              Terms Of Use
            </Link>{" "}
            and the{" "}
            <Link className="underline" href="/policy">
              Privacy Policy
            </Link>{" "}
          </div>
        </div>

        <Button
          className="rounded-lg"
          color="primary"
          endContent={<SendIcon />}
          isDisabled={!isSelected}
          size="md"
          type="submit"
          variant={"flat"}
        >
          Send
        </Button>
      </div>
    </form>
  );
}
