import { content } from "@/app/variables"
import { Title, Text } from "@tremor/react"
export default function Heading(){
    return(
      <div className="flex items-center gap-3 justify-between">
      <div className="flex gap-3 items-center">
        <div className="min-w-sm">
        {content.logo.svg}
        </div>
        <div className="flex flex-col">
          <Title>{content.name}</Title>
          <Text>{content.shortDescription}</Text>
        </div>
      </div>
      <div className="">
        {content.ssw.logo.svg}
      </div>
    </div>
    )
}