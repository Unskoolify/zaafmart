import Link from "next/link";
import React from "react";
import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineUserAdd,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { TbCategory } from "react-icons/tb";
import { MdOutlineManageAccounts } from "react-icons/md";

import {
  MdSlowMotionVideo,
  MdOutlineNotificationsActive,
} from "react-icons/md";
import MobFooterMenu from "./MobFooterMenu";

export default function MobFooter() {
  return (
    <div className="fixed inset-x-0 bottom-0 w-full shadow bg-white sm:hidden">
      <div className="flex justify-between items-center px-2 h-12">
        <MobFooterMenu
          title="Home"
          address="/"
          Icon={AiOutlineHome}
        ></MobFooterMenu>
        <MobFooterMenu
          title="Categories"
          address="/categories"
          Icon={TbCategory}
        ></MobFooterMenu>
        <MobFooterMenu
          title="Notifications"
          address="/notification"
          Icon={MdOutlineNotificationsActive}
        ></MobFooterMenu>
        <MobFooterMenu
          title="Account"
          address="/account"
          Icon={MdOutlineManageAccounts}
        ></MobFooterMenu>
      </div>
    </div>
  );
}
