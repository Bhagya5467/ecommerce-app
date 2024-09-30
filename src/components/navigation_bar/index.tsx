import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from '@nextui-org/react';

export default function NavigationBar() {

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Logo</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
              >
                FREE TOOLS
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: 'gap-4',
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
            >
              FREE QUIZZES
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
            >
              UB GUIDE
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            COURCES
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            APPLY JOBS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            RESOURCES
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">LOG IN</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            SIGN UP
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

