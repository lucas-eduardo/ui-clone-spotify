import Image from 'next/image'

interface ICardRecentProps {
  title: string
  image: string
}

export default function CardRecent({ image, title }: ICardRecentProps) {
  return (
    <div className="flex items-center bg-white/10 rounded-lg h-20">
      <Image
        src={image}
        width={80}
        height={80}
        alt={title}
        className="rounded-l-lg"
      />

      <div className="px-4">
        <p className="font-bold text-base">{title}</p>
      </div>
    </div>
  )
}
