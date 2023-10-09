export default defineEventHandler(async(event) => {
    // Handle Query Params
    const { title } = useQuery(event)

    // Handle POST Data must use sync await
    const { postTitle } = await useBody(event)

    return {
        title: title + ' ' + postTitle,
        description: `
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis magni
            natus nostrum enim? Nobis voluptas, est dolorem laboriosam repellat amet
            exercitationem harum alias similique, totam itaque.
        </p>
        <p>
            Ratione cum earum impedit iusto error? Iste mollitia repudiandae quam inventore?
            Quos omnis consectetur totam tenetur asperiores voluptatem, deserunt praesentium
            alias quod ut?
        </p>`,
    }
})