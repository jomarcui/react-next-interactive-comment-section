export const data = {
    async getInitialValue() {
        const response = await fetch(`http://localhost:3000/api/comments`);
        const data = await response.json();

        console.log(`data`, data)
    }
}