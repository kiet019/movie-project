import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div class="about-us">
      <h2>Welcome to our website!</h2>
      <p class="about-us-description">
        We are a platform that provides the latest and most popular movies in a
        range of genres. We constantly update our selection so that you can stay
        up-to-date with the most sought-after titles.
      </p>
      <h3>Our Mission</h3>
      <p class="mission-description">
        Our mission is to provide users with the best movie streaming experience
        on the web. We ensure that users enjoy a smooth, comprehensive, and
        convenient movie-watching experience. We also commit to protecting
        users' personal information and ensuring the safety of transactions on
        our website.
      </p>
      <h3>Our Team</h3>
      <p class="team-description">
        We are a group of web development experts and movie enthusiasts. We
        strive to provide users with the best experience possible on our
        website. We always welcome and listen to user feedback to improve our
        service.
      </p>
    </div>
  );
}
