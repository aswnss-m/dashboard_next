"use client";
import "./page.css";
import {content} from "@/app/variables";
      import {
        Card,
        Grid,
        Tab,
        TabGroup,
        TabList,
        TabPanel,
        TabPanels,
        Text,
        Title,
      } from "@tremor/react";
      
export default function Home() {
  return (
    <main className="p-12">
      <div className="flex items-center gap-3">
        {content.ssw.logo.svg}
      <div className="flex flex-col">
      <Title>{content.name}</Title>
      <Text>{content.shortDescription}</Text>
      </div>
      </div>
      <TabGroup className="mt-6">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Detail</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
              <Card>
                {/* Placeholder to set height */}
                <div className="h-28" />
              </Card>
              <Card>
                {/* Placeholder to set height */}
                <div className="h-28" />
              </Card>
              <Card>
                {/* Placeholder to set height */}
                <div className="h-28" />
              </Card>
            </Grid>
            <div className="mt-6">
              <Card>
                <div className="h-80" />
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <div className="h-96" />
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}