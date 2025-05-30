<template>
  <div class="about-page" id="about">
    <h2 class="page-header">About Us</h2>
    <div class="about-content">
      <p>
        After a decade of service operating as Perfect Image Property Management
        Inc. (est. 2012), the company accepted new opportunities allowing for
        continued growth and ease of expansion. Through the company's
        amalgamation with a well-established local contracting enterprise, the
        strength of our collective team ensures continued satisfaction and
        excellence for each of our business clients. Now operating as Platinum
        Enterprise Group, we continue to proudly serve our local community with
        the very same degree of professional service our reputation has long
        been built upon.
      </p>
      <p>
        From traditional landscape and general property maintenance many of
        today's property owners seek, we consistently strive to exceed your
        expectations whether your engagement is that of a traditional yard
        refreshment or more contemporary in nature such as the installation of
        custom stone masonry or a custom water feature. In all settings we
        advocate meeting with you to discuss your vision under a no-obligation
        to proceed basis. In meeting with you we are frequently able to
        complement your ideas from our past experiences. No matter the size or
        scope of your project, Platinum Enterprise Group holds a genuine
        interest in helping you achieve your personal vision.
      </p>
      <p>
        With pride in every aspect of our workmanship, we bring assurance that
        realize three core elements to all clients. Through 24-hour weather
        monitoring and attentive response to fast rising inclement conditions,
        Platinum Enterprise Group ensures public safety under its winter snow
        removal, salting, and ice control programs. Beginning with the arrival
        of Spring we invest ourselves in your pride of ownership by maintaining
        the aesthetically pleasing environment you require within a dedicated
        maintenance program managing grass space, bedding preparation, and
        installation of all greenery. Whether our engagement is within the
        commercial or residential sector, we guarantee a result that is always
        inviting of the public!
      </p>
      <p>
        With years of practical experience and the drive to achieve, we are
        proud to be seen as a step above the rest!
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
