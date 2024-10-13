import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: String(id), name, when }),
    });

    alert("Atendimento agendado com sucesso");
  } catch (error) {
    alert("Erro ao agendar o atendimento, tente novamente mais tarde");
  }
}
