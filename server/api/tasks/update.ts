export default defineEventHandler(async (event) => {
    const { id } = event.params;
    const updatedTask = event.body;
    return updatedTask
})