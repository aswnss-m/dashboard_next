"use client";
import {Grid, Card, Text, Metric,Button,Flex} from "@tremor/react"
import { ArrowRightIcon } from "@heroicons/react/outline";
export default function Overview(){
    return (
        <>
              {/* Make this grid take in the total number of collections */}
            <Grid numItemsMd={3} numItemsLg={3} className="gap-6 mt-6">
                {/* loop through the collections and create a card for each maybe with count of documents in each collection */}
                <Card className="max-w-auto h-24">
                  <Text>NewsLetter</Text>
                  <Metric>10</Metric>
                </Card>
                <Card className="max-w-auto h-24">
                  <Text>Clients</Text>
                  <Metric>10</Metric>
                </Card>
                <Card className="max-w-auto h-24">
                  <Flex>
                  <Text>Projects</Text>
                  <Button variant="light" icon={ArrowRightIcon} iconPosition="right">Add Project</Button>
                  </Flex>
                  <Metric>10</Metric>
                </Card>
                <Card className="max-w-auto">
                  <Flex>
                      <Text>Blogs</Text>
                  <Button variant="light" icon={ArrowRightIcon} iconPosition="right">Add Blog</Button>
                  </Flex>
                  <Metric>10</Metric>
                </Card>
              </Grid>
              <div className="mt-6">
                <Card>

                </Card>
              </div>
        </>
    )
}