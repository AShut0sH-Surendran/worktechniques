"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { usePathname } from "next/navigation";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, cn} from "@nextui-org/react";
import { color } from "framer-motion";
import { NavLinkProps } from "./definition";
import { NavDropdownProps } from "./definition";
import NavDropdown from "./navDropdown";



export const Navbar = () => {
  const pathname = usePathname();
  const links: NavLinkProps[] = [
    // {
    //   id: "home",
    //   path: "/",
    //   name: "Home",
    // },
    {
      id: "products",
      path: "/products",
      name: "Products",
      subLinks: [
        {
          id: "WM",
          path: "/products?category=WM",
          name: "Mobile WM for SAP",
        },
        {
          id: "Barcode Label printing for SAP",
          path: "/products?category=barcode",
          name: "Barcode Label printing for SAP",
        },
      ],
    },
    {
      id: "hardwarearchitechture",
      path: "/hardwarearchitechture",
      name: "Hardware and Architechture",
      subLinks: [
        {
          id: "mobilecomputer",
          path: "/hardwarearchitechture?category=mobilecomputer",
          name: "Mobile Computer",
        },
        {
          id: "labelprinter",
          path: "/hardwarearchitechture?category=labelprinter",
          name: "Label Printer",
        },
      ],
    },
    {
      id: "resources",
      path: "/resources",
      name: "Resources",
      subLinks: [
        {
          id: "clientsuccess",
          path: "/resources?category=clientsuccess",
          name: "Client and Success Story",
        },
        {
          id: "faq",
          path: "/resources?category=faq",
          name: "FAQ",
        },
        {
          id: "blog",
          path: "/resources?category=blog",
          name: "Blogs",
        },
      ],
    },
    {
      id: "company",
      path: "/company",
      name: "Company",
      subLinks: [
        {
          id: "clientsuccess",
          path: "/company?category=about",
          name: "About Us",
        },
        {
          id: "partner",
          path: "/company?category=partner",
          name: "Our Partner",
        },
        {
          id: "becomepartner",
          path: "/resources?category=becomepartner",
          name: "Become a Partner",
        },
        {
          id: "contact",
          path: "/resources?category=contact",
          name: "Contact Us",
        },
      ],
    },
    // {
    //   id: "demo",
    //   path: "/demo",
    //   name: "Book a Demo",
    // },
  ];

  const items = [
    {
      key: "WM",
      label: "Mobile WM for SAP",
    },
    {
      key: "barcode",
      label: "Barcode Label Printing for SAP",
    },
  ];
  const products = [
    {
      key: "WM",
      label: "Mobile WM for SAP",
    },
    {
      key: "barcode",
      label: "Barcode Label Printing for SAP",
    },
  ];
  const HardwareArch = [
    {
      key: "MobileComputer",
      label: "Mobile Computer",
    },
    {
      key: "LabelPrinter",
      label: "Label Printer",
    },
  ];
  const resources = [
    {
      key: "ClientSuccess",
      label: "Client and Success Story",
    },
    {
      key: "FAQ",
      label: "FAQ",
    },
    {
      key: "Blog",
      label: "Blog",
    },
  ];
  const company = [
    {
      key: "About",
      label: "About Us",
    },
    {
      key: "Partner",
      label: "Our Partner",
    },
    {
      key: "BePartner",
      label: "Become a Partner",
    },
    {
      key: "Contact",
      label: "Contact Us",
    },
  ];
  const navigation = [
    {id: "", name: "Products", path: "", subLinks: [{name: "Mobile WM for SAP", path: ""},{name: "Barcode Label Printing for SAP", path: ""},],},
    {id: "", name: "Hardware & Architechture", path: "",},
    {id: "", name: "Resources", path: "",},
    {id: "", name: "Company", path: "",},
    // "Blog",
  ];



  return (
    //<div className="sticky top-0 bg-[lightblue] left-0 w-full">
      <div id="navBar" className="sticky top-0 left-0 w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
              <span>
                <Image
                  src="/img/logo.svg"
                  width="320"
                  alt="N"
                  height="50"
                  // className="w-8"
                  className=""
                />
              </span>
            {/* <span>Nextly</span> */}
          </span>
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
            <ThemeChanger />
            <div className="hidden mr-3 lg:flex nav__item">
              <Link href="/" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
                Book a Demo
              </Link>
            </div>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href="/" className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                          {item.path}
                      </Link>
                    ))}
                    <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">
                        Get Started
                    </Link>
                  </>
                </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        {/* <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu.name}
                    
                </Link>
              </li>
            ))}
          </ul>
        </div> */}

          {/* trial */}
          <ul className="flex lg:justify-center lg:gap-10">
      {links.map((link) => (
        <li
          key={link.id}
          className={cn(
            "font-inter text-lg font-medium text-[#FFFFFF] hover:opacity-100",
            pathname !== link.path && "opacity-70",
          )}
        >
          {link.subLinks ? (
            <NavDropdown link={link} />
          ) : (
            <Link href={link.path}>{link.name}</Link>
          )}
        </li>
      ))}
    </ul>

        {/* navbar htm */}
        {/* <div className="hidden text-center lg:flex lg:items-center rounded-md color-gray p-2">
        <ul className="flex flex-col gap-8 lg:flex-row lg:gap-10">
          <li className="text-center font-inter text-sm font-normal text-[#FEFEFE]"><a href="#">Product
            <ul>
              <li><a href="#">Mobile WM for SAP</a></li>
              <li><a href="#">Barcode Printing for SAP</a></li>
            </ul>
            </a>
          </li>
          <li className="text-center font-inter text-sm font-normal text-[#FEFEFE]"><a href="#">Hardware & Architechture
            <ul>
              <li><a href="#">Mobile Computer</a></li>
              <li><a href="#">Label Printer</a></li>
            </ul>
            </a>
          </li>
          <li className="text-center font-inter text-sm font-normal text-[#FEFEFE]"><a href="#">Resources
            <ul>
              <li><a href="#">Client & Success Story</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
            </a>
          </li>
          <li className="text-center font-inter text-sm font-normal text-[#FEFEFE]"><a href="#">Company
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Partners</a></li>
              <li><a href="#">Be a Partner</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            </a>
          </li>
        </ul>
        </div> */}
        
        
        {/* nextjs dropdowns */}
        {/* <div className="hidden text-center lg:flex lg:items-center rounded-md color-gray p-2">
          <ul>
          <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" >Products</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Dynamic Actions" className="p-5 gap-2" variant="bordered" items={products}>
          {(item) => (
              <DropdownItem
                key={item.key}
                color={item.key === "delete" ? "danger" : "default"}
                className={item.key === "delete" ? "text-danger" : ""}
              >
              {item.label}
              </DropdownItem>
          )}
          </DropdownMenu>
          </Dropdown>
          <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered">Hardware & Architechture</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Dynamic Actions" className="p-5 gap-row: 1rem"  items={HardwareArch}>
          {(item) => (
              <DropdownItem
                key={item.key}
                color={item.key === "delete" ? "danger" : "default"}
                className={item.key === "delete" ? "text-danger" : ""}
              >
              {item.label}
              </DropdownItem>
          )}
          </DropdownMenu>
          </Dropdown>
          <Dropdown>
          <DropdownTrigger>
            <Button>Resources</Button>
          </DropdownTrigger>
          <DropdownMenu  className="p-5 gap-2" items={resources}>
          {(item) => (
              <DropdownItem
                key={item.key}
                color={item.key === "delete" ? "danger" : "default"}
                className={item.key === "delete" ? "text-danger" : ""}
              >
              {item.label}
              </DropdownItem>
          )}
          </DropdownMenu>
          </Dropdown>
          <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered">Company</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Dynamic Actions" className="p-5 gap-2"  items={company}>
          {(item) => (
              <DropdownItem
                key={item.key}
                color={item.key === "delete" ? "danger" : "default"}
                className={item.key === "delete" ? "text-danger" : ""}
              >
              {item.label}
              </DropdownItem>
          )}
          </DropdownMenu>
          </Dropdown>
          </ul>
        
        </div> */}
        

      </nav>
    </div>
  );
}

