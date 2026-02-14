import { ChildrenType } from "@/types/ChildrenTypes"

const Containers = ({children , className = ""}:ChildrenType) => {
  return (
    <div className={`container mx-auto px-2 sm:px-0 2xl:px-33 ${className}`}>
      {children}
    </div>
  )
}

export default Containers
