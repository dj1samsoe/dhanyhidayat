const Footer = () => {
  return (
    <div
      className="flex items-center justify-center gap-1 text-center text-neutral-500 dark:text-neutral-300 pb-5"
      data-testid="footer"
    >
      <span>©</span>
      <span>{new Date().getFullYear()}</span>
      <span>by Dhany Hidayat</span>
    </div>
  );
};

export default Footer;
