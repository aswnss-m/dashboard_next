import { TabGroup, TabList, TabPanels, TabPanel, Tab } from "@tremor/react"
import Overview from "./overview/Overview"
import Details from "./details/Details"
export default function Tabs() {
    const tabs = [
        {
            title: "Overview",
            panel: <></>
        },
        {
            title: "Detail",
            panel: <></>
        }
    ]
    return (
        <TabGroup className="mt-6">
            <TabList>
                <Tab>Overview</Tab>
                <Tab>Detail</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Overview />
                </TabPanel>
                <TabPanel>
                    <Details />
                </TabPanel>
            </TabPanels>
        </TabGroup>
    )
}