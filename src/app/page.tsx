"use client";

import { Accordion, AppShell, Burger, Group, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

// const sizeMap = {
//   sm: { width: "800px", height: "400px" },
//   md: { width: "1000px", height: "500px" },
//   lg: { width: "1600px", height: "800px" },
// } as const;

export default function Home() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: { base: 200, md: 300, lg: 400 },
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div className="text-bold">Gate of Babylon</div>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Accordion defaultValue="math">
          <Accordion.Item value="math">
            <Accordion.Control>Math tools</Accordion.Control>
            <Accordion.Panel>Math</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="picture">
            <Accordion.Control>Picture tools</Accordion.Control>
            <Accordion.Panel>Picture</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="video">
            <Accordion.Control>Video tools</Accordion.Control>
            <Accordion.Panel>Video</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="audio">
            <Accordion.Control>Audio tools</Accordion.Control>
            <Accordion.Panel>Audio</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
    // <main className="flex flex-col items-center py-8 w-1/2 m-auto">
    //   <h1 className="text-2xl my-6 font-bold">Gate of Babylon</h1>
    //   {/* <iframe
    //     style={sizeMap["lg"]}
    //     src="https://www.bilibili.com/blackboard/live/live-activity-player.html?cid=25723069&quality=0"
    //     allow="autoplay; encrypted-media"
    //     allowFullScreen
    //   ></iframe> */}
    // </main>
  );
}
