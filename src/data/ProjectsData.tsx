const images = import.meta.glob(
  "../assets/projects/*.(webp|jpg|jpeg|png|avif)",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

const projectsMeta = [
  {
  file: "cabelereiro",
  name: "Site Cabelereira",
  link: "https://viniciusmendeslima.github.io/cabelereira/",
  description:
    "Site para apresentação dos serviços de estética e beleza oferecidos por Cabelereira. Desenvolvido em React + TypeScript com Vite, o projeto destaca os principais tratamentos, informações de contato e um layout moderno e responsivo.",
},
  {
  file: "estec",
  name: "ESCTEC Brasil Móveis S.A.",
  link: "https://viniciusmendeslima.github.io/estec-brasil-react/",
  description:
    "Site institucional fictício desenvolvido em React para a ESCTEC Brasil Móveis S.A., empresa de móveis corporativos. O projeto demonstra práticas de componentização, organização de layout e estilização responsiva.",
},
{
  file: "corretor",
  name: "Single page para Corretor",
  link: "https://viniciusmendeslima.github.io/site_corretor/",
  description:
    "Landing page desenvolvida para apresentação e divulgação de serviços de um corretor, adaptada a partir de um template Wix.com. O foco está em layout moderno, responsividade e experiência do usuário.",
},
{
  file: "pokedex",
  name: "Pokedex",
  link: "https://viniciusmendeslima.github.io/pokedex/",
  description:
    "Aplicação em React que consome a API pública PokeAPI para listar e exibir detalhes de Pokémons. O projeto reforça conceitos de consumo de APIs, gerenciamento de estado e renderização dinâmica de componentes.",
},
{
  file: "github-api",
  name: "GitHub API - Buscando Usuários",
  link: "https://viniciusmendeslima.github.io/projeto-inicial-fetch-github-api/",
  description:
    "Aplicação web que permite pesquisar usuários do GitHub e visualizar informações de perfil e repositórios públicos. Desenvolvida em React, utiliza a GitHub API e o método fetch para integração com dados em tempo real.",
},

  
];

export const ProjectsData = projectsMeta.map((project) => {
  const imagePath = Object.keys(images).find((path) =>
    path.includes(project.file)
  
  );

  return {
    ...project,
    imageUrl: imagePath ? images[imagePath] : null,
  };
});
