export type HeaderVariant = "main" | "back" | "none";

export const routeMeta: Record<
  string,
  {
    header: HeaderVariant;
    title?: string;
    showBottomNav?: boolean;
  }
> = {
  "/": {
    header: "none",
    showBottomNav: false,
  },

  "/login": {
    header: "none",
    showBottomNav: false,
  },

  "/dashboard": {
    title: "Dashboard",
    header: "main",
    showBottomNav: true,
  },

  "/assignments": {
    header: "main",
    title: "Assignments",
    showBottomNav: true,
  },

  "/assignments/:id": {
    header: "back",
    title: "Assignment Details",
    showBottomNav: true,
  },

  "/profile": {
    header: "back",
    title: "Profile",
    showBottomNav: true,
  },
  "/add-test": {
    header: "back",
    title: "Add Test",
    showBottomNav: true,
  },
};
