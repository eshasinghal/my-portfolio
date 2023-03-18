const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/eshasinghal">
        <i className="fa-brands fa-github" aria-hidden="true" title="Esha Singhals' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/esha-singhal-464991258/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Esha Singhals' LinkedIn Profile"></i>
      </a>
      {/* <a className="icon" style={styles.icon} href="https://www.instagram.com/michael.yeates/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Esha Singhals' Instagram Profile"></i>
      </a> */}
      {/* <a className="icon" style={styles.icon} href="https://twitter.com/mdyeates">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Esha Singhals' Twitter Profile"></i>
      </a> */}
    </div>
  );
};

export default SocialIcons;
