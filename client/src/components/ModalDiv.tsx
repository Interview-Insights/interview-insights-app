
interface ModalDivProps {
  questionId: number;
  children: React.ReactNode;
  className?: string;
}

const ModalDiv: React.FC<ModalDivProps> = ({ children, className }) => {
  return (
    <div className={className}>{children}</div>
  )
}

export default ModalDiv;