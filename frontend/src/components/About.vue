<template>
  <div class="about-page" id="about">
    <h2 class="page-header">About Us</h2>
    <div class="about-content">
      <p>
        With over 25 years in the industry, our owner Troy brings a lifetime of hands-on experience, an unmatched work ethic, and a deep-rooted passion for getting the job done right. What started as a high school hustle quickly grew into a full-fledged career—earning his stripes the hard way and building a name that's now trusted across the region.
      </p>
      <p>
        Originally established as an incorporated company in 2012, the business continued to evolve—accepting new challenges, scaling operations, and ultimately merging with a well-established local property maintenance enterprise. That strategic move led to the creation of Platinum Enterprise Group, bringing together years of experience, trusted service, and a shared commitment to excellence under one banner. The result? A stronger, more versatile team that delivers consistent results for every client, on every site.
      </p>
      <p>
        From traditional landscaping and property maintenance to high-end custom stonework, backyard golf greens, and eye-catching water features—we bring your vision to life with creativity, care, and a touch of Platinum polish. We don't just cut grass and lay pavers—we help elevate curb appeal, boost property value, and make your neighbours jealous (in a good way).
      </p>
      <p>
        Every project starts with a no-pressure conversation. We take the time to understand your goals and offer insight based on decades of experience. Whether your project is residential or commercial, big or small, modern or classic—we're here to help you bring it to life.
      </p>
      <p>
        And when winter hits? Our 24/7 weather monitoring and rapid-response snow and ice control programs help keep your site safe, clean, and accessible. When spring rolls around, we shift gears into full property care mode—trimming, edging, planting, and making sure every inch of your space looks dialed in.
      </p>
      <p>
        At Platinum, we take pride in being a step above the rest—backed by experience, driven by results, and always ready to go the extra mile. But make no mistake: it's our clients who make us. We don't see ourselves as a step above them—we see ourselves right beside them, working together to bring their vision to life. Every project is a partnership, and we treat it—and our clients—with the respect and dedication they deserve.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  max-width: 800px;
  margin: 100px auto;
  padding: 2rem;
  border: 1px solid #ffffff;
  border-radius: 8px;
  background-color: #000000;
  color: #ffffff;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.page-header {
  text-align: center;
  color: #ffffff;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.about-content p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: #ffffff;
  opacity: 0.9;
  font-size: 1rem;
  letter-spacing: 0.3px;
}

.about-content p:first-of-type {
  font-weight: 500;
  opacity: 1;
  font-size: 1.1rem;
}

.about-content {
  text-align: justify;
}

.about-page:hover {
  border-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .about-page {
    margin: 80px 1rem;
    padding: 1.5rem;
  }

  .page-header {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }

  .about-content p {
    font-size: 0.95rem;
  }

  .about-content p:first-of-type {
    font-size: 1rem;
  }
}
</style>
