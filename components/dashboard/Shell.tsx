'use client'
import {
  AppShell,
  Burger,
  Button,
  Flex,
  createTheme,
  Group,
  MantineThemeProvider,
  Divider,
  Text,
  Tooltip,
  useMantineTheme,
} from '@mantine/core'
import Link from 'next/link'
import { useDisclosure, useHover } from '@mantine/hooks'

import ToothIcon from '../icons/tooth'
import {
  ArchiveIcon,
  CalendarIcon,
  QuestionMarkCircledIcon,
  ClipboardIcon,
  GearIcon,
  HomeIcon,
  PersonIcon,
  ExitIcon,
} from '@radix-ui/react-icons'
import classes from './shell.module.css'
import { useState } from 'react'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // const [opened, { toggle }] = useDisclosure();
  const [opened, { toggle: toggleMobile }] = useDisclosure(false, {
    onOpen: () => console.log('Opened'),
  })
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)
  const [desktopOpen, setDesktopOpen] = useState(true)
  const defaultTheme = useMantineTheme()

  // Creating theme
  const theme = createTheme({
    components: {
      Button: Button.extend({
        defaultProps: {
          color: 'white',
          variant: 'transparent',
        },
      }),
      Text: Text.extend({
        defaultProps: {
          c: 'black',
        },
      }),
    },
  })

  return (
    <AppShell
      transitionDuration={300}
      transitionTimingFunction="ease"
      header={{ height: 60 }}
      navbar={{
        width: 70,
        breakpoint: 'sm',

        collapsed: { mobile: !opened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header px="lg" ml="" bg="#B8C0EA" className={classes.header}>
        <Flex px="" align="center">
          <Burger
            opened={opened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="md"
          />
          <Text visibleFrom="sm">Logo</Text>
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar p="sm" className={classes.navBar}>
        <AppShell.Section m="md" className={classes.section}>
          <Flex gap="15" p="" className={classes.menuContainer}>
            <MantineThemeProvider theme={theme}>
              <Burger size="sm" color="black" visibleFrom="sm" />
              <Flex gap="sm" direction="row" justify="center" align="center">
                <Tooltip
                  label="Home"
                  position="right"
                  offset={-5}
                  transitionProps={{ transition: 'fade', duration: 300 }}
                >
                  <Button
                    component={Link}
                    href={'/dashboard'}
                    onClick={toggleMobile}
                  >
                    <Group gap="30">
                      <HomeIcon width="20" height="20" color="black" />
                      <Text hiddenFrom="sm">Home</Text>
                    </Group>
                  </Button>
                </Tooltip>
              </Flex>
              <Flex gap="sm" direction="row" justify="center" align="center">
                <Tooltip
                  label="Book Appointment"
                  position="right"
                  offset={-5}
                  transitionProps={{ transition: 'fade', duration: 300 }}
                >
                  <Button
                    component={Link}
                    href={'/dashboard/book'}
                    onClick={toggleMobile}
                  >
                    <Group gap="30">
                      <CalendarIcon width="20" height="20" color="black" />
                      <Text hiddenFrom="sm">Book Appointment</Text>
                    </Group>
                  </Button>
                </Tooltip>
              </Flex>
              <Flex gap="sm" direction="row" justify="center" align="center">
                <Tooltip
                  label="Manage Appointment"
                  position="right"
                  offset={-5}
                  transitionProps={{ transition: 'fade', duration: 300 }}
                >
                  <Button
                    component={Link}
                    href={'/dashboard/manage'}
                    onClick={toggleMobile}
                  >
                    <Group gap="30">
                      <ClipboardIcon width="20" height="20" color="black" />
                      <Text hiddenFrom="sm">Manage Appointment</Text>
                    </Group>
                  </Button>
                </Tooltip>
              </Flex>
              <Flex gap="sm" direction="row" justify="center" align="center">
                <Tooltip
                  label="Appointment History"
                  position="right"
                  offset={-5}
                  transitionProps={{ transition: 'fade', duration: 300 }}
                >
                  <Button
                    component={Link}
                    href={'/dashboard/history'}
                    onClick={toggleMobile}
                  >
                    <Group gap="30">
                      <ArchiveIcon width="20" height="20" color="black" />
                      <Text hiddenFrom="sm">Appointment History</Text>
                    </Group>
                  </Button>
                </Tooltip>
              </Flex>
            </MantineThemeProvider>
          </Flex>
        </AppShell.Section>

        <AppShell.Section m="md" className={classes.section}>
          <Flex gap="15" p="" className={classes.menuContainer}>
            <MantineThemeProvider theme={theme}>
              <Flex gap="sm" direction="row" justify="center" align="center">
                <Tooltip
                  label="Settings"
                  position="right"
                  offset={-5}
                  transitionProps={{ transition: 'fade', duration: 300 }}
                >
                  <Button
                    component={Link}
                    href={'/dashboard/settings'}
                    onClick={toggleMobile}
                  >
                    <Group gap="30">
                      <GearIcon width="20" height="20" color="black" />
                      <Text hiddenFrom="sm">Settings</Text>
                    </Group>
                  </Button>
                </Tooltip>
              </Flex>
              <Flex gap="sm" direction="row" justify="center" align="center">
                <Tooltip
                  label="Profile"
                  position="right"
                  offset={-5}
                  transitionProps={{ transition: 'fade', duration: 300 }}
                >
                  <Button
                    component={Link}
                    href={'/dashboard/profile'}
                    onClick={toggleMobile}
                  >
                    <Group gap="30">
                      <PersonIcon width="20" height="20" color="black" />
                      <Text hiddenFrom="sm">Profile</Text>
                    </Group>
                  </Button>
                </Tooltip>
              </Flex>
              <Flex gap="sm" direction="row" justify="center" align="center">
                <Tooltip
                  label="Help & Support"
                  position="right"
                  offset={-5}
                  transitionProps={{ transition: 'fade', duration: 300 }}
                >
                  <Button
                    component={Link}
                    href={'/dashboard/help'}
                    onClick={toggleMobile}
                  >
                    <Group gap="30">
                      <QuestionMarkCircledIcon
                        width="20"
                        height="20"
                        color="black"
                      />
                      <Text hiddenFrom="sm">Help</Text>
                    </Group>
                  </Button>
                </Tooltip>
              </Flex>
              <Flex gap="sm" direction="row" justify="center" align="center">
                <Tooltip
                  label="Logout"
                  position="right"
                  offset={-5}
                  transitionProps={{ transition: 'fade', duration: 300 }}
                >
                  <Button
                    component={Link}
                    href={'/api/auth/signout'}
                    onClick={toggleMobile}
                  >
                    <Group gap="30">
                      <ExitIcon width="20" height="20" color="black" />
                      <Text hiddenFrom="sm">Logout</Text>
                    </Group>
                  </Button>
                </Tooltip>
              </Flex>
            </MantineThemeProvider>
          </Flex>
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
