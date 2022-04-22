import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles.css";

function Form() {
  const history = useHistory();
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        "^(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$",
        "Senha deve ter 8 caractéres, um caractere especial e no mínimo 1 letra maiúscula e 1 minúscula"
      ),
    confirmPassword: yup
      .string()
      .required("Confirmação obrigatória")
      .oneOf([yup.ref("password"), null], "Senhas diferentes"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitForm = (data) => {
    history.push(`/Welcome/${data.name}`);
  };
  return (
    <div className="containerForm">
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <h1>Cadastro</h1>
        <input placeholder="Nome" {...register("name")} />
        <p>{errors.name && errors.name.message}</p>
        <input type="email" placeholder="Email" {...register("email")} />
        <p>{errors.email && errors.email.message}</p>
        <input type="password" placeholder="Senha" {...register("password")} />
        <p>{errors.password && errors.password.message}</p>
        <input
          type="password"
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword && errors.confirmPassword.message}</p>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Form;
