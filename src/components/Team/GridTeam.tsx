
import { Fade } from "react-awesome-reveal"
import { CardTeam } from "./CardTeam"
import { HoverContent } from "./HoverContent"
import { team } from "./team"

export const GridTeam = () => {
  return (
    <div className="flex justify-center items-center flex-wrap py-12">
      <Fade triggerOnce={true} direction="left" duration={1000}>
        {team.map((member, index) => (
          <CardTeam
            key={index}
            imageSrc={member.image}
            hoverContent={
              <HoverContent name={member.name} text={member.text} position={member.position} />
            }
          />
        ))}
      </Fade>
    </div>
  )
}
