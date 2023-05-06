import clsx from 'clsx'
import Image from 'next/image'

interface ICardProps {
  title: string
  image: string
  description: string
  isArtist?: boolean
}

export default function Card({
  image,
  title,
  description,
  isArtist = false,
}: ICardProps) {
  return (
    <div className="flex flex-col bg-black/20 p-4 rounded-lg">
      <Image
        src={image}
        width={150}
        height={150}
        alt={title}
        className={clsx({ 'rounded-lg': !isArtist, 'rounded-full': isArtist })}
      />

      <div className="mt-4">
        <h3 className="font-bold text-ellipsis overflow-hidden whitespace-nowrap">
          {title}
        </h3>
        <span className="text-xs text-zinc-500 overflow-ellipsis whitespace-normal line-clamp-2 mt-1">
          {description}
        </span>
      </div>
    </div>
  )
}
