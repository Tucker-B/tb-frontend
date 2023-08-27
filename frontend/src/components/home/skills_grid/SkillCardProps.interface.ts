import SkillProps from "./SkillProps.interface";

export default interface SkillCardProps extends SkillProps {
    onClick: (skillName: string, skillDescription: string, skillImg: string) => void
}