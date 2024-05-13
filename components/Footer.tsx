import { logoutAccount } from "@/lib/actions/user.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();
  let userDetails: Partial<User> = { ...user, firstName: "Kalyan" };

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();
    if (loggedOut) router.push("/sign-in");
  };

  if (!userDetails.firstName) {
    return;
  }
  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">
          {userDetails?.firstName[0] ?? "K"}
        </p>
      </div>

      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 truncate text-gray-700 font-semibold">
          {userDetails?.firstName}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {userDetails?.email}
        </p>
      </div>

      <div className="footer_image" onClick={handleLogOut}>
        <Image src="icons/logout.svg" fill alt="jsm" />
      </div>
    </footer>
  );
};

export default Footer;
