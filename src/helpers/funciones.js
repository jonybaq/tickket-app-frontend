

export const getInfoLocalStorage = () => {
    return {
        agente: localStorage.getItem('agente') || null,
        cubiculo: localStorage.getItem('cubiculo') ||null
    }
}
