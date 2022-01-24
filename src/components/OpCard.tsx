type OpCardType = {
  name: string
  icon: string
  character: string
}

export function OpCard({ name, icon }: OpCardType) {
  return (
    <div className="w-full h-full relative flex flex-col items-center">
      <img src={icon} alt={name} className="w-full h-full" />
      <span className="-my-4 absolute bottom-0 text-center lg:text-2xl text-white font-black">
        {name}
      </span>
    </div>
  )
}
