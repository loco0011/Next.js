import styles from '@/app/styles/common.module.css'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const MovieCard = ({ episodeId, title, contextualSynopsis, interestingMoment }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        {interestingMoment && interestingMoment._342x192 && interestingMoment._342x192.webp && (
          <Image 
            src={interestingMoment._342x192.webp.value.url} 
            alt={title} 
            width={400} 
            height={200}
          />
        )}
      </div>
      <div className={styles.card_data}>
        <h2>{title.substring(0,18)}</h2>
        <p>{`${contextualSynopsis.text.substring(0,75)}...`}</p>
        <Link href={`/movie/${episodeId}`}>
          <button className={styles.btn}>
            Read More
          </button>
        </Link>
      </div>
    </div>
  )
}

export default MovieCard