interface Props {
  page: number,
  onChange: (page: number) => void
}

export default function Header({ page, onChange }: Props) {
  const isSelected = (session: number) => {
    if (page === session) {
      return "transition-colors duration-500 text-blue-500 cursor-pointer"
    }
    return "transition-colors duration-500 text-white cursor-pointer"
  }

  return (
    <div className="flex w-full justify-center z-50 px-32 fixed py-10 md:justify-between">
      <div className="flex">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent cursor-pointer" onClick={() => onChange(0)}>Portifólio</h1>
      </div>
      <div className="hidden gap-10 text-xl md:flex">
        <p className={isSelected(1)} onClick={() => onChange(1)}>Sobre</p>
        <p className={isSelected(2)} onClick={() => onChange(2)}>Projetos</p>
      </div>
    </div>
  );
}