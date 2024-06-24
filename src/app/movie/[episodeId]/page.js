import React from 'react'
import styles from "@/app/styles/common.module.css"
import Image from 'next/image'

const Page = async ({ params }) => {
  const episodeId = params.episodeId;
  console.log('Received params:', params);
  console.log('Episode ID:', episodeId);

  const url = `https://netflix54.p.rapidapi.com/season/episodes/?ids=80077209%2C${episodeId}&offset=0&limit=25&lang=en`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '66a9fbd0damshd5d6b33b59935cfp19eec7jsnc94f77bd2c54',
      'x-rapidapi-host': 'netflix54.p.rapidapi.com'
    }
  };

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    console.log('API Response:', data);

    // Find the episode that matches the episodeId
    const episode = data.flatMap(season => season.episodes).find(ep => ep.episodeId === episodeId);

    if (!episode) {
      return <div>No episode found with the given ID.</div>;
    }

    const { title, contextualSynopsis, interestingMoment } = episode;

    return (
      <div className={styles.container}>
                  <h2 className={styles.movie_title}>{title}</h2>
        <div className={styles.card_section}>
          {interestingMoment && interestingMoment._342x192 && interestingMoment._342x192.webp && (
            <Image 
              src={interestingMoment._342x192.webp.value.url} 
              alt={title} 
              width={600} 
              height={300}
            />
          )}
        </div>
        <div className={styles.card_data}>
          <p>{contextualSynopsis && contextualSynopsis.text}</p>
        </div>
      </div>
    )
  
  } catch (error) {
    console.error("Error fetching episode data:", error);
    return <div>Error loading episode data. Please try again later.</div>;
  }
}

export default Page;