import { pathnames } from "@/lib/pathname";
import { ChartPie, List, UserRound, Wallet } from "lucide-react";

const menu = [
  {
    id: 1,
    label: "Tổng quan",
    path: pathnames.users.layout + pathnames.users.general,
    icon: <ChartPie size="14" />,
    hasSub: false,
  },
  {
    id: 2,
    label: "Cá nhân",
    path: pathnames.users.layout + pathnames.users.personal,
    icon: <UserRound size="14" />,
    hasSub: true,
    subs: [
      {
        id: 21,
        label: "Thông tin cá nhân",
        path: pathnames.users.layout + pathnames.users.personal,
      },
      {
        id: 22,
        label: "Cập nhật số điện thoại",
        path: pathnames.users.layout + pathnames.users.updatePhhone,
      },
      {
        id: 23,
        label: "Cập nhập email",
        path: pathnames.users.layout + pathnames.users.updateEmail,
      },
    ],
  },
  {
    id: 3,
    label: "Quản lý tin đăng",
    icon: <List size="14" />,
    path: pathnames.users.layout + pathnames.users.createPost,
    hasSub: true,
    subs: [
      {
        id: 31,
        label: "Tạo mới tin nhắn",
        path: pathnames.users.layout + pathnames.users.createPost,
      },
      {
        id: 32,
        label: "Danh sách tin đăng",
        path: pathnames.users.layout + pathnames.users.managePost,
      },
      {
        id: 33,
        label: "Danh sách tin nháp",
        path: pathnames.users.layout + pathnames.users.manageDraft,
      },
    ],
  },
  {
    id: 4,
    label: "Quản lý tài chính",
    icon: <Wallet size="14" />,
    path: pathnames.users.layout + pathnames.users.manageBalance,
    hasSub: true,
    subs: [
      {
        id: 41,
        label: "Thông tin số dư",
        path: pathnames.users.layout + pathnames.users.manageBalance,
      },
      {
        id: 42,
        label: "Lịch sử thanh toán",
        path: pathnames.users.layout + pathnames.users.paymentHistory,
      },
      {
        id: 43,
        label: "Nạp tiền",
        path: pathnames.users.layout + pathnames.users.deposit,
      },
    ],
  },
];
export default menu;
