export default defineEventHandler(async(event) => {
    // the name of that file [code]
    const { code } = event.context.params

    const { currencyKey, currencyUrl } = useRuntimeConfig()

    const uri = `${currencyUrl}?currencies=${code}&apikey=${currencyKey}`

    const { data } = await $fetch(uri)

    return data
})