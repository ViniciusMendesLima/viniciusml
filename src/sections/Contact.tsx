import axios from "axios";
import styles from "./styles/Contact.module.css";
import { useForm, type SubmitHandler } from "react-hook-form";
const Contact = () => {
  type ContactFormInputs = {
    name: string;
    mail: string;
    message: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormInputs>();

const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    try {
      const response = await axios.post(
        "https://formsubmit.co/ajax/vmlmendes1991@gmail.com",
        data,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log("Mensagem enviada com sucesso!", response.data);
      alert("Mensagem enviada com sucesso!");
      reset();
    } catch (error) {
      console.error("Erro ao enviar a mensagem:", error);
      alert("Erro ao enviar a mensagem. Tente novamente.");
    }
  };
 
  return (
    <section id="Contact" className={styles.Contact}>
      <h2>Contato</h2>
      <form className="Container" onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.FormFieldInput}>
          <div>
            <input
              type="text"
              id="name"
              placeholder="Seu Nome"
              {...register("name", {
                required: "Campo obrigatório",
              })}
            />
            {errors.name && <p>{errors.name.message as string}</p>}
          </div>

          <div>
            <input
              type="email"
              id="mail"
              placeholder="Seu e-mail"
              {...register("mail", {
                required: "Campo obrigatório",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "E-mail inválido",
                },
              })}
            />
            {errors.mail && <p>{errors.mail.message as string}</p>}
          </div>
        </div>
        <div className={styles.FormFieldText}>
          <textarea
            id="message"
            placeholder="Sua mensagem"
            {...register("message", {
              required: "Campo obrigatório",
            })}
          ></textarea>
          {errors.message && <p>{errors.message.message as string}</p>}
        </div>

        <button type="submit">Enviar mensagem</button>
      </form>
    </section>
  );
};
export { Contact };
