import React from 'react'
import styles from "@/app/styles/common.module.css"
import MovieCard from '@/app/components/MovieCard';

const Movie = async () => {
  const url = process.env.RAPID_KEY;
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

    // Check if data is an array (as per the API response you provided earlier)
    const episodeData = Array.isArray(data) ? data : [];
    const episodes = episodeData.flatMap(season => season.episodes).slice(0, 9);


    return (
      <section className={styles.movieSection}>
        <div className={styles.movieSection}>
          <h1>Series & Movies</h1>
          <div className={styles.card_section}>
          {episodes.map((episode) => (
              <MovieCard key={episode.episodeId} {...episode} />
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data. Please try again later.</div>;
  }
}

export default Movie;