import { apiConfig } from "./api-config";

export async function scheduleCancel({ id }) {
  try {
    const url = `${apiConfig.baseUrl}/schedules/${id}`;
    console.log(`URL de exclusão: ${url}, Tipo do ID: ${typeof id}`);

    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(
        `Erro ao excluir o agendamento. Status: ${response.status}`
      );
    }

    alert("Agendamento cancelado com sucesso");
  } catch (error) {
    console.error("Erro ao cancelar o agendamento:", error);
    alert("Erro ao cancelar o agendamento, tente novamente mais tarde");
  }
}
