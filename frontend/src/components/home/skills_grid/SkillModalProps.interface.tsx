import SkillProps from "./SkillProps.interface";

export default interface SkillModalProps extends SkillProps {
    opened: boolean;
    close: () => void;
}
