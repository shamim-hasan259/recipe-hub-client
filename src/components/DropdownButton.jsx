"use client";
import { authClient } from "@/lib/auth-client";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { Avatar, Dropdown } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DropdownButton = ({ user }) => {
  const router = useRouter();
  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("logout successfully");
    router.push("/login");
  };
  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full">
        <Avatar>
          <Avatar.Image alt={user?.name} src={user?.Image} />
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Popover>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Link
              className="flex w-full items-center justify-between gap-2"
              href={`/dashboard/${user.role}`}
            >
              Dashboard
            </Link>
          </Dropdown.Item>
          <Dropdown.Item variant="danger">
            <div className="flex w-full items-center justify-between gap-2">
              <button
                onClick={handleLogout}
                className="w-full flex gap-2 items-center"
              >
                <ArrowRightFromSquare className="size-3.5 text-danger" />
                Logout
              </button>
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default DropdownButton;
