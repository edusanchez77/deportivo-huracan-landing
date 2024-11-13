export interface Teams {
    name: String,
    shortName: String,
    lastTournament: {
        games: number,
        won: number,
        tied: number,
        lost: number,
        goalsInFavor: number,
        goalsAgainst: number
    },
    anual: {
        games: number,
        won: number,
        tied: number,
        lost: number,
        goalsInFavor: number,
        goalsAgainst: number
    }
}