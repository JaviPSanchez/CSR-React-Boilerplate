import { Center, Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import { useState } from 'react';

import classes from './dashboard-layout-v2.module.css';

interface NavbarLinkProps {
  icon: typeof IconHome2;

  label: string;

  active?: boolean;

  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Home' },

  { icon: IconGauge, label: 'Dashboard' },

  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },

  { icon: IconCalendarStats, label: 'Releases' },

  { icon: IconUser, label: 'Account' },

  { icon: IconFingerprint, label: 'Security' },

  { icon: IconSettings, label: 'Settings' },
];

export function DashboardLayoutV2({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <>
      <nav className={classes.navbar}>
        <Center>
          <MantineLogo type="mark" size={30} />
        </Center>

        <div className={classes.navbarMain}>
          <Stack justify="center" gap={0}>
            {links}
          </Stack>
        </div>

        <Stack justify="center" gap={0}>
          <NavbarLink icon={IconSwitchHorizontal} label="Change account" />

          <NavbarLink icon={IconLogout} label="Logout" />
        </Stack>
      </nav>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-60">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </main>
      </div>
    </>
  );
}
