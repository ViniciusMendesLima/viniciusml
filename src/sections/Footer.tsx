import styles from './styles/Footer.module.css'
const Footer = () => {
  return (
    <footer>
      <div className={styles.Footer}>
        {/* Direitos autorais */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Vinícius Mendes Lima. Todos os direitos reservados.
        </p>

        {/* Links sociais */}
        <div className="flex gap-4">
          <a
            href="https://github.com/ViniciusMendesLima"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vinicius-mendes-lima"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:viniciusmendeslima@yahoo.com"
            className="hover:text-blue-400 transition-colors"
          >
            Contato - viniciusmendeslima@yahoo.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
