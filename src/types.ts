export type Business = {
    id: string,
    name: string,
    description: string,
    phone: string,
    image: string,
    email: string,
    address: {
        city: string,
        country: string,
        number: string,
        street: string,
        zip: string
    }
}