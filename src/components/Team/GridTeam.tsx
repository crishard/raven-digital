
import { Zoom } from "react-awesome-reveal"
import { CardTeam } from "./CardTeam"
import { HoverContent } from "./HoverContent"
import { team } from "./team"

export const GridTeam = () => {
  return (
    <div className="flex justify-center items-center flex-wrap py-12">
      <Zoom triggerOnce={true} cascade duration={800}>
        {team.map((member, index) => (
          <CardTeam
            key={index}
            imageSrc={member.image}
            hoverContent={
              <HoverContent name={member.name} text={member.text} position={member.position} />
            }
          />
        ))}
      </Zoom>
    </div>
  )
}
