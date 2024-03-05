export default defineEventHandler(async (event) => {
    const { id } = event.params;
    return { message: 'Tarefa deletada com sucesso' }
})