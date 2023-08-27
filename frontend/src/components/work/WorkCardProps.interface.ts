import SkillBadge from "./SkillBadge.interface";

export default interface WorkCardProps {
    companyName: string,
    jobTitle: string,
    industry: string,
    skills: SkillBadge[],
    description: string | any,
}