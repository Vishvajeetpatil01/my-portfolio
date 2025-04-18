import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="http://www.linkedin.com/in/vishvajeet-patil-59b731305" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Vishvajeetpatil01" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/_vishvajeet_patil__/" Icon={FaInstagram} />
      <SingleContactSocial link="https://www.facebook.com/vasudev.patil.125323" Icon={FaFacebookF} />
      <SingleContactSocial link="https://x.com/PatilVishya" Icon={FaTwitter} />
    </div>
  );
};

export default ContactSocial;
