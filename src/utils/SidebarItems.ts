export const items = [
  { name: "Dashboard", link: "/", Icon: false },
  {
    name: "Budget",
    sub: [
      { subname: "create budget", link: "/budget/create" },
      { subname: "view budget", link: "/budget" },
      { subname: "edit budget", link: "/budget/update" },
    ],
    Icon: true,
  },
  {
    name: "Income",
    sub: [
      { subname: "Create budget", link: "/budget/create" },
      { subname: "View budget", link: "/budget" },
      { subname: "Edit budget", link: "/budget/update" },
    ],
    Icon: true,
  },
  {
    name: "Expenses",
    sub: [
      { subname: "Add new", link: "/expense/create" },
      { subname: "View All", link: "/expense" },
      { subname: "Categories", link: "/expense/categories" },
    ],
    Icon: true,
  },
  {
    name: "Accounting",
    sub: [
      { subname: "Create Entry", link: "/accounting/create" },
      { subname: "View Entries", link: "/accounting/reports" },
    ],
    Icon: true,
  },
  {
    name: "Reports",
    sub: [
      { subname: "Financial reports", link: "/reports/financials" },
      { subname: "Cashflow", link: "/reports/cashflow" },
    ],
    Icon: true,
  },
];
