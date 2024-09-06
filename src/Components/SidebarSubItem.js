import { ArrowDropDown } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const menuAnimation = {
  hidden: {
    opacity: 0,
    height: 0,
    padding: 0,
    transition: { duration: 0.3, when: "afterChildren" },
  },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
};
const menuItemAnimation = {
  hidden: (i) => ({
    padding: 0,
    x: "-100%",
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
  show: (i) => ({
    x: 0,
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
};

export default function SidebarSubItem({
  route,
  showAnimation,
  isOpen,
  setIsOpen,
}) {
  const [open, setOpen] = useState(false);
  console.log("TTTTTTTTTTTTT", route?.children);
  const toggleMenu = () => {
    setOpen(!open);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) {
      setOpen(false);
    }
  }, [isOpen]);

  if (route.children) {
    return (
      <>
        <NavLink to={route.path} className={"submenuHeaderLink"}>
          <div className="sub_menu" onClick={toggleMenu}>
            <div className="menu_item">
              <div className="icon">{route.icon}</div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    {route.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {isOpen && (
              <motion.div
                animate={
                  open
                    ? {
                        rotate: -90,
                      }
                    : { rotate: 0 }
                }
              >
                <ArrowDropDown />
              </motion.div>
            )}
          </div>{" "}
          {route?.children?.map((child) => (
            <NavLink to={child.path} className={"submenuHeaderLink"}>
              <div className="sub_menu" onClick={toggleMenu}>
                <div className="menu_item">
                  <div className="icon">{child.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {child.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {isOpen && (
                  <motion.div
                    animate={
                      open
                        ? {
                            rotate: -90,
                          }
                        : { rotate: 0 }
                    }
                  >
                    <ArrowDropDown />
                  </motion.div>
                )}
              </div>{" "}
              {child?.children?.map((child) => (
                <AnimatePresence>
                  {open && (
                    <motion.div
                      variants={menuAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="menu_container"
                    >
                      {child?.name}
                    </motion.div>
                  )}{" "}
                </AnimatePresence>
              ))}
            </NavLink>
          ))}
        </NavLink>
      </>
    );
  } else {
    return (
      <NavLink to={route.path} className="link" activeClassName="active">
        <div className="icon">{route.icon}</div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={showAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="link_text"
            >
              {route.name}
            </motion.div>
          )}
        </AnimatePresence>
      </NavLink>
    );
  }
}
