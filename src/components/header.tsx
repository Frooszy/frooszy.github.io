interface Props {
  page: number,
  onChange: (page: number) => void
}

export default function Header({ page, onChange }: Props) {
  const isSelected = (session: number) => {
    if (page === session) {
      return "text-blue-500 cursor-pointer"
    }
    return "text-white cursor-pointer"
  }

  return (
    <div className="flex w-full z-50 justify-between py-10 px-32 fixed">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">Portifólio</h1>
      <div className="flex gap-10 text-xl">
        <p className={isSelected(0)} onClick={() => onChange(0)}>Sobre</p>
        <p className={isSelected(1)} onClick={() => onChange(1)}>Experiência</p>
        <p className={isSelected(2)} onClick={() => onChange(2)}>Projetos</p>
      </div>
    </div>
  );
}