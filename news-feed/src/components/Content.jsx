import React from 'react';
import '../App.css';

const Content = () => {
  const newsItems = [
    { id: 1, title: "Global Markets Surge", summary: "Stock markets hit record highs today after positive economic data.", date: "April 2, 2025" },
    { id: 2, title: "Tech Breakthrough Unveiled", summary: "A new AI technology promises to revolutionize healthcare.", date: "April 1, 2025" },
    { id: 3, title: "Climate Summit Results", summary: "World leaders agree on new emissions targets.", date: "March 31, 2025" },
    { id: 4, title: "Local Election Upset", summary: "Underdog candidate wins in a surprising turn of events.", date: "April 2, 2025" },
  ];

  return (
    <main className="main-content">
      {/* Hero/Featured Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Breaking News: Major Policy Shift Announced</h1>
          <p className="hero-summary">
            In a surprising turn of events, the government has unveiled a new policy that could reshape the economic landscape. Experts weigh in on the potential impacts.
          </p>
          <div className="hero-meta">
            <span className="hero-date">April 2, 2025</span>
            <a href="#read-more" className="hero-link">Read Full Story</a>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="news-section">
        <h2 className="news-section-title">Latest Headlines</h2>
        <div className="news-grid">
          {newsItems.map((item) => (
            <article key={item.id} className="news-card">
              <h3 className="news-card-title">{item.title}</h3>
              <p className="news-card-summary">{item.summary}</p>
              <div className="news-card-meta">
                <span className="news-card-date">{item.date}</span>
                <a href={`#news-${item.id}`} className="news-card-link">Read More</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Content;