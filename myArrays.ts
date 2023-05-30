// const superHeros = []

//according to tutorial, above should defualt to type never, but mine is any

const superHeros: string[] = []
const heroPower: number[] = []
//or
const heroPower2: Array<number> = []

type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = []

superHeros.push('spiderman')

heroPower.push(2)

allUsers.push({name: 'eamonn', isActive: true})

console.log(allUsers)


//lets say you have a 2d array
const MLModels: number[][] = [
    [255, 255, 255],
    []
]

MLModels.push([34, 3])

console.log(MLModels)